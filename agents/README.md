# mdcrypt Agents

This directory contains configuration files and persona setup agents for integrating mdcrypt with AI coding assistants via the Model Context Protocol (MCP).

## What Is This?

mdcrypt exposes an MCP server that allows AI assistants to read and write your notes directly. Once configured, your AI assistant can create notes, organize folders, search your vault, and maintain your knowledge base — all without leaving your coding environment.

The `configuration/` directory has setup guides for each supported client. The `personas/` directory has ready-to-use setup prompts that scaffold a complete folder and template structure for a specific workflow.

## Getting an API Key

1. Open the mdcrypt app
2. Go to **Settings → API Keys**
3. Click **Create API Key**
4. Copy the key — it starts with `mdc_`

Keep this key secret. It grants full read/write access to your vault.

## Quick Start

1. **Pick a client config** from the table below and follow the setup steps
2. **Verify the connection** by asking your AI assistant to call `list_crypts`
3. **Optionally run a persona setup** — paste the prompt from any persona file into your AI assistant to scaffold templates and folders for your workflow

## Supported Clients

| Client | Config File | Guide |
|---|---|---|
| Claude Code (CLI) | `~/.claude/settings.json` | [configuration/claude-code.md](configuration/claude-code.md) |
| Cursor | `~/.cursor/mcp.json` | [configuration/cursor.md](configuration/cursor.md) |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` | [configuration/windsurf.md](configuration/windsurf.md) |
| Cline (VS Code) | Cline sidebar → MCP Servers | [configuration/cline.md](configuration/cline.md) |
| Continue.dev | `~/.continue/config.yaml` | [configuration/continue.md](configuration/continue.md) |

## Available Personas

Persona setup prompts scaffold a full vault structure — templates and folders — tailored to a specific kind of work. Run a persona once after configuring MCP to get a ready-to-use workspace.

| Persona | Description | File |
|---|---|---|
| Developer | Software engineering: bugs, RFCs, ADRs, sprints, incidents | [personas/developer.md](personas/developer.md) |
| Author | Creative writing: outlines, character sheets, world building, drafts | [personas/author.md](personas/author.md) |
| Researcher | Academic research: proposals, lit review, experiments, papers | [personas/researcher.md](personas/researcher.md) |
| Teacher | Education: lesson plans, assessments, student notes, courses | [personas/teacher.md](personas/teacher.md) |
| Scientist | Lab research: lab notebooks, protocols, data analysis, grants | [personas/scientist.md](personas/scientist.md) |
| Office Worker | Knowledge work: meetings, status reports, processes, decisions | [personas/office-worker.md](personas/office-worker.md) |
| Business Owner | Entrepreneurship: strategy, finance, customers, operations, team | [personas/business-owner.md](personas/business-owner.md) |
| Personal | Personal productivity: journal, goals, books, travel, health | [personas/personal.md](personas/personal.md) |

> Persona prompts require an AI assistant that already has mdcrypt MCP configured. Complete the client setup first, verify the connection, then paste the persona prompt.
