import Body from '@/components/organisms/Table/components/Body'
import { queryClient } from '@/factories/queryClientFactory'
import store from '@/store'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider } from 'react-query'
import { Provider as StoreProvider } from 'react-redux'

import { tableColumns, tableData } from '../../__mocks__/data'

describe('Body Component', () => {
  const data = tableData

  beforeEach(() => {
    render(
      <StoreProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Body columns={tableColumns} data={data} />
        </QueryClientProvider>
      </StoreProvider>
    )
  })

  it('renders the table body with correct data', () => {
    for (const feature of data) {
      expect(screen.getByText(feature.name)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    }
    const checkboxes = screen.getAllByLabelText('Enable or disable feature flag')
    expect(checkboxes).toHaveLength(data.length)
  })

  it('toggles a feature flag when clicked', async () => {
    const featureFlagToggles = screen.getAllByLabelText('Enable or disable feature flag')
    const firstFlagToggle = featureFlagToggles[0]

    expect(firstFlagToggle).toBeChecked()
    await userEvent.click(firstFlagToggle)
    expect(firstFlagToggle).toBeChecked()
  })
})
