import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './util'

export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  )
  return { html }
}
