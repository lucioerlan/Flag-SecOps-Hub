import SettingsContext from '@/contexts/SettingsContext'
import { useContext } from 'react'

export type Settings = {
  accessToken: string
  isLoggedIn: boolean
}

export const MockComponent = () => {
  const { settings, setSettings } = useContext(SettingsContext)

  return (
    <div>
      <span data-testid="accessTokenValue">{settings.accessToken}</span>
      <button onClick={() => setSettings({ accessToken: 'newToken' })}>Update Token</button>
    </div>
  )
}
