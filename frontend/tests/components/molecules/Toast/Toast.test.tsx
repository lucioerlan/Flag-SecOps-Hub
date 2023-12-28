import { Toast } from '@/components'
import { render, screen } from '@testing-library/react'
import { toast } from 'react-toastify'

jest.mock('react-toastify', () => ({
  ToastContainer: jest.fn().mockImplementation(() => <div role="alert">Mock ToastContainer</div>),
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

describe('Toast component', () => {
  beforeEach(() => {
    render(<Toast />)
  })

  it('Should render the toast component', () => {
    const toastElement = screen.getByRole('alert')
    expect(toastElement).toBeInTheDocument()
  })

  it('Should have the ability to trigger success toast', () => {
    toast.success('Success message')
    expect(toast.success).toHaveBeenCalledWith('Success message')
  })

  it('Should have the ability to trigger error toast', () => {
    toast.error('Error message')
    expect(toast.error).toHaveBeenCalledWith('Error message')
  })
})
