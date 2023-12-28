import { storeSettings } from '@/utils'
import { createContext, useState, ReactNode } from 'react'

const SettingsContext = createContext({
  settings: {
    accessToken: '',
    isLoggedIn: false
  },
  setSettings: (settings: object) => {
    settings
  }
})

const defaultSettings = {
  accessToken: '',
  isLoggedIn: false
}

export function SettingsProvider({
  settings,
  children
}: {
  settings: {
    accessToken: string
    isLoggedIn: boolean
  }
  children: ReactNode
}) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

  const handleSaveSettings = (updatedSettings = {}) => {
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
