import { SettingsProvider } from '@/contexts/SettingsContext'
import { restoreSettings } from '@/utils'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { queryClient } from './factories/queryClientFactory'
import './translate' // i18n

const settings = restoreSettings()
const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
  <BrowserRouter>
    <SettingsProvider settings={settings}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SettingsProvider>
  </BrowserRouter>
)
