import Home from '@/pages/Home'
import { render, screen } from '@testing-library/react'

import { mockCardsFeatureFlags, mockTableManager } from './__mocks__/payloads'

jest.mock('@/store/shared')
jest.mock('@/hooks/useCardsFeatureFlags', () => ({
  __esModule: true,
  default: jest.fn(() => mockCardsFeatureFlags())
}))

jest.mock('@/hooks/useTableManager', () => ({
  __esModule: true,
  default: jest.fn(() => mockTableManager())
}))

jest.mock('react-query', () => ({
  useQueryClient: () => ({
    invalidateQueries: jest.fn()
  }),
  useQuery: jest.fn(() => ({
    data: mockTableManager().data,
    isLoading: false,
    error: null
  }))
}))

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<Home />)
  })

  it('should render the home page', () => {
    const homeElement = screen.getByTestId('home')
    expect(homeElement).toBeInTheDocument()
  })

  it('should render the cards', () => {
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toBeInTheDocument()
  })

  it('should render the table', () => {
    const tableElement = screen.getByTestId('table')
    expect(tableElement).toBeInTheDocument()
  })
})
