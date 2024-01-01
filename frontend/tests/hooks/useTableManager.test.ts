/* eslint-disable import-helpers/order-imports */
import { mocksHooks } from './__mocks__/hooks'

import '@testing-library/jest-dom'
import useTableManager from '@/hooks/useTableManager'
import * as ReactRedux from 'react-redux'

jest.mock('react', () => mocksHooks)
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

describe('useTableManager', () => {
  const mockedUseSelector = ReactRedux.useSelector as jest.Mock

  beforeEach(() => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        featureFlags: {
          body: [
            {
              title: 'Total',
              value: 10,
              description: 'Total',
              created_at: '2021-08-10T14:00:00.000Z',
              updated_at: '2021-08-10T14:00:00.000Z'
            }
          ]
        }
      })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return the correct values from the hook', () => {
    const { itemsPerPage, currentPage, totalItems, handleSearch } = useTableManager()

    expect(itemsPerPage).toBe(25)
    expect(currentPage).toBe(1)
    expect(totalItems).toBe(0)
    expect(handleSearch('Total')).toBe(undefined)
  })
})
