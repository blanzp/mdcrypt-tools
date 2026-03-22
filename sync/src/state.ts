import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

export interface SyncState {
  last_push_at: string | null   // ISO timestamp of last successful push
  last_pull_sha: string | null  // GitHub commit SHA of last successful pull
}

const DEFAULTS: SyncState = {
  last_push_at: null,
  last_pull_sha: null,
}

export function loadState(filePath: string): SyncState {
  const path = resolve(filePath)
  if (!existsSync(path)) return { ...DEFAULTS }
  try {
    return { ...DEFAULTS, ...JSON.parse(readFileSync(path, 'utf-8')) }
  } catch {
    return { ...DEFAULTS }
  }
}

export function saveState(filePath: string, state: SyncState): void {
  writeFileSync(resolve(filePath), JSON.stringify(state, null, 2), 'utf-8')
}
