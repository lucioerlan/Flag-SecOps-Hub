import { Table } from '@/components'
import { queryClient } from '@/factories/queryClientFactory'
import store from '@/store'
import { TableData } from '@/types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { Provider as StoreProvider } from 'react-redux'

import { tableColumns, tableData } from '../__mocks__/data'

const mockTableData: TableData = {
  data: [tableData[0]],
  columns: [tableColumns[0]],
  handleSearch: jest.fn(),
  currentPage: 1,
  setCurrentPage: jest.fn(),
  totalItems: 1
}

const setup = () =>
  render(
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Table tableData={mockTableData} />
      </QueryClientProvider>
    </StoreProvider>
  )

const interactWithForm = async (name: string, description: string) => {
  await userEvent.type(screen.getByPlaceholderText(/nameFeatureFlag/i), name)
  await userEvent.type(screen.getByPlaceholderText(/descriptionFeatureFlag/i), description)
  await userEvent.click(screen.getByRole('checkbox'))
}

const clickByText = async (text: RegExp) => {
  await userEvent.click(screen.getByText(text))
}

const submitAndFind = async (submitText: RegExp, findText: string) => {
  await clickByText(submitText)
  await screen.findByText(findText)
}

const toggleFeatureFlag = async () => {
  const toggleSpan = screen.getByLabelText(/Enable or disable feature flag/i).nextSibling
  await userEvent.click(toggleSpan as HTMLElement)
}

describe('Table component', () => {
  beforeEach(setup)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders and displays data', () => {
    expect(screen.getByTestId('table')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
  })

  it('creates a new feature flag', async () => {
    await clickByText(/createNewFeatureFla/i)
    await interactWithForm('test', 'test')
    await toggleFeatureFlag()
    await submitAndFind(/button.create/i, 'Feature 1')
  })

  it('shows an error message for empty fields when creating a new feature flag', async () => {
    await clickByText(/createNewFeatureFlag/i)
    await clickByText(/button.create/i)
    expect(screen.getByText(/input.errorName.required.message/i)).toBeInTheDocument()
    expect(screen.getByText(/input.errorDescription.required.message/i)).toBeInTheDocument()
  })

  it('edits a feature flag', async () => {
    await userEvent.click(screen.getByAltText('Edit'))
    await interactWithForm('test', 'test')
    await toggleFeatureFlag()
    await submitAndFind(/button.edit/i, 'Feature 1')
  })

  it('shows error messages for invalid inputs when editing a feature flag', async () => {
    await userEvent.click(screen.getByAltText('Edit'))
    await userEvent.clear(screen.getByPlaceholderText(/nameFeatureFlag/i))
    await userEvent.clear(screen.getByPlaceholderText(/descriptionFeatureFlag/i))
    await userEvent.type(screen.getByPlaceholderText(/nameFeatureFlag/i), 'test')
    await clickByText(/button.edit/i)
  })

  it('deletes a feature flag', async () => {
    await userEvent.click(screen.getByAltText('Delete'))
    await clickByText(/button.delete/i)
  })
})
