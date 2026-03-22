#!/usr/bin/env node
import 'dotenv/config'
import { Command } from 'commander'
import { loadConfig } from './config.js'
import { loadState, saveState } from './state.js'
import { push } from './push.js'
import { pull } from './pull.js'
import { MdcryptApi } from './api.js'

const program = new Command()

program
  .name('mdcrypt-sync')
  .description('Bidirectional GitHub sync for mdcrypt vaults')
  .version('1.0.0')
  .option('-c, --config <path>', 'Path to config file', '.sync-config.json')

program
  .command('push')
  .description('Push mdcrypt changes to GitHub')
  .action(async () => {
    const config = loadConfig(program.opts().config)
    const state = loadState(config.state_file)
    try {
      const next = await push(config, state)
      saveState(config.state_file, next)
    } catch (err) {
      console.error('[PUSH] Fatal:', err)
      process.exit(1)
    }
  })

program
  .command('pull')
  .description('Pull GitHub changes into mdcrypt')
  .action(async () => {
    const config = loadConfig(program.opts().config)
    const state = loadState(config.state_file)
    try {
      const next = await pull(config, state)
      saveState(config.state_file, next)
    } catch (err) {
      console.error('[PULL] Fatal:', err)
      process.exit(1)
    }
  })

program
  .command('sync')
  .description('Pull then push (full bidirectional sync)')
  .action(async () => {
    const config = loadConfig(program.opts().config)
    let state = loadState(config.state_file)
    try {
      console.log('── PULL ──────────────────────────────')
      state = await pull(config, state)
      saveState(config.state_file, state)

      console.log('── PUSH ──────────────────────────────')
      state = await push(config, state)
      saveState(config.state_file, state)

      console.log('── DONE ──────────────────────────────')
    } catch (err) {
      console.error('[SYNC] Fatal:', err)
      process.exit(1)
    }
  })

program
  .command('watch')
  .description('Run sync on an interval (default: 600s)')
  .option('-i, --interval <seconds>', 'Interval in seconds')
  .action(async (opts) => {
    const config = loadConfig(program.opts().config)
    const interval = parseInt(opts.interval ?? String(config.watch_interval), 10) * 1000

    console.log(`[WATCH] Starting — interval: ${interval / 1000}s`)

    const runSync = async () => {
      let state = loadState(config.state_file)
      try {
        state = await pull(config, state)
        saveState(config.state_file, state)
        state = await push(config, state)
        saveState(config.state_file, state)
      } catch (err) {
        console.error('[WATCH] Sync error (will retry):', err)
      }
    }

    await runSync()
    setInterval(runSync, interval)
  })

program
  .command('status')
  .description('Show sync state and pending change counts')
  .action(async () => {
    const config = loadConfig(program.opts().config)
    const state = loadState(config.state_file)

    console.log('\n── SYNC STATUS ───────────────────────')
    console.log(`  repo:          ${config.repo} @ ${config.branch}`)
    console.log(`  last push:     ${state.last_push_at ?? 'never'}`)
    console.log(`  last pull SHA: ${state.last_pull_sha ? state.last_pull_sha.slice(0, 8) + '...' : 'never'}`)

    try {
      const api = new MdcryptApi(config)
      const [notes, textAssets, imageAssets] = await Promise.all([
        api.getNotesSince(state.last_push_at),
        api.getTextAssetsSince(state.last_push_at),
        api.getImageAssetsSince(state.last_push_at),
      ])
      console.log(`\n  pending push:`)
      console.log(`    notes:       ${notes.filter(n => !n.is_deleted).length} modified, ${notes.filter(n => n.is_deleted).length} deleted`)
      console.log(`    text assets: ${textAssets.filter(a => !a.is_deleted).length} modified, ${textAssets.filter(a => a.is_deleted).length} deleted`)
      console.log(`    images:      ${imageAssets.filter(a => !a.is_deleted).length} modified, ${imageAssets.filter(a => a.is_deleted).length} deleted`)
    } catch (err) {
      console.error('  could not fetch pending counts:', err)
    }

    console.log('──────────────────────────────────────\n')
  })

program.parse()
