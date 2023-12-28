import Register from '@/pages/Register'
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
    render(<Register />, { wrapper: MemoryRouter })
    const nameInput = screen.getByPlaceholderText(/name/i)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText('input.password')
    const confirmPasswordInput = screen.getByPlaceholderText('input.confirmPassword')
    const submitButton = screen.getByRole('button', { name: /register/i })
    return { nameInput, emailInput, passwordInput, confirmPasswordInput, submitButton }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('submits form and navigates on successful registration', async () => {
    jest.spyOn(authService, 'authRegister').mockResolvedValue({
      body: 'created with success'
    })

    const { nameInput, emailInput, passwordInput, confirmPasswordInput, submitButton } = setup()
    await userEvent.type(nameInput, 'user')
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.type(confirmPasswordInput, 'password123')
    await userEvent.click(submitButton)
    expect(toast.success).toHaveBeenCalled()
  })

  it('displays validation errors when inputs are invalid', async () => {
    const { emailInput, passwordInput, confirmPasswordInput, submitButton } = setup()

    await userEvent.type(emailInput, 'not-an-email')
    await userEvent.type(passwordInput, 'short')
    await userEvent.type(confirmPasswordInput, 'shor')
    await userEvent.click(submitButton)

    expect(emailInput).toHaveClass('-invalid')
    expect(passwordInput).toHaveClass('-invalid')
    expect(confirmPasswordInput).toHaveClass('-invalid')
  })

  it('toggles password and confirm password visibility', async () => {
    const { passwordInput, confirmPasswordInput } = setup()
    const togglePasswordButtons = screen.getAllByAltText(/Show password/i)

    const togglePasswordButton = togglePasswordButtons[0]
    expect(passwordInput).toHaveAttribute('type', 'password')
    await userEvent.click(togglePasswordButton)

    expect(passwordInput).toHaveAttribute('type', 'text')
    await userEvent.click(togglePasswordButton)
    expect(passwordInput).toHaveAttribute('type', 'password')

    const toggleConfirmPasswordButton = togglePasswordButtons[1]
    expect(confirmPasswordInput).toHaveAttribute('type', 'password')
    await userEvent.click(toggleConfirmPasswordButton)

    expect(confirmPasswordInput).toHaveAttribute('type', 'text')
    await userEvent.click(toggleConfirmPasswordButton)
    expect(confirmPasswordInput).toHaveAttribute('type', 'password')
  })

  it('navigates to /login when clicking on the already a member link', async () => {
    setup()

    const loginLink = screen.getByText(/alreadyMemberLogin/i)
    await userEvent.click(loginLink)
    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })

  it('shows a warning toast on registration validation error', async () => {
    jest.spyOn(authService, 'authRegister').mockResolvedValue({
      response: { data: { body: { message: 'email already exists' } } }
    })

    const { emailInput, passwordInput, nameInput, confirmPasswordInput, submitButton } = setup()
    await userEvent.type(nameInput, 'user')
    await userEvent.type(emailInput, 'test@example.com')
    await userEvent.type(passwordInput, 'password123')
    await userEvent.type(confirmPasswordInput, 'password123')
    await userEvent.click(submitButton)

    expect(toast.warning).toHaveBeenCalled()
  })
})
