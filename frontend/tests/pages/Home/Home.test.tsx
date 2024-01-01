import Home from '@/pages/Home'
import store from '@/store'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as StoreProvider } from 'react-redux'

import { mockCardsFeatureFlags, mockTableManager } from '../__mocks__/payloads'

jest.mock('@/hooks/useCardsFeatureFlags', () => ({
  __esModule: true,
  default: jest.fn(() => mockCardsFeatureFlags())
}))

jest.mock('@/hooks/useTableManager', () => ({
  __esModule: true,
  default: jest.fn(() => mockTableManager())
}))

describe('Home Component', () => {
  const queryClient = new QueryClient()

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <StoreProvider store={store}>
          <Home />
        </StoreProvider>
      </QueryClientProvider>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the home page', () => {
    expect(screen.getByTestId('home')).toBeInTheDocument()
  })

  it('renders the cards', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('renders the table', () => {
    expect(screen.getByTestId('table')).toBeInTheDocument()
  })
})
