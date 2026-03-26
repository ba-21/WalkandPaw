import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const templatePath = path.join(rootDir, 'dist', 'index.html')
const serverEntryPath = path.join(rootDir, 'dist', 'server', 'entry-server.js')

const template = await readFile(templatePath, 'utf-8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('Missing <!--app-html--> placeholder in index.html.')
}

const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = await render()
const html = template.replace('<!--app-html-->', appHtml)

await writeFile(templatePath, html, 'utf-8')
