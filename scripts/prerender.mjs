// Pre-renders each route to static HTML after `vite build` (client) and
// `vite build --ssr` (server entry), so pages paint before the JavaScript loads.
// The browser then hydrates this markup (see src/main.tsx).
import fs from 'node:fs'
import { Writable } from 'node:stream'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = `${root}dist/`
const ssrDir = `${root}dist-ssr/`

const routes = [
  { path: '/', file: 'index.html' },
  {
    path: '/resume',
    file: 'resume.html',
    title: 'Resume — Abdou Nuru NIYIGENA',
    url: 'https://www.abdounuru.com/resume',
  },
]

const { render } = await import(`${ssrDir}entry-server.js`)
const template = fs.readFileSync(`${dist}index.html`, 'utf8')
const rootTag = '<div id="root"></div>'
if (!template.includes(rootTag)) throw new Error(`${rootTag} not found in dist/index.html`)

// Waits for everything, including the lazy-loaded resume, before writing the HTML
const renderRoute = (path) =>
  new Promise((resolve, reject) => {
    let html = ''
    const { pipe } = render(path, {
      onAllReady() {
        pipe(
          new Writable({
            write(chunk, _encoding, callback) {
              html += chunk
              callback()
            },
            final(callback) {
              resolve(html)
              callback()
            },
          }),
        )
      },
      onShellError: reject,
      onError: reject,
    })
  })

for (const route of routes) {
  let page = template.replace(rootTag, `<div id="root">${await renderRoute(route.path)}</div>`)
  if (route.title) page = page.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
  if (route.url) {
    page = page
      .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${route.url}"`)
      .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${route.url}"`)
  }
  fs.writeFileSync(`${dist}${route.file}`, page)
  console.log(`prerendered ${route.path} -> dist/${route.file} (${(page.length / 1024).toFixed(1)} kB)`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
