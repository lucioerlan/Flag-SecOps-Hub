import { Button } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button component', () => {
  const handleClick = jest.fn()
  const buttonLabel = 'Button'

  describe('with color provided', () => {
    beforeEach(() => {
      render(<Button type="button" color="#24292F" label={buttonLabel} onClick={handleClick} />)
    })

    it('Should render the button with correct text', () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      expect(buttonElement).toBeInTheDocument()
    })

    it('Should handle click event', async () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      await userEvent.click(buttonElement)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('without color provided', () => {
    beforeEach(() => {
      render(<Button type="button" label={buttonLabel} onClick={handleClick} />)
    })

    it('Should render the button with default color and correct text', () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      expect(buttonElement).toBeInTheDocument()
    })
  })
})
