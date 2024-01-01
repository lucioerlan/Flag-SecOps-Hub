import { storeSettings } from '@/utils'
import { createContext, useState, ReactNode } from 'react'

export type Settings = {
  accessToken: string
  isLoggedIn: boolean
}

const SettingsContext = createContext({
  settings: {
    accessToken: '',
    isLoggedIn: false
  },
  setSettings: (settings: object) => {}
})

export const defaultSettings = {
  accessToken: '',
  isLoggedIn: false
}

export function SettingsProvider({ settings, children }: { settings: Settings; children: ReactNode }) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

  const handleSaveSettings = (updatedSettings: object) => {
    const mergedSettings = { ...currentSettings, ...updatedSettings }
    setCurrentSettings(mergedSettings)
    storeSettings(mergedSettings)
  }

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        setSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
export default SettingsContext
