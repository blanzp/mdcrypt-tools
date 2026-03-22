import yaml from 'js-yaml'

export const TEXT_EXTS = new Set(['.mmd', '.mermaid', '.svg', '.yaml', '.yml', '.json', '.csv', '.toml'])
export const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
export const TEMPLATE_DIR = '.mdcrypt/templates'

export function sanitizeFilename(name: string): string {
  return name
    .replace(/\//g, '-')
    .replace(/[<>:"\\|?*\x00-\x1f]/g, '')
    .trim()
    .replace(/\.+$/, '')   // no trailing dots
    || 'untitled'
}

export function notePath(title: string, folderPath: string | null): string {
  const name = sanitizeFilename(title) + '.md'
  return folderPath ? `${folderPath}/${name}` : name
}

export function assetPath(assetName: string, folderPath: string | null): string {
  return folderPath ? `${folderPath}/${assetName}` : assetName
}

export function templatePath(name: string): string {
  return `${TEMPLATE_DIR}/${sanitizeFilename(name)}.md`
}

export interface NoteFrontmatter {
  id: string
  tags?: string[]
  status?: string
}

export function stripFrontmatter(content: string): string {
  if (!content.startsWith('---\n')) return content
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return content
  return content.slice(end + 5)
}

export function noteToFileContent(id: string, title: string, content: string, tags: string[], status: string | null): string {
  const fm: Record<string, unknown> = { id }
  if (tags.length) fm.tags = tags
  if (status) fm.status = status
  const fmStr = (yaml.dump(fm, { lineWidth: -1 }) as string).trim()
  const body = stripFrontmatter(content ?? '')
  return `---\n${fmStr}\n---\n${body}`
}

export interface ParsedNoteFile {
  id?: string
  tags: string[]
  status?: string
  body: string
}

export function parseNoteFile(raw: string): ParsedNoteFile {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { tags: [], body: raw }

  try {
    const fm = yaml.load(match[1]) as Record<string, unknown>
    const tags = Array.isArray(fm.tags) ? fm.tags as string[] : []
    return {
      id: typeof fm.id === 'string' ? fm.id : undefined,
      tags,
      status: typeof fm.status === 'string' ? fm.status : undefined,
      body: match[2] ?? '',
    }
  } catch {
    return { tags: [], body: raw }
  }
}

export interface ParsedTemplateFile {
  id?: string
  description?: string
  body: string
}

export function templateToFileContent(id: string, name: string, content: string, description?: string | null): string {
  const fm: Record<string, unknown> = { id, name }
  if (description) fm.description = description
  const fmStr = (yaml.dump(fm, { lineWidth: -1 }) as string).trim()
  return `---\n${fmStr}\n---\n${content}`
}

export function parseTemplateFile(raw: string): ParsedTemplateFile {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { body: raw }

  try {
    const fm = yaml.load(match[1]) as Record<string, unknown>
    return {
      id: typeof fm.id === 'string' ? fm.id : undefined,
      description: typeof fm.description === 'string' ? fm.description : undefined,
      body: match[2] ?? '',
    }
  } catch {
    return { body: raw }
  }
}

/** Split a file path into folder parts and filename. */
export function parsePath(filePath: string): { folderParts: string[]; filename: string } {
  const parts = filePath.split('/')
  const filename = parts.pop()!
  return { folderParts: parts, filename }
}

/** Determine if a GitHub path is a template file. */
export function isTemplatePath(filePath: string): boolean {
  return filePath.startsWith(TEMPLATE_DIR + '/')
}

/** Get the file extension (lower case, with dot). */
export function fileExt(filename: string): string {
  const idx = filename.lastIndexOf('.')
  return idx >= 0 ? filename.slice(idx).toLowerCase() : ''
}
