import { Modal } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Modal', () => {
  const onClose = jest.fn()
  const content = 'Content'

  beforeEach(() => {
    onClose.mockClear()
  })

  describe('when open', () => {
    beforeEach(() => {
      render(
        <Modal isOpen={true} onClose={onClose}>
          {content}
        </Modal>
      )
    })

    it('renders the modal and its content', () => {
      expect(screen.getByText(content)).toBeInTheDocument()
    })

    it('calls onClose when the overlay is clicked', async () => {
      await userEvent.click(screen.getByTestId('modal-overlay'))
      expect(onClose).toHaveBeenCalled()
    })

    it('calls onClose when the close button is clicked', async () => {
      await userEvent.click(screen.getByText('X'))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('when not open', () => {
    it('does not render the modal or its content', () => {
      render(
        <Modal isOpen={false} onClose={onClose}>
          {content}
        </Modal>
      )
      expect(screen.queryByText(content)).not.toBeInTheDocument()
    })
  })
})
