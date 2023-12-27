import Chip from '@/components/atoms/Chip'
import { render, screen } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}))

describe('Chip component', () => {
  beforeEach(() => {
    render(<Chip link="/home" label="Back" data-testid="chip" />)
  })

  it('should render Chip label', () => {
    expect(screen.getByText('Back')).toBeDefined()
  })
})
