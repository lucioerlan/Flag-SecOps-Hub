import { VisitorTime } from '@/components'

describe('VisitorTime', () => {
  it('should return a string', () => {
    const user = 'admin@user.com'

    const greeting = VisitorTime(user)
    expect(typeof greeting).toBe('string')
  })
})
