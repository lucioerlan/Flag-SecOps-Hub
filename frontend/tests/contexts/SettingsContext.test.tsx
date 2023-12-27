import { SettingsProvider } from '@/contexts/SettingsContext'
import { render } from '@testing-library/react'

describe('SettingsContext', () => {
  it('Should render SettingsContext', () => {
    const settings = {
      accessToken: '',
      isLoggedIn: false
    }

    const { container } = render(
      <SettingsProvider settings={settings}>
        <div>SettingsContext</div>
      </SettingsProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
