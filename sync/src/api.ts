import type { SyncConfig } from './config.js'

export interface ApiFolder {
  id: string
  name: string
  parent_id: string | null
  path: string
}

export interface ApiNote {
  id: string
  title: string
  content: string
  tags: string[]
  status: string | null
  folder_path: string | null
  is_deleted: boolean
  updated_at: string
  version: number
}

export interface ApiTextAsset {
  id: string
  name: string
  ext: string
  content: string
  folder_path: string | null
  is_deleted: boolean
  updated_at: string
}

export interface ApiImageAsset {
  id: string
  name: string
  ext: string
  download_url: string | null
  folder_path: string | null
  is_deleted: boolean
  updated_at: string
}

export interface ApiTemplate {
  id: string
  name: string
  content: string
  description: string | null
  updated_at: string
}

export class MdcryptApi {
  private url: string
  private key: string
  private cryptId: string

  constructor(config: SyncConfig) {
    this.url = config.mdcrypt_url
    this.key = config.mdcrypt_key
    this.cryptId = config.crypt_id
  }

  private headers() {
    return { Authorization: `Bearer ${this.key}`, 'Content-Type': 'application/json' }
  }

  private async get<T>(path: string, params: Record<string, string> = {}): Promise<T> {
    const qs = new URLSearchParams({ crypt_id: this.cryptId, ...params })
    const res = await fetch(`${this.url}${path}?${qs}`, { headers: this.headers() })
    if (!res.ok) {
      const body = await res.text()
      throw new Error(`GET ${path} → ${res.status}: ${body}`)
    }
    return res.json() as Promise<T>
  }

  private async put(path: string, body: unknown): Promise<void> {
    const res = await fetch(`${this.url}${path}`, {
      method: 'PUT',
      headers: this.headers(),
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`PUT ${path} → ${res.status}: ${text}`)
    }
  }

  private async del(path: string): Promise<void> {
    const res = await fetch(`${this.url}${path}`, { method: 'DELETE', headers: this.headers() })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`DELETE ${path} → ${res.status}: ${text}`)
    }
  }

  async getFolders(): Promise<ApiFolder[]> {
    return this.get('/api/v1/folders')
  }

  async getNotesSince(since: string | null): Promise<ApiNote[]> {
    const params: Record<string, string> = {}
    if (since) params.since = since
    return this.get('/api/v1/notes', params)
  }

  async getTextAssetsSince(since: string | null): Promise<ApiTextAsset[]> {
    const params: Record<string, string> = { kind: 'text' }
    if (since) params.since = since
    return this.get('/api/v1/assets', params)
  }

  async getImageAssetsSince(since: string | null): Promise<ApiImageAsset[]> {
    const params: Record<string, string> = { kind: 'image' }
    if (since) params.since = since
    return this.get('/api/v1/assets', params)
  }

  async getTemplates(): Promise<ApiTemplate[]> {
    return this.get('/api/v1/templates')
  }

  async upsertNote(id: string, data: Omit<ApiNote, 'id' | 'is_deleted' | 'updated_at' | 'version'>): Promise<void> {
    await this.put(`/api/v1/notes/${id}`, { ...data, crypt_id: this.cryptId })
  }

  async deleteNote(id: string): Promise<void> {
    await this.del(`/api/v1/notes/${id}`)
  }

  async upsertTextAsset(id: string, data: Omit<ApiTextAsset, 'id' | 'is_deleted' | 'updated_at'>): Promise<void> {
    await this.put(`/api/v1/assets/${id}`, { ...data, crypt_id: this.cryptId })
  }

  async deleteAsset(id: string): Promise<void> {
    await this.del(`/api/v1/assets/${id}`)
  }

  async upsertImageAsset(id: string, name: string, ext: string, folderPath: string | null, fileBuffer: Buffer): Promise<void> {
    const form = new FormData()
    form.append('crypt_id', this.cryptId)
    form.append('name', name)
    form.append('ext', ext)
    if (folderPath) form.append('folder_path', folderPath)
    form.append('file', new Blob([fileBuffer.buffer as ArrayBuffer]), name)

    const authHeader = { Authorization: `Bearer ${this.key}` }
    const res = await fetch(`${this.url}/api/v1/assets/${id}/binary`, {
      method: 'POST',
      headers: authHeader,
      body: form,
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`POST /api/v1/assets/${id}/binary → ${res.status}: ${text}`)
    }
  }

  async upsertTemplate(id: string, data: Omit<ApiTemplate, 'id' | 'updated_at'>): Promise<void> {
    await this.put(`/api/v1/templates/${id}`, data)
  }
}
