# Continue.dev MCP Setup

Connect mdcrypt to Continue.dev so the AI assistant can read and write your notes from inside VS Code or JetBrains.

## Prerequisites

- Continue extension installed in VS Code or a JetBrains IDE
- An mdcrypt API key (Settings → API Keys in the mdcrypt app)
- Your mdcrypt host URL

## Configuration

Continue reads its config from `~/.continue/config.yaml` (YAML format, recommended) or `~/.continue/config.json` (legacy JSON format).

### YAML Config (`~/.continue/config.yaml`)

Add the `experimental.modelContextProtocolServers` section:

```yaml
experimental:
  modelContextProtocolServers:
    - transport:
        type: http
        url: https://YOUR_MDCRYPT_HOST/mcp
        headers:
          Authorization: "Bearer mdc_YOUR_KEY_HERE"
```

If you already have other MCP servers configured, add the mdcrypt entry to the existing list:

```yaml
experimental:
  modelContextProtocolServers:
    - transport:
        type: http
        url: https://other-server.example.com/mcp
        headers:
          Authorization: "Bearer other_key"
    - transport:
        type: http
        url: https://YOUR_MDCRYPT_HOST/mcp
        headers:
          Authorization: "Bearer mdc_YOUR_KEY_HERE"
```

### JSON Config (`~/.continue/config.json`)

If you are using the legacy JSON format, add to the `experimental` object:

```json
{
  "experimental": {
    "modelContextProtocolServers": [
      {
        "transport": {
          "type": "http",
          "url": "https://YOUR_MDCRYPT_HOST/mcp",
          "headers": {
            "Authorization": "Bearer mdc_YOUR_KEY_HERE"
          }
        }
      }
    ]
  }
}
```

## Replacing the Placeholders

| Placeholder | Replace with |
|---|---|
| `YOUR_MDCRYPT_HOST` | Your mdcrypt host (e.g. `notes.example.com` or `localhost:3000`) |
| `mdc_YOUR_KEY_HERE` | Your API key from Settings → API Keys |

## Verifying the Connection

1. Save the config file
2. Reload the Continue extension (or restart your IDE)
3. Open the Continue chat panel
4. Ask: `"Use the mdcrypt MCP tool to call list_crypts"`
5. Continue should return your list of vaults

If the tools are not available:
- Check that the YAML indentation is correct (YAML is whitespace-sensitive)
- Verify the URL is reachable from your machine
- Confirm the API key is valid
- Check the Continue output panel for connection errors
