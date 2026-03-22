# Windsurf MCP Setup

Connect mdcrypt to Windsurf (by Codeium) so Cascade can read and write your notes while you work.

## Prerequisites

- Windsurf installed
- An mdcrypt API key (Settings → API Keys in the mdcrypt app)
- Your mdcrypt host URL

## Configuration

File: `~/.codeium/windsurf/mcp_config.json`

If the file does not exist, create it. The directory `~/.codeium/windsurf/` should already exist if Windsurf has been run at least once.

```json
{
  "mcpServers": {
    "mdcrypt": {
      "serverUrl": "https://YOUR_MDCRYPT_HOST/mcp",
      "headers": {
        "Authorization": "Bearer mdc_YOUR_KEY_HERE"
      }
    }
  }
}
```

> Note: Windsurf uses `serverUrl` (not `url`) as the key name. Use the exact key shown above.

## Replacing the Placeholders

| Placeholder | Replace with |
|---|---|
| `YOUR_MDCRYPT_HOST` | Your mdcrypt host (e.g. `notes.example.com` or `localhost:3000`) |
| `mdc_YOUR_KEY_HERE` | Your API key from Settings → API Keys |

## Verifying the Connection

1. Restart Windsurf after saving the config file
2. Open Cascade (the AI panel)
3. Ask: `"Use the mdcrypt MCP tool to call list_crypts"`
4. Cascade should return your list of vaults

If the tool is not available:
- Confirm the file path is exactly `~/.codeium/windsurf/mcp_config.json`
- Validate the JSON (no trailing commas, correct quote characters)
- Check that Windsurf was restarted after the change
- Ensure the mdcrypt server is running and accessible from your machine
