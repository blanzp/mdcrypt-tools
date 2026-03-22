import { createOctokit, parseRepo, getFileSha, putFile, deleteFile } from './github.js'
import { MdcryptApi } from './api.js'
import {
  noteToFileContent, notePath, assetPath,
} from './mapper.js'
import type { SyncConfig } from './config.js'
import type { SyncState } from './state.js'

export async function push(config: SyncConfig, state: SyncState): Promise<SyncState> {
  const api = new MdcryptApi(config)
  const octokit = createOctokit(config.github_token)
  const { owner, repo } = parseRepo(config.repo)
  const { branch } = config
  const since = state.last_push_at

  console.log(`[PUSH] Fetching records updated since ${since ?? 'beginning'}`)

  const [notes, textAssets, imageAssets] = await Promise.all([
    api.getNotesSince(since),
    api.getTextAssetsSince(since),
    api.getImageAssetsSince(since),
  ])

  console.log(`[PUSH] ${notes.length} notes, ${textAssets.length} text assets, ${imageAssets.length} image assets`)

  // ── Notes ──
  const { sync_statuses } = config
  for (const note of notes) {
    if (sync_statuses && !note.is_deleted && !sync_statuses.includes(note.status ?? '')) {
      console.log(`[PUSH] skip note (status "${note.status ?? 'none'}" not in sync_statuses): ${note.title}`)
      continue
    }
    const path = notePath(note.title || 'untitled', note.folder_path)

    if (note.is_deleted) {
      const sha = await getFileSha(octokit, owner, repo, path, branch)
      if (sha) {
        await deleteFile(octokit, owner, repo, path, `sync: delete ${path}`, branch, sha)
        console.log(`[PUSH] deleted note: ${path}`)
      }
      continue
    }

    const content = noteToFileContent(note.id, note.title, note.content, note.tags, note.status)
    const sha = await getFileSha(octokit, owner, repo, path, branch)
    await putFile(octokit, owner, repo, path, content, `sync: update ${path}`, branch, sha ?? undefined)
    console.log(`[PUSH] note: ${path}`)
  }

  // ── Text assets ──
  for (const asset of textAssets) {
    const path = assetPath(asset.name, asset.folder_path)

    if (asset.is_deleted) {
      const sha = await getFileSha(octokit, owner, repo, path, branch)
      if (sha) {
        await deleteFile(octokit, owner, repo, path, `sync: delete ${path}`, branch, sha)
        console.log(`[PUSH] deleted asset: ${path}`)
      }
      continue
    }

    const sha = await getFileSha(octokit, owner, repo, path, branch)
    await putFile(octokit, owner, repo, path, asset.content, `sync: update ${path}`, branch, sha ?? undefined)
    console.log(`[PUSH] asset: ${path}`)
  }

  // ── Image assets ──
  for (const asset of imageAssets) {
    const path = assetPath(asset.name, asset.folder_path)

    if (asset.is_deleted) {
      const sha = await getFileSha(octokit, owner, repo, path, branch)
      if (sha) {
        await deleteFile(octokit, owner, repo, path, `sync: delete ${path}`, branch, sha)
        console.log(`[PUSH] deleted image: ${path}`)
      }
      continue
    }

    if (!asset.download_url) {
      console.warn(`[PUSH] skip image (no download URL): ${path}`)
      continue
    }

    const res = await fetch(asset.download_url)
    if (!res.ok) {
      console.warn(`[PUSH] failed to download image ${path}: ${res.status}`)
      continue
    }

    const buffer = Buffer.from(await res.arrayBuffer())
    const sha = await getFileSha(octokit, owner, repo, path, branch)
    await putFile(octokit, owner, repo, path, buffer, `sync: update ${path}`, branch, sha ?? undefined)
    console.log(`[PUSH] image: ${path}`)
  }


  const now = new Date().toISOString()
  console.log(`[PUSH] Done. Updated last_push_at to ${now}`)
  return { ...state, last_push_at: now }
}
