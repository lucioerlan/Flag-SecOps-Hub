import Footer from '@/components/organisms/Table/components/Footer'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Footer', () => {
  const totalItems = 100
  const itemsPerPage = 10
  const currentPage = 1
  const onPageChangeMock = jest.fn()
  const text = {
    itemsDisplayed: 'Items displayed:',
    page: 'Page:'
  }

  beforeEach(() => {
    render(
      <Footer
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChangeMock}
        text={text}
      />
    )
  })

  it('renders the correct text', () => {
    const expectedText = `Items displayed: 1 to 10 of ${totalItems}`
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it('renders the correct pagination text', () => {
    const expectedText = `Page: ${currentPage} of ${Math.ceil(totalItems / itemsPerPage)}`
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it('calls onPageChange when selecting a different page', async () => {
    userEvent.selectOptions(screen.getByRole('combobox'), '2')
    await waitFor(() => expect(onPageChangeMock).toHaveBeenCalledTimes(1))
    expect(onPageChangeMock).toHaveBeenCalledWith(2)
  })
})
