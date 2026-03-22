import path from 'path';
import fs from 'fs/promises';
import os from 'os';

const CONFIG_DIR = path.join(os.homedir(), '.config', 'mdcrypt');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

export async function getConfig() {
  try {
    const data = await fs.readFile(CONFIG_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export async function setConfig(config) {
  await fs.mkdir(CONFIG_DIR, { recursive: true });
  await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
}

function apiHeaders(apiKey) {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` };
}

async function requireConfig() {
  const config = await getConfig();
  const apiUrl = config.apiUrl || 'https://mdcrypt.dev';
  const apiKey = config.apiKey;
  if (!apiKey) throw new Error('MDC_API_KEY_MISSING: Please run "mdcli config" to set your API Key.');
  return { apiUrl, apiKey };
}

async function apiFetch(method, path, body) {
  const { apiUrl, apiKey } = await requireConfig();
  const url = `${apiUrl}${path}`;
  const opts = { method, headers: apiHeaders(apiKey) };
  if (body !== undefined) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  if (res.status === 204) return null;
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
  return json;
}

const get = (path) => apiFetch('GET', path);
const post = (path, body) => apiFetch('POST', path, body);
const patch = (path, body) => apiFetch('PATCH', path, body);
const put = (path, body) => apiFetch('PUT', path, body);
const del = (path) => apiFetch('DELETE', path);

// ── Notes ────────────────────────────────────────────────────────────────────

export async function listNotes({ limit = 50, query, tag, folder_id } = {}) {
  const p = new URLSearchParams({ limit: String(limit) });
  if (query) p.set('query', query);
  if (tag) p.set('tag', tag);
  if (folder_id) p.set('folder_id', folder_id);
  return apiFetch('GET', `/api/v1/notes?${p}`);
}

export async function readNote(id) {
  return get(`/api/v1/notes/${id}`);
}

export async function createNote({ title, content, folder_path, crypt_id, tags, template, template_id } = {}) {
  return post('/api/v1/notes', { title, content, folder_path, crypt_id, tags, template, template_id });
}

export async function updateMetadata(id, fields) {
  return patch(`/api/v1/notes/${id}`, fields);
}

export async function deleteNote(id) {
  return del(`/api/v1/notes/${id}`);
}

export async function restoreNote(id) {
  return post(`/api/v1/notes/${id}/restore`);
}

export async function appendToNote(id, content) {
  return post(`/api/v1/notes/${id}/append`, { content });
}

export async function getBacklinks(id) {
  return get(`/api/v1/notes/${id}/backlinks`);
}

// ── Folders ──────────────────────────────────────────────────────────────────

export async function listFolders(crypt_id) {
  const p = crypt_id ? `?crypt_id=${crypt_id}` : '';
  return get(`/api/v1/folders${p}`);
}

export async function createFolder({ name, parent_id, crypt_id } = {}) {
  return post('/api/v1/folders', { name, parent_id, crypt_id });
}

export async function deleteFolder(id) {
  return del(`/api/v1/folders/${id}`);
}

// ── Crypts ───────────────────────────────────────────────────────────────────

export async function listCrypts() {
  return get('/api/v1/crypts');
}

// ── Short-ID resolution ──────────────────────────────────────────────────────

export async function resolveId(id) {
  if (id.length > 8) return id;
  const notes = await listNotes({ limit: 200 });
  const matched = notes.find(n => n.id.startsWith(id));
  if (!matched) throw new Error(`NO_MATCH: Could not resolve short ID "${id}"`);
  return matched.id;
}
