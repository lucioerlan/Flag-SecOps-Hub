/* eslint-disable import-helpers/order-imports */
import { reactMocks } from './__mocks__/hooks'

import '@testing-library/jest-dom'
import useTableManager from '@/hooks/useTableManager'
import { useMemo } from 'react'
import * as ReactRedux from 'react-redux'

jest.mock('react', () => reactMocks)
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

const mockedUseSelector = ReactRedux.useSelector as jest.Mock
const mockedUseMemo = useMemo as jest.Mock

describe('useTableManager', () => {
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
    mockedUseMemo.mockImplementation((fn) => fn())
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return the correct values from the hook', () => {
    const { itemsPerPage, currentPage, totalItems } = useTableManager()

    const expectedData = {
      itemsPerPage: 25,
      currentPage: 1,
      totalItems: 0
    }

    expect(itemsPerPage).toBe(expectedData.itemsPerPage)
    expect(currentPage).toBe(expectedData.currentPage)
    expect(totalItems).toBe(expectedData.totalItems)
    expect(mockedUseMemo).toHaveBeenCalledTimes(1)
  })
})
