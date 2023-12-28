import { Table } from '@/components'
import { TableData } from '@/types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('@/store/shared', () => ({
  useAppDispatch: jest.fn(() => jest.fn()),
  useAppSelector: jest.fn(() => [])
}))

jest.mock('@/hooks/useFeatureFlags', () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: [], isSuccess: true, refetchFeatureFlags: jest.fn() }))
}))

const mockTableData: TableData = {
  data: [
    {
      id: '658d2c70ea7e5f07783ff5ba',
      name: 'teste',
      description: 'teste',
      state: true,
      created_at: '28/12/2023',
      updated_at: '28/12/2023'
    }
  ],
  columns: [{ header: 'Name', accessor: 'name' }],
  handleSearch: jest.fn(),
  currentPage: 1,
  setCurrentPage: jest.fn(),
  totalItems: 1
}

describe('Table component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<Table tableData={mockTableData} />)
  })

  it('renders and displays data', () => {
    expect(screen.getByTestId('table')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('teste')).toBeInTheDocument()
  })

  const interactWithFeatureFlagForm = async (name: string, description: string) => {
    const inputName = screen.getByPlaceholderText(/nameFeatureFlag/i)
    const inputDescription = screen.getByPlaceholderText(/descriptionFeatureFlag/i)
    const inputState = screen.getByRole('checkbox')

    await userEvent.type(inputName, name)
    await userEvent.type(inputDescription, description)
    await userEvent.click(inputState)
  }

  it('creates a new feature flag', async () => {
    const createButton = screen.getByText(/createNewFeatureFla/i)
    await userEvent.click(createButton)

    await interactWithFeatureFlagForm('test', 'test')

    const buttonSubmit = screen.getByText(/button.create/i)
    await userEvent.click(buttonSubmit)

    await screen.findByText('teste')
  })

  it('edits a feature flag', async () => {
    const editButton = screen.getByAltText('Edit')
    await userEvent.click(editButton)

    await interactWithFeatureFlagForm('test', 'test')

    const buttonSubmit = screen.getByText(/button.edit/i)
    await userEvent.click(buttonSubmit)

    await screen.findByText('teste')
  })

  it('deletes a feature flag', async () => {
    const deleteButton = screen.getByAltText('Delete')
    await userEvent.click(deleteButton)

    const buttonSubmit = screen.getByText(/button.delete/i)
    await userEvent.click(buttonSubmit)
  })
})
