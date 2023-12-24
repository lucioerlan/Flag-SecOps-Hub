import { AccessDeniedError } from '@/presentation/errors'

const sutFactory = () => {
  const sut = new AccessDeniedError()
  return { sut }
}

describe('AccessDeniedError', () => {
  it('should have a message "Access denied"', () => {
    const { sut } = sutFactory()
    expect(sut.message).toBe('Access denied')
  })

  it('should have a name "AccessDeniedError"', () => {
    const { sut } = sutFactory()
    expect(sut.name).toBe('AccessDeniedError')
  })
})
