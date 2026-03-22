import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

export interface SyncConfig {
  mdcrypt_url: string       // e.g. https://app.mdcrypt.dev
  mdcrypt_key: string       // sync-scoped API key: mdc_xxxx_yyyy
  crypt_id: string          // UUID of the vault to sync
  github_token: string      // GitHub PAT with repo scope
  repo: string              // owner/repo-name
  branch: string            // default: main
  state_file: string        // default: .sync-state.json
  watch_interval: number    // seconds, default: 600
  sync_statuses: string[] | null  // null = sync all; e.g. ["approved","published"]
}

export function loadConfig(configPath?: string): SyncConfig {
  const path = resolve(configPath ?? '.sync-config.json')

  if (!existsSync(path)) {
    throw new Error(
      `Config file not found: ${path}\n` +
      `Copy .sync-config.example.json to .sync-config.json and fill in your values.`
    )
  }

  const raw = JSON.parse(readFileSync(path, 'utf-8'))

  const required = ['mdcrypt_url', 'mdcrypt_key', 'crypt_id', 'github_token', 'repo']
  for (const key of required) {
    if (!raw[key]) throw new Error(`Missing required config field: ${key}`)
  }

  return {
    mdcrypt_url: raw.mdcrypt_url.replace(/\/$/, ''),
    mdcrypt_key: raw.mdcrypt_key,
    crypt_id: raw.crypt_id,
    github_token: raw.github_token,
    repo: raw.repo,
    branch: raw.branch ?? 'main',
    state_file: raw.state_file ?? '.sync-state.json',
    watch_interval: raw.watch_interval ?? 600,
    sync_statuses: Array.isArray(raw.sync_statuses) ? raw.sync_statuses : null,
  }
}
