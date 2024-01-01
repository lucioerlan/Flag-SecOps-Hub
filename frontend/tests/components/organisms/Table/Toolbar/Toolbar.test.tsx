import Toolbar from '@/components/organisms/Table/components/Toolbar'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Toolbar', () => {
  const onCreateNewMock = jest.fn()
  const onSearchMock = jest.fn()

  const titleText = 'Title'
  const searchPlaceholder = 'Search...'
  const buttonText = 'Create New'

  beforeEach(() => {
    render(
      <Toolbar
        titleText={titleText}
        searchPlaceholder={searchPlaceholder}
        buttonText={buttonText}
        onCreateNew={onCreateNewMock}
        onSearch={onSearchMock}
      />
    )
  })

  it('renders with provided props', () => {
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText(buttonText)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
  })

  it('calls onCreateNew when button is clicked', async () => {
    await userEvent.click(screen.getByText(buttonText))
    expect(onCreateNewMock).toHaveBeenCalledTimes(1)
  })

  it('calls onSearch with input value after debounce', async () => {
    await userEvent.type(screen.getByPlaceholderText(searchPlaceholder), 'test')
    expect(onSearchMock).not.toHaveBeenCalled()
    await waitFor(() => expect(onSearchMock).toHaveBeenCalledWith('test'), { timeout: 600 })
  })
})
