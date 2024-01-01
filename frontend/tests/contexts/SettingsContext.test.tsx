import { Settings, SettingsProvider } from '@/contexts/SettingsContext'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MockComponent } from './__mocks__/Component'

describe('SettingsContext', () => {
  const renderSettingsProvider = (settings: Settings) =>
    render(
      <SettingsProvider settings={settings}>
        <MockComponent />
      </SettingsProvider>
    )

  it('initializes with empty access token and logged out status by default', () => {
    const { getByTestId } = renderSettingsProvider({ accessToken: '', isLoggedIn: false })
    expect(getByTestId('accessTokenValue').textContent).toBe('')
  })

  it('updates accessToken when setSettings is invoked', async () => {
    const { getByText, getByTestId } = renderSettingsProvider({ accessToken: '', isLoggedIn: false })

    await userEvent.click(getByText('Update Token'))
    expect(getByTestId('accessTokenValue').textContent).toBe('newToken')
  })

  it('defaults to initial settings when no props are provided', () => {
    const { getByTestId } = renderSettingsProvider(undefined as unknown as Settings)
    expect(getByTestId('accessTokenValue').textContent).toBe('')
  })
})
