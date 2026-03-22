# Cursor MCP Setup

Connect mdcrypt to Cursor so the AI can read and write your notes while you code.

## Prerequisites

- Cursor installed (version 0.40 or later recommended — MCP support varies by version)
- An mdcrypt API key (Settings → API Keys in the mdcrypt app)
- Your mdcrypt host URL

## Enable MCP in Cursor

1. Open Cursor
2. Go to **Settings** (Cmd/Ctrl + ,)
3. Search for **MCP** or navigate to **Features → MCP**
4. Ensure MCP is enabled

## Configuration

Cursor reads MCP server config from a JSON file. You can configure it globally or per-project.

### Global Config

File: `~/.cursor/mcp.json`

If the file does not exist, create it:

```json
{
  "mcpServers": {
    "mdcrypt": {
      "url": "https://YOUR_MDCRYPT_HOST/mcp",
      "headers": {
        "Authorization": "Bearer mdc_YOUR_KEY_HERE"
      }
    }
  }
}
```

### Project-Level Config

File: `.cursor/mcp.json` in your project root

Use the same JSON structure. This config applies only when Cursor has that project open.

```json
{
  "mcpServers": {
    "mdcrypt": {
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

1. Restart Cursor after saving the config file
2. Open the AI chat panel (Cmd/Ctrl + L)
3. Ask: `"Call the mdcrypt list_crypts tool and show me my vaults"`
4. The AI should list your crypts

If the tool does not appear, check:
- MCP is enabled in Cursor settings
- The JSON file is valid and saved
- Cursor was restarted after the config change
- The URL is reachable from your machine
