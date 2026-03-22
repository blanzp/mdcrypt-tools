#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import {
  getConfig, setConfig,
  listNotes, readNote, createNote, updateMetadata, deleteNote,
  restoreNote, appendToNote, getBacklinks,
  listFolders, createFolder, deleteFolder,
  listCrypts, resolveId,
} from './lib/api.js';

const program = new Command();

program
  .name('mdcli')
  .description('mdcrypt CLI — Secure Markdown Notes via REST API')
  .version('2.0.0');

/**
 * CONFIG COMMAND
 */
program
  .command('config')
  .description('Configure the mdcrypt connection (URL and API Key)')
  .action(async () => {
    const current = await getConfig();
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'apiUrl',
        message: 'mdcrypt API URL:',
        default: current.apiUrl || 'https://mdcrypt.dev'
      },
      {
        type: 'password',
        name: 'apiKey',
        message: 'MDC API Key (mdc_...):',
        default: current.apiKey
      }
    ]);

    await setConfig(answers);
    console.log(chalk.green('\nConfiguration saved.'));
  });

/**
 * LIST COMMAND
 */
program
  .command('ls')
  .description('List recent notes')
  .option('-l, --limit <number>', 'limit results', '10')
  .option('-t, --tag <string>', 'filter by tag')
  .option('-q, --query <string>', 'full-text search query')
  .action(async (options) => {
    const spinner = ora('Fetching notes...').start();
    try {
      const data = await listNotes({
        limit: parseInt(options.limit),
        tag: options.tag,
        query: options.query,
      });
      spinner.stop();
      console.log(chalk.bold.cyan('\n--- RECENT RECORDS ---'));
      data.forEach(note => {
        const date = new Date(note.updated_at).toLocaleDateString();
        const tags = note.tags?.length ? chalk.gray(` [${note.tags.join(',')}]`) : '';
        console.log(`${chalk.gray(note.id.substring(0, 8))} | ${chalk.yellow(note.title.padEnd(30))} | ${chalk.blue(date)}${tags}`);
      });
      console.log('');
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * SEARCH COMMAND
 */
program
  .command('search <query>')
  .description('Search notes using full-text search')
  .action(async (query) => {
    const spinner = ora(`Searching for "${query}"...`).start();
    try {
      const data = await listNotes({ query, limit: 50 });
      spinner.stop();
      if (!data.length) {
        console.log(chalk.yellow('\nNo matching records found.'));
        return;
      }
      console.log(chalk.bold.green(`\n--- SEARCH RESULTS [${data.length}] ---`));
      data.forEach(note => {
        console.log(`${chalk.gray(note.id.substring(0, 8))} | ${chalk.yellow(note.title.padEnd(30))} | ${chalk.blue(new Date(note.updated_at).toLocaleDateString())}`);
      });
      console.log('');
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * CREATE COMMAND
 */
program
  .command('create')
  .description('Create a new note (interactive or direct)')
  .option('-t, --title <string>', 'Note title')
  .option('-c, --content <string>', 'Raw Markdown content')
  .option('-f, --folder <path>', 'Target folder path (e.g. Work/Projects)')
  .option('--crypt <uuid>', 'Target crypt UUID')
  .option('--tag <string...>', 'Tags for the note')
  .option('--template <name>', 'System template: rfc, adr, meeting, research')
  .action(async (options) => {
    try {
      let title = options.title;
      let content = options.content;
      let folderPath = options.folder;
      let cryptId = options.crypt;
      let tags = options.tag || [];

      if (!title) {
        const crypts = await listCrypts();
        const prompts = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Note Title:',
            validate: input => input.length > 0
          },
          {
            type: 'editor',
            name: 'content',
            message: 'Write your content:'
          },
          {
            type: 'list',
            name: 'cryptId',
            message: 'Select Crypt:',
            choices: crypts.map(c => ({ name: c.name + (c.is_default ? ' (Default)' : ''), value: c.id }))
          },
          {
            type: 'input',
            name: 'folderPath',
            message: 'Folder path (e.g. Work/Projects, or leave blank for root):'
          },
          {
            type: 'input',
            name: 'tags',
            message: 'Tags (comma separated):',
            filter: input => input.split(',').map(t => t.trim()).filter(Boolean)
          }
        ]);
        title = prompts.title;
        content = prompts.content;
        folderPath = prompts.folderPath || null;
        cryptId = prompts.cryptId;
        tags = prompts.tags;
      }

      const spinner = ora('Creating note...').start();
      const data = await createNote({
        title,
        content: content || '',
        folder_path: folderPath || null,
        crypt_id: cryptId || undefined,
        tags,
        template: options.template,
      });
      spinner.succeed(chalk.green(`Note created: ${chalk.bold(data.title || title)} [${data.id}]`));
    } catch (err) {
      console.error(chalk.red(`\nFAILURE: ${err.message}`));
    }
  });

/**
 * READ COMMAND
 */
program
  .command('read <id>')
  .description('Read the full content of a note (accepts full UUID or short ID)')
  .option('-r, --raw', 'Output raw content only (useful for piping)')
  .action(async (id, options) => {
    const spinner = ora('Fetching note...').start();
    if (options.raw) spinner.stop();
    try {
      const noteId = await resolveId(id);
      const data = await readNote(noteId);
      if (!options.raw) spinner.stop();

      if (options.raw) {
        process.stdout.write(data.content);
      } else {
        console.log(chalk.bold.cyan('\n--- RECORD CONTENT ---'));
        console.log(chalk.gray(`Title: ${data.title}`));
        console.log(chalk.gray(`ID: ${data.id}`));
        if (data.tags?.length) console.log(chalk.gray(`Tags: ${data.tags.join(', ')}`));
        console.log(chalk.gray('----------------------\n'));
        console.log(data.content);
        console.log(chalk.gray('\n----------------------'));
      }
    } catch (err) {
      if (options.raw) console.error(err.message);
      else spinner.fail(chalk.red(err.message));
    }
  });

/**
 * DELETE COMMAND
 */
program
  .command('rm <id>')
  .description('Delete a note (soft-delete, accepts short ID)')
  .action(async (id) => {
    const spinner = ora('Deleting note...').start();
    try {
      const noteId = await resolveId(id);
      await deleteNote(noteId);
      spinner.succeed(chalk.green(`Deleted: ${noteId.substring(0, 8)}`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * RESTORE COMMAND
 */
program
  .command('restore <id>')
  .description('Restore a deleted note (accepts short ID)')
  .action(async (id) => {
    const spinner = ora('Restoring note...').start();
    try {
      const noteId = await resolveId(id);
      const data = await restoreNote(noteId);
      spinner.succeed(chalk.green(`Restored: ${chalk.bold(data.title)} [${data.id}]`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * MOVE COMMAND
 */
program
  .command('mv <id> [folder_id]')
  .description('Move a note to a folder (omit folder_id for root)')
  .action(async (id, folderId) => {
    const spinner = ora('Moving note...').start();
    try {
      const noteId = await resolveId(id);
      const data = await updateMetadata(noteId, { folder_id: folderId || null });
      const dest = data.folder_id ? data.folder_id.substring(0, 8) : 'root';
      spinner.succeed(chalk.green(`Moved ${chalk.bold(data.title)} → ${dest}`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * TAG COMMAND
 */
program
  .command('tag <id> <tags...>')
  .description('Set tags on a note (replaces existing, accepts short ID)')
  .action(async (id, tags) => {
    const spinner = ora('Updating tags...').start();
    try {
      const noteId = await resolveId(id);
      const data = await updateMetadata(noteId, { tags });
      spinner.succeed(chalk.green(`Tags updated on ${chalk.bold(data.title)}: ${data.tags.join(', ')}`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * RENAME COMMAND
 */
program
  .command('rename <id> <title>')
  .description('Rename a note (accepts short ID)')
  .action(async (id, title) => {
    const spinner = ora('Renaming note...').start();
    try {
      const noteId = await resolveId(id);
      const data = await updateMetadata(noteId, { title });
      spinner.succeed(chalk.green(`Renamed to: ${chalk.bold(data.title)}`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * APPEND COMMAND
 */
program
  .command('append <id>')
  .description('Append content to a note (accepts short ID)')
  .option('-c, --content <string>', 'Content to append')
  .action(async (id, options) => {
    try {
      const noteId = await resolveId(id);
      let content = options.content;

      if (!content) {
        const answers = await inquirer.prompt([{
          type: 'editor',
          name: 'content',
          message: 'Content to append:'
        }]);
        content = answers.content;
      }

      if (!content?.trim()) {
        console.log(chalk.yellow('No content provided. Aborted.'));
        return;
      }

      const spinner = ora('Appending content...').start();
      const data = await appendToNote(noteId, content.trim());
      spinner.succeed(chalk.green(`Appended to ${chalk.bold(data.title)} [v${data.version}]`));
    } catch (err) {
      console.error(chalk.red(err.message));
    }
  });

/**
 * BACKLINKS COMMAND
 */
program
  .command('backlinks <id>')
  .description('Show notes that link to this note (accepts short ID)')
  .action(async (id) => {
    const spinner = ora('Fetching backlinks...').start();
    try {
      const noteId = await resolveId(id);
      const data = await getBacklinks(noteId);
      spinner.stop();

      if (!data.length) {
        console.log(chalk.yellow('\nNo backlinks found.'));
        return;
      }

      console.log(chalk.bold.cyan(`\n--- BACKLINKS [${data.length}] ---`));
      data.forEach(link => {
        console.log(`${chalk.gray(link.id.substring(0, 8))} | ${chalk.yellow(link.title.padEnd(30))} | ${chalk.blue(new Date(link.updated_at).toLocaleDateString())}`);
      });
      console.log('');
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * FOLDERS COMMAND
 */
program
  .command('folders')
  .description('List all folders')
  .option('--crypt <uuid>', 'Filter by crypt UUID')
  .action(async (options) => {
    const spinner = ora('Fetching folders...').start();
    try {
      const data = await listFolders(options.crypt);
      spinner.stop();

      if (!data.length) {
        console.log(chalk.yellow('\nNo folders found.'));
        return;
      }

      console.log(chalk.bold.cyan('\n--- FOLDERS ---'));
      data.forEach(f => {
        console.log(`${chalk.gray(f.id.substring(0, 8))} | ${chalk.yellow(f.path || f.name)}`);
      });
      console.log('');
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * MKDIR COMMAND
 */
program
  .command('mkdir <name>')
  .description('Create a new folder')
  .option('-p, --parent <uuid>', 'Parent folder UUID')
  .option('--crypt <uuid>', 'Crypt UUID')
  .action(async (name, options) => {
    const spinner = ora('Creating folder...').start();
    try {
      const data = await createFolder({ name, parent_id: options.parent || null, crypt_id: options.crypt });
      spinner.succeed(chalk.green(`Folder created: ${chalk.bold(data.name)} [${data.id}]`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * RMDIR COMMAND
 */
program
  .command('rmdir <id>')
  .description('Delete a folder (notes inside moved to root)')
  .action(async (id) => {
    const spinner = ora('Deleting folder...').start();
    try {
      await deleteFolder(id);
      spinner.succeed(chalk.green(`Folder deleted: ${id}`));
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

/**
 * CRYPTS COMMAND
 */
program
  .command('crypts')
  .description('List available crypts (vaults)')
  .action(async () => {
    const spinner = ora('Fetching crypts...').start();
    try {
      const data = await listCrypts();
      spinner.stop();

      console.log(chalk.bold.cyan('\n--- CRYPTS ---'));
      data.forEach(c => {
        const def = c.is_default ? chalk.green(' (default)') : '';
        console.log(`${chalk.gray(c.id)} | ${chalk.yellow(c.name)}${def}`);
      });
      console.log('');
    } catch (err) {
      spinner.fail(chalk.red(err.message));
    }
  });

program.parse(process.argv);
