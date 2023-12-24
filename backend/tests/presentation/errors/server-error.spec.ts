import { ServerError } from '@/presentation/errors'

const sutFactory = (error?: Error) => {
  const sut = new ServerError(error)
  return { sut }
}

describe('ServerError', () => {
  it('should have a message "Server failed. Try again soon"', () => {
    const { sut } = sutFactory()
    expect(sut.message).toBe('Server failed. Try again soon')
  })

  it('should have a name "ServerError"', () => {
    const { sut } = sutFactory()
    expect(sut.name).toBe('ServerError')
  })

  it('should correctly assign the stack of the passed error', () => {
    const error = new Error('Original error')
    const { sut } = sutFactory(error)
    expect(sut.stack).toBe(error.stack)
  })
})
