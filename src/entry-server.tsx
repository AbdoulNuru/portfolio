import { StrictMode } from 'react'
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server'
import App from './App'

// Build-time entry used by scripts/prerender.mjs to render one route to HTML.
export const render = (path: string, options: RenderToPipeableStreamOptions) =>
  renderToPipeableStream(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
    options,
  )
