# mdcrypt-tools

Two command-line tools for [mdcrypt](https://mdcrypt.dev) — an AI-assisted, offline-first Markdown note-taking app.

## Packages

### `mdcli` — Terminal CLI
Manage your mdcrypt notes, folders, and crypts from the terminal.

### `mdcrypt-sync` — GitHub Sync Service
Bidirectional sync between your mdcrypt vault and a GitHub repository.

---

## mdcli

### Installation
```bash
cd cli
npm install
npm link   # makes `mdcli` available globally
```

### Configuration
```bash
mdcli config
# Prompts for:
#   mdcrypt API URL (default: https://mdcrypt.dev)
#   MDC API Key (mdc_...)
```
Config is stored at `~/.config/mdcrypt/config.json`.

Get your API key from the mdcrypt web app under Settings → API Keys.

### Commands

| Command | Description |
|---------|-------------|
| `mdcli config` | Set API URL and key |
| `mdcli ls` | List recent notes |
| `mdcli ls -t <tag>` | Filter by tag |
| `mdcli ls -q <query>` | Full-text search |
| `mdcli search <query>` | Search notes |
| `mdcli read <id>` | Read a note |
| `mdcli read <id> --raw` | Output raw content (pipeable) |
| `mdcli create` | Create a note (interactive) |
| `mdcli create -t "Title" -c "Content"` | Create directly |
| `mdcli rm <id>` | Delete a note (soft) |
| `mdcli restore <id>` | Restore a deleted note |
| `mdcli append <id>` | Append content to a note |
| `mdcli tag <id> <tags...>` | Set tags on a note |
| `mdcli rename <id> <title>` | Rename a note |
| `mdcli mv <id> [folder_id]` | Move note to folder |
| `mdcli backlinks <id>` | Show notes linking to this note |
| `mdcli folders` | List folders |
| `mdcli mkdir <name>` | Create a folder |
| `mdcli rmdir <id>` | Delete a folder |
| `mdcli crypts` | List crypts (vaults) |

Short IDs (first 8 chars) are accepted everywhere a note ID is needed.

### Options

`ls`:
- `-l, --limit <n>` — max results (default: 10)
- `-t, --tag <tag>` — filter by tag
- `-q, --query <query>` — full-text search

`create`:
- `-t, --title <title>`
- `-c, --content <content>`
- `-f, --folder <path>` — e.g. `Work/Projects`
- `--crypt <uuid>`
- `--tag <tag...>`
- `--template <name>` — system template: `rfc`, `adr`, `meeting`, `research`

---

## mdcrypt-sync

Bidirectional sync between your mdcrypt vault and a GitHub repository. Notes are stored as Markdown files with YAML frontmatter. The `id` field in frontmatter is used as a stable identifier to avoid duplicates.

### Installation
```bash
cd sync
npm install
```

### Configuration

Copy the example config:
```bash
cp .sync-config.example.json .sync-config.json
```

Edit `.sync-config.json`:
```json
{
  "mdcrypt_url": "https://mdcrypt.dev",
  "mdcrypt_key": "mdc_xxxx_yyyyyyyyyyyyyy",
  "crypt_id": "uuid-of-your-crypt",
  "github_token": "ghp_xxxxxxxxxxxx",
  "repo": "owner/repo-name",
  "branch": "main",
  "state_file": ".sync-state.json",
  "watch_interval": 600,
  "sync_statuses": null
}
```

| Field | Description |
|-------|-------------|
| `mdcrypt_url` | Your mdcrypt instance URL |
| `mdcrypt_key` | API key with `api` scope (from Settings → API Keys) |
| `crypt_id` | Full UUID of the vault to sync — get from `mdcli crypts` |
| `github_token` | GitHub PAT with `repo` scope |
| `repo` | `owner/repo-name` |
| `branch` | Branch to sync (default: `main`) |
| `state_file` | Path to sync state file (default: `.sync-state.json`) |
| `watch_interval` | Seconds between syncs in watch mode (default: `600`) |
| `sync_statuses` | `null` to sync all notes, or array of statuses e.g. `["ACCEPTED", "ACTIVE"]` |

### Commands

```bash
npm run dev -- <command>
```

| Command | Description |
|---------|-------------|
| `status` | Show sync state and pending change counts |
| `push` | Push mdcrypt changes to GitHub |
| `pull` | Pull GitHub changes into mdcrypt |
| `sync` | Full bidirectional sync (pull then push) |
| `watch` | Run sync on an interval |

### Options

`watch`:
- `-i, --interval <seconds>` — override config interval

All commands:
- `-c, --config <path>` — path to config file (default: `.sync-config.json`)

### File Format

Notes are stored as:
```markdown
---
id: <uuid>
tags: [tag1, tag2]
status: DRAFT
---
Note body here
```

- **`id`** is written back to GitHub automatically if a file has no frontmatter
- **`status`** reflects the note's acceptance state: `DRAFT`, `ACTIVE`, `UNDER_REVIEW`, `ACCEPTED`, `REJECTED`, `SUPERCEDED`
- Templates are not synced
- Sync state is tracked in `.sync-state.json` — delete it to force a full re-sync

### Status Filtering

To only sync notes with specific statuses to GitHub:
```json
"sync_statuses": ["ACCEPTED", "ACTIVE"]
```

Deleted notes are always synced regardless of status.

---

## API Keys

Both tools require an API key from your mdcrypt instance.

1. Open mdcrypt → Settings → API Keys
2. Generate a key with `api` scope
3. Copy the full key (shown once): `mdc_xxxx_yyyyyyyyyyyyyy`

---

## Self-hosted

If you're running a self-hosted mdcrypt instance, set `mdcrypt_url` to your instance URL in both the CLI config and sync config.
