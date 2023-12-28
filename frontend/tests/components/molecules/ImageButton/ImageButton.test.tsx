import { ImageButton } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const MockIcon = () => <svg data-testid="mock-icon"></svg>

describe('ImageButton component', () => {
  const handleClick = jest.fn()
  const buttonLabel = 'Click Me'
  const color = '#fff'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('without icon', () => {
    beforeEach(() => {
      render(<ImageButton label={buttonLabel} onClick={handleClick} color={color} />)
    })

    it('renders the button with correct text', () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      expect(buttonElement).toBeInTheDocument()
    })

    it('does not render an icon', () => {
      expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument()
    })

    it('handles click event', async () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      await userEvent.click(buttonElement)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with icon', () => {
    beforeEach(() => {
      render(<ImageButton Icon={MockIcon} label={buttonLabel} onClick={handleClick} color={color} />)
    })

    it('renders the button with an icon', () => {
      expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      expect(buttonElement).toBeInTheDocument()
    })

    it('handles click event when icon is present', async () => {
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      await userEvent.click(buttonElement)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
