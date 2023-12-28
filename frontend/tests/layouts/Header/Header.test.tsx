import useSettings from '@/hooks/useSettings'
import Header from '@/layouts/Header'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

jest.mock('@/hooks/useSettings', () => {
  const setSettings = jest.fn()
  return {
    __esModule: true,
    default: jest.fn(() => ({
      setSettings
    }))
  }
})

const renderHeaderWithRouter = () =>
  render(
    <MemoryRouter initialEntries={['/initial']}>
      <Routes>
        <Route path="/initial" element={<Header />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('Header Component', () => {
  it('should render logo and exit button', () => {
    renderHeaderWithRouter()
    expect(screen.getByLabelText('header.logout')).toBeInTheDocument()
  })

  it('navigates to /login and clears settings on logout', async () => {
    const { setSettings } = useSettings()
    renderHeaderWithRouter()

    await userEvent.click(screen.getByLabelText('header.logout'))
    expect(setSettings).toHaveBeenCalledWith({
      accessToken: '',
      isLoggedIn: false
    })
    expect(screen.getByText('Login Page')).toBeInTheDocument()
  })
})
