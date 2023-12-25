import Button from '@/components/atoms/Button'
import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

describe('Button component', () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    render(<Button type="button" color="#24292F" data-testid="button" label="Button" onClick={handleClick} />)
  })

  it('Should render button', () => {
    const buttonElement = screen.getByTestId('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('Should handle click event', async () => {
    const buttonElement = screen.getByTestId('button')
    await UserEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
