import store from '@/store'
import { render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { queryClient } from './factories/queryClientFactory'

jest.mock('./hooks/useSettings')

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </Router>
    </QueryClientProvider>
  )
}

describe('App with different settings', () => {
  let mockUseSettings: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseSettings = jest.requireMock('./hooks/useSettings').default
  })

  it('should render correctly when user is logged in', () => {
    mockUseSettings.mockReturnValue({ settings: { isLoggedIn: true } })
    const { container } = render(<AppWrapper />)
    expect(container).toBeDefined()
  })

  it('should render correctly when user is not logged in', () => {
    mockUseSettings.mockReturnValue({ settings: { isLoggedIn: false } })
    const { container } = render(<AppWrapper />)
    expect(container).toBeDefined()
  })
})
