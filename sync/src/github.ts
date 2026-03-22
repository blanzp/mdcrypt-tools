import { Octokit } from '@octokit/rest'

export interface GitHubFile {
  path: string
  status: 'added' | 'modified' | 'removed' | 'renamed'
}

export interface TreeEntry {
  path: string
  type: 'blob' | 'tree'
  sha: string
}

export function createOctokit(token: string): Octokit {
  return new Octokit({ auth: token })
}

export function parseRepo(repo: string): { owner: string; repo: string } {
  const [owner, name] = repo.split('/')
  if (!owner || !name) throw new Error(`Invalid repo format: "${repo}" — expected "owner/repo"`)
  return { owner, repo: name }
}

export async function getHeadSha(octokit: Octokit, owner: string, repo: string, branch: string): Promise<string | null> {
  try {
    const { data } = await octokit.repos.getBranch({ owner, repo, branch })
    return data.commit.sha
  } catch (err: unknown) {
    if ((err as { status?: number }).status === 404) return null
    throw err
  }
}

export async function getFileSha(
  octokit: Octokit, owner: string, repo: string, path: string, branch: string
): Promise<string | null> {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path, ref: branch })
    if (Array.isArray(data)) return null
    return (data as { sha: string }).sha
  } catch (err: unknown) {
    if ((err as { status?: number }).status === 404) return null
    throw err
  }
}

export async function getFileContent(
  octokit: Octokit, owner: string, repo: string, path: string, branch: string
): Promise<{ content: string; sha: string } | null> {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path, ref: branch })
    if (Array.isArray(data) || data.type !== 'file') return null
    const file = data as { content: string; sha: string; encoding: string }
    const decoded = Buffer.from(file.content, 'base64').toString('utf-8')
    return { content: decoded, sha: file.sha }
  } catch (err: unknown) {
    if ((err as { status?: number }).status === 404) return null
    throw err
  }
}

export async function getBinaryContent(
  octokit: Octokit, owner: string, repo: string, path: string, branch: string
): Promise<Buffer | null> {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path, ref: branch })
    if (Array.isArray(data) || data.type !== 'file') return null
    const file = data as { content: string; encoding: string }
    return Buffer.from(file.content, 'base64')
  } catch (err: unknown) {
    if ((err as { status?: number }).status === 404) return null
    throw err
  }
}

export async function putFile(
  octokit: Octokit,
  owner: string,
  repo: string,
  path: string,
  content: string | Buffer,
  message: string,
  branch: string,
  sha?: string
): Promise<void> {
  const encoded = Buffer.isBuffer(content)
    ? content.toString('base64')
    : Buffer.from(content, 'utf-8').toString('base64')

  await octokit.repos.createOrUpdateFileContents({
    owner, repo, path, message, branch,
    content: encoded,
    ...(sha ? { sha } : {}),
  })
}

export async function deleteFile(
  octokit: Octokit,
  owner: string,
  repo: string,
  path: string,
  message: string,
  branch: string,
  sha: string
): Promise<void> {
  await octokit.repos.deleteFile({ owner, repo, path, message, sha, branch })
}

export async function getChangedFilesSince(
  octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  baseSha: string
): Promise<GitHubFile[]> {
  const headSha = await getHeadSha(octokit, owner, repo, branch)
  if (!headSha || headSha === baseSha) return []

  const { data } = await octokit.repos.compareCommits({
    owner, repo,
    base: baseSha,
    head: headSha,
  })

  return (data.files ?? []).map(f => ({
    path: f.filename,
    status: f.status as GitHubFile['status'],
  }))
}

export async function getFullTree(
  octokit: Octokit,
  owner: string,
  repo: string,
  sha: string
): Promise<TreeEntry[]> {
  const { data } = await octokit.git.getTree({ owner, repo, tree_sha: sha, recursive: '1' })
  return (data.tree ?? [])
    .filter(e => e.type === 'blob' && e.path)
    .map(e => ({ path: e.path!, type: 'blob' as const, sha: e.sha! }))
}
