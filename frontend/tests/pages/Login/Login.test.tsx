import Login from '@/pages/Login'
import * as authService from '@/services/authService'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

jest.mock('@/services/authService')
const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

jest.mock('react-toastify', () => ({
  ToastContainer: jest.fn().mockImplementation(() => <div role="alert">Mock ToastContainer</div>),
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn()
  }
}))

describe('Login', () => {
  const setup = () => {
    render(<Login />, { wrapper: MemoryRouter })
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
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
})
