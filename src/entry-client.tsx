import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { queryClient } from './util'
import { QueryClientProvider } from '@tanstack/react-query'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
