import * as settings from '@/utils/settings'

describe('settings', () => {
  it('restoreSettings should return null if no settings are stored', () => {
    expect(settings.restoreSettings()).toBeNull()
  })

  it('restoreSettings should return the stored settings', () => {
    const storedSettings = {
      token: '',
      isLoggedIn: ''
    }

    localStorage.setItem('localSettings', JSON.stringify(storedSettings))

    expect(settings.restoreSettings()).toEqual(storedSettings)
  })

  it('storeSettings  should save the settings to localStorage', () => {
    const settingsToStore = {
      token: '',
      isLoggedIn: ''
    }

    settings.storeSettings(settingsToStore)

    expect(localStorage.getItem('localSettings')).toEqual(JSON.stringify(settingsToStore))
  })
})
