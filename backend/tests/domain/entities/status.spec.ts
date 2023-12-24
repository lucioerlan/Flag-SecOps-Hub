import { STATUS } from '@/domain/entities/status'

describe('STATUS', () => {
  it('should have the correct values', () => {
    expect(STATUS.Success).toBe('success')
    expect(STATUS.Fail).toBe('fail')
    expect(STATUS.Warning).toBe('warning')
    expect(STATUS.Info).toBe('info')
    expect(STATUS.Expired).toBe('expired')
    expect(STATUS.Error).toBe('error')
  })
})
