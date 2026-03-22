# Cline MCP Setup

Connect mdcrypt to Cline (the VS Code extension) so it can read and write your notes during agentic tasks.

## Prerequisites

- VS Code with the Cline extension installed (`saoudrizwan.claude-dev`)
- An mdcrypt API key (Settings → API Keys in the mdcrypt app)
- Your mdcrypt host URL

## Configuration

Cline manages MCP servers through its sidebar UI, which edits a JSON settings file for you.

### Using the Cline Sidebar

1. Open VS Code
2. Click the Cline icon in the Activity Bar to open the Cline panel
3. Click **MCP Servers** (the plug icon or tab within Cline)
4. Click **Edit MCP Settings** — this opens the raw JSON file

### Settings File Location

Cline stores MCP settings at:

- **macOS:** `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Linux:** `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Windows:** `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`

### JSON Config

Add the `mdcrypt` entry to the `mcpServers` object:

```json
{
  "mcpServers": {
    "mdcrypt": {
      "url": "https://YOUR_MDCRYPT_HOST/mcp",
      "transportType": "streamable-http",
      "headers": {
        "Authorization": "Bearer mdc_YOUR_KEY_HERE"
      }
    }
  }
}
```

If there are already other MCP servers configured, add `mdcrypt` alongside them — do not replace the entire file.

## Replacing the Placeholders

| Placeholder | Replace with |
|---|---|
| `YOUR_MDCRYPT_HOST` | Your mdcrypt host (e.g. `notes.example.com` or `localhost:3000`) |
| `mdc_YOUR_KEY_HERE` | Your API key from Settings → API Keys |

## Verifying the Connection

1. Save the settings file
2. In the Cline MCP Servers panel, mdcrypt should appear with a green status indicator
3. Start a new Cline task and ask: `"Call list_crypts on the mdcrypt MCP server"`
4. Cline should return your vault list

If the server shows as disconnected:
- Check that `transportType` is set to `"streamable-http"`
- Verify the URL is reachable
- Confirm the API key is valid
- Reload VS Code if the settings file was edited manually outside the Cline UI
