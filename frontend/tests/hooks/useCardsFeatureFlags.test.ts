/* eslint-disable import-helpers/order-imports */
import { mocksHooks } from './__mocks__/hooks'

import '@testing-library/jest-dom'
import useCardsFeatureFlags from '@/hooks/useCardsFeatureFlags'
import { useMemo } from 'react'
import * as ReactRedux from 'react-redux'

jest.mock('react', () => mocksHooks)
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

const mockedUseSelector = ReactRedux.useSelector as jest.Mock
const mockedUseMemo = useMemo as jest.Mock

describe('useCardsFeatureFlags', () => {
  beforeEach(() => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        featureFlags: {
          body: [
            {
              name: 'test1',
              description: 'test1',
              state: true
            },
            {
              name: 'test2',
              description: 'test2',
              state: true
            },
            {
              name: 'test3',
              description: 'test3',
              state: false
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
    const cards = useCardsFeatureFlags()

    const expectedCards = [
      { description: 'cards.description.total', title: 'cards.title.total', value: 3 },
      { description: 'cards.description.active', title: 'cards.title.active', value: 2 },
      { description: 'cards.description.inactive', title: 'cards.title.inactive', value: 1 },
      { description: 'cards.description.beta', title: 'cards.title.beta', value: 0 }
    ]

    expect(cards).toEqual(expectedCards)
    expect(mockedUseMemo).toHaveBeenCalledTimes(1)
  })
})
