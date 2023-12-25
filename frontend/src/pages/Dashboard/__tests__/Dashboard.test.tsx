import Dashboard from '@/pages/Dashboard'
import { render, screen } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}))

jest.mock('@/hooks/useSettings', () => ({
  __esModule: true,
  default: () => ({
    settings: {
      email: 'admin@user.com'
    }
  })
}))

describe('Dashboard component', () => {
  beforeEach(() => {
    render(<Dashboard />)
  })

  it('should render the Dashboard component', () => {
    expect(screen.getByTestId('dashboard')).toBeInTheDocument()
  })
})
