/* eslint-disable import-helpers/order-imports */
import { mocksHooks } from './__mocks__/hooks'

import '@testing-library/jest-dom'
import * as useSettings from '@/hooks/useSettings'

jest.mock('react', () => mocksHooks)

describe('useSettings hook', () => {
  it('should have called the useSettings method', () => {
    const mockMethod = jest.spyOn(useSettings, 'default')
    useSettings.default()

    expect(mockMethod.mock.calls).toHaveLength(1)
    expect(mockMethod).toHaveBeenCalledTimes(1)
  })
})
