/* eslint-disable import-helpers/order-imports */
import { mockNavigate, reactRouterDomMock, toastifyMock } from '../__mocks__/auth'

import Login from '@/pages/Login'
import * as authService from '@/services/authService'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: toastifyMock()
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  ...reactRouterDomMock()
}))

describe('Login', () => {
  const setup = () => {
    render(<Login />, { wrapper: MemoryRouter })
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByRole('button', { name: /button\.enter/i })
    return { emailInput, passwordInput, submitButton }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('submits form and navigates on successful login', async () => {
    jest.spyOn(authService, 'authLogin').mockResolvedValue({
      body: { accessToken: 'mocked_access_token' }
    })

    const { emailInput, passwordInput, submitButton } = setup()
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.click(submitButton)

    expect(toast.success).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/home')
  })

  it('displays validation errors when inputs are invalid', async () => {
    const { emailInput, passwordInput, submitButton } = setup()

    await userEvent.type(emailInput, 'not-an-email')
    await userEvent.type(passwordInput, 'short')
    await userEvent.click(submitButton)

    expect(emailInput).toHaveClass('-invalid')
    expect(passwordInput).toHaveClass('-invalid')
  })

  it('toggles password visibility', async () => {
    const { passwordInput } = setup()

    const toggleButton = screen.getByAltText(/Show password/i)
    expect(passwordInput).toHaveAttribute('type', 'password')

    await userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')
    await userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('navigates to /register when clicking on the link', async () => {
    setup()

    const registerLink = screen.getByText(/notMemberRegister/i)
    await userEvent.click(registerLink)

    expect(mockNavigate).toHaveBeenCalledWith('/register')
  })

  it('shows a warning toast on login error', async () => {
    jest.spyOn(authService, 'authLogin').mockResolvedValue({
      response: { data: { body: { message: 'Invalid password' } } }
    })

    const { emailInput, passwordInput, submitButton } = setup()
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.click(submitButton)
    expect(toast.warning).toHaveBeenCalled()
  })

  it('displays an error toast when login fails due to an unexpected error', async () => {
    jest.spyOn(authService, 'authLogin').mockRejectedValue(new Error('Unexpected error'))

    const { emailInput, passwordInput, submitButton } = setup()
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')

    await userEvent.click(submitButton)
    await waitFor(() => expect(toast.error).toHaveBeenCalled())
  })
})
