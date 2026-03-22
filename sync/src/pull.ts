import { randomUUID } from 'crypto'
import {
  createOctokit, parseRepo, getHeadSha, getFileContent, getBinaryContent,
  getChangedFilesSince, getFullTree, putFile,
} from './github.js'
import { MdcryptApi } from './api.js'
import {
  parseNoteFile, parsePath, fileExt,
  TEXT_EXTS, IMAGE_EXTS,
} from './mapper.js'
import type { SyncConfig } from './config.js'
import type { SyncState } from './state.js'

export async function pull(config: SyncConfig, state: SyncState): Promise<SyncState> {
  const api = new MdcryptApi(config)
  const octokit = createOctokit(config.github_token)
  const { owner, repo } = parseRepo(config.repo)
  const { branch } = config

  const headSha = await getHeadSha(octokit, owner, repo, branch)
  if (!headSha) {
    console.log('[PULL] Repository is empty or branch not found — nothing to pull.')
    return state
  }

  if (headSha === state.last_pull_sha) {
    console.log('[PULL] Already up to date.')
    return state
  }

  // ── Determine which files to process ──
  let filesToProcess: Array<{ path: string; status: 'added' | 'modified' | 'removed' | 'renamed' }>

  if (!state.last_pull_sha) {
    console.log('[PULL] First pull — full tree scan')
    const tree = await getFullTree(octokit, owner, repo, headSha)
    filesToProcess = tree.map(e => ({ path: e.path, status: 'added' as const }))
  } else {
    console.log(`[PULL] Incremental pull since ${state.last_pull_sha}`)
    filesToProcess = await getChangedFilesSince(octokit, owner, repo, branch, state.last_pull_sha)
  }

  console.log(`[PULL] Processing ${filesToProcess.length} changed files`)

  // Pre-fetch folder map for path-to-folder-path lookups
  const folders = await api.getFolders()
  const folderByPath = new Map(folders.map(f => [f.path, f]))

  for (const { path, status } of filesToProcess) {
    // Skip non-content files and the entire .mdcrypt/ dir
    if (path.startsWith('.git') || path.startsWith('.mdcrypt/')) continue

    const ext = fileExt(path)

    // ── Deleted files ──
    if (status === 'removed') {
      await handleRemoved(api, path, ext)
      continue
    }

    // ── Notes ──
    if (ext === '.md') {
      const file = await getFileContent(octokit, owner, repo, path, branch)
      if (!file) continue
      const parsed = parseNoteFile(file.content)
      const isNew = !parsed.id
      const id = parsed.id ?? randomUUID()
      const { folderParts, filename } = parsePath(path)
      const folderPath = folderParts.join('/') || null
      const title = filename.replace(/\.md$/, '')
      await api.upsertNote(id, {
        title,
        content: parsed.body,
        tags: parsed.tags,
        status: parsed.status ?? null,
        folder_path: folderPath,
      })
      // Write UUID back to GitHub so future pulls are idempotent
      if (isNew) {
        const { noteToFileContent } = await import('./mapper.js')
        const written = noteToFileContent(id, title, parsed.body, parsed.tags, parsed.status ?? null)
        await putFile(octokit, owner, repo, path, written, `sync: assign id to ${path}`, branch, file.sha)
        console.log(`[PULL] note (assigned id): ${path}`)
      } else {
        console.log(`[PULL] note: ${path}`)
      }
      continue
    }

    // ── Text assets ──
    if (TEXT_EXTS.has(ext)) {
      const file = await getFileContent(octokit, owner, repo, path, branch)
      if (!file) continue
      const { folderParts, filename } = parsePath(path)
      const folderPath = folderParts.join('/') || null
      // Try to find existing asset by name+folder
      const id = findAssetId(path, folderByPath, folders) ?? randomUUID()
      await api.upsertTextAsset(id, {
        name: filename,
        ext,
        content: file.content,
        folder_path: folderPath,
      })
      console.log(`[PULL] text asset: ${path}`)
      continue
    }

    // ── Image assets ──
    if (IMAGE_EXTS.has(ext)) {
      const buffer = await getBinaryContent(octokit, owner, repo, path, branch)
      if (!buffer) continue
      const { folderParts, filename } = parsePath(path)
      const folderPath = folderParts.join('/') || null
      const id = findAssetId(path, folderByPath, folders) ?? randomUUID()
      await api.upsertImageAsset(id, filename, ext, folderPath, buffer)
      console.log(`[PULL] image: ${path}`)
      continue
    }
  }

  console.log(`[PULL] Done. HEAD is now ${headSha}`)
  return { ...state, last_pull_sha: headSha }
}

async function handleRemoved(
  api: MdcryptApi,
  path: string,
  ext: string
): Promise<void> {
  // We can only soft-delete by ID, but for removed files we don't have the ID unless
  // it was in frontmatter. Since we can't read the deleted file, we skip hard-delete
  // for now and log a warning. Future: maintain a path→id index in state.
  console.warn(`[PULL] removed file detected but cannot resolve ID: ${path} — manual cleanup may be needed`)
}

/** Try to find an existing asset ID by matching path against known folders. */
function findAssetId(
  filePath: string,
  _folderByPath: Map<string, { id: string; path: string }>,
  _folders: { id: string; path: string }[]
): string | undefined {
  // Without a local state index mapping path→id, we can't reliably find the existing asset.
  // Return undefined to generate a new UUID (idempotent inserts via PUT use the same path resolution).
  // Future improvement: maintain path→id index in .sync-state.json.
  return undefined
}
