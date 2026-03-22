# Claude Code MCP Setup

Connect mdcrypt to the Claude Code CLI so Claude can read and write your notes directly from your terminal.

## Prerequisites

- Claude Code installed (`npm install -g @anthropic-ai/claude-code` or equivalent)
- An mdcrypt API key (Settings → API Keys in the mdcrypt app)
- Your mdcrypt host URL

## Configuration

Claude Code reads MCP server config from a JSON settings file. You can configure it globally (applies to all projects) or per-project.

### Global Config

File: `~/.claude/settings.json`

If the file does not exist, create it. Add the `mcpServers` block:

```json
{
  "mcpServers": {
    "mdcrypt": {
      "type": "http",
      "url": "https://YOUR_MDCRYPT_HOST/mcp",
      "headers": {
        "Authorization": "Bearer mdc_YOUR_KEY_HERE"
      }
    }
  }
}
```

### Project-Level Config

File: `.claude/settings.json` in your project root

Use the same JSON structure. Project-level config takes precedence over global config for that project.

```json
{
  "mcpServers": {
    "mdcrypt": {
      "type": "http",
      "url": "https://YOUR_MDCRYPT_HOST/mcp",
      "headers": {
        "Authorization": "Bearer mdc_YOUR_KEY_HERE"
      }
    }
  }
}
```

## Replacing the Placeholders

| Placeholder | Replace with |
|---|---|
| `YOUR_MDCRYPT_HOST` | Your mdcrypt host (e.g. `notes.example.com` or `localhost:3000`) |
| `mdc_YOUR_KEY_HERE` | Your API key from Settings → API Keys |

## Verifying the Connection

1. Open a terminal and run `claude`
2. Ask Claude: `"Use the mdcrypt MCP tool to call list_crypts and tell me what crypts I have"`
3. Claude should return a list of your vaults

If you see an error, double-check:
- The URL is reachable from your machine
- The API key is correct and has not been revoked
- The JSON in your settings file is valid (no trailing commas)

## Global vs Project Config

Use **global config** if you want mdcrypt available in every Claude Code session regardless of which directory you are working in.

Use **project-level config** if you want to scope access to a specific project, or if different projects use different mdcrypt instances or API keys. Commit `.claude/settings.json` to share the server URL with your team, but never commit a real API key — use an environment variable or have each developer fill in their own key.
