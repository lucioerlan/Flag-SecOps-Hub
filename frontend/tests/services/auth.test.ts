import '@testing-library/jest-dom'

import * as common from '@/services/auth'

describe('auth service', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have called the authUser method', () => {
    const spy = jest.spyOn(common, 'authUser')

    common.authUser({ email: 'admin@user.com', password: '123456' })

    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
