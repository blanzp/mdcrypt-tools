# Persona Setup Agents

Persona setup agents are ready-to-use prompts that scaffold a complete vault structure in mdcrypt — templates, folders, and subfolders — tailored to a specific kind of work.

## What They Do

Each persona prompt instructs your AI assistant to:

1. Call `list_crypts` to discover your available vaults
2. Create a set of templates with complete, usable markdown content
3. Create a folder hierarchy organized for that workflow

After running a persona, your vault is immediately ready to use. Templates appear in `list_templates` and folders appear in `list_folders`.

## How to Use

1. **Configure MCP first** — your AI assistant must have mdcrypt MCP set up before running a persona. See the [configuration guides](../configuration/).
2. **Verify the connection** — ask your AI to call `list_crypts` and confirm it returns your vaults.
3. **Open the persona file** — copy everything under the "Setup Prompt" heading.
4. **Paste it into your AI assistant** — in Claude Code, Cursor, Cline, or whichever client you configured.
5. **Follow along** — the AI will ask which crypt to use if you have multiple, then proceed to create everything.

The entire setup typically takes 1–3 minutes depending on how many templates and folders the persona creates.

## Notes

- You can run multiple personas in **different crypts** to keep workspaces separate
- Running a persona twice in the same crypt is safe — it will create duplicate templates and folders, so only run each persona once per crypt
- You can edit any template after creation using `update_template`
- Folder structures are suggestions — feel free to reorganize after setup

## Available Personas

| Persona | File | Templates | Description |
|---|---|---|---|
| Developer | [developer.md](developer.md) | 10 | Software engineering: bugs, RFCs, ADRs, sprints, incidents |
| Author | [author.md](author.md) | 9 | Creative writing: outlines, character sheets, world building, drafts |
| Researcher | [researcher.md](researcher.md) | 9 | Academic research: proposals, lit review, experiments, papers |
| Teacher | [teacher.md](teacher.md) | 9 | Education: lesson plans, assessments, student notes, courses |
| Scientist | [scientist.md](scientist.md) | 9 | Lab research: lab notebooks, protocols, data analysis, grants |
| Office Worker | [office-worker.md](office-worker.md) | 8 | Knowledge work: meetings, status reports, processes, decisions |
| Business Owner | [business-owner.md](business-owner.md) | 10 | Entrepreneurship: strategy, finance, customers, operations, team |
| Personal | [personal.md](personal.md) | 9 | Personal productivity: journal, goals, books, travel, health |
