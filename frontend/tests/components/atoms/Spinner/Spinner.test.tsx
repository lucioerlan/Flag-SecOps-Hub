import { Spinner } from '@/components'
import { render, screen } from '@testing-library/react'

describe('Spinner component', () => {
  beforeEach(() => {
    render(<Spinner data-testid="spinner" />)
  })

  it('should render the spinner', () => {
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })

  it('should have default color when color prop is not provided', () => {
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toHaveStyle('border: 2px solid #24292F')
  })
})

describe('without color provided', () => {
  beforeEach(() => {
    render(<Spinner data-testid="spinner" color="#000" />)
  })

  it('should have the color provided', () => {
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toHaveStyle('border: 2px solid #000')
  })
})
