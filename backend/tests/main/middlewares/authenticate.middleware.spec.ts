import { IDecrypter } from '@/data/protocols/cryptography/jwt/jwt'
import { MESSAGES } from '@/domain/entities/messages'
import { EnsureAuthenticatedMiddleware } from '@/main/middlewares'
import { Request } from '@/presentation/protocols'

const makeRequestMock = (authorization = '') => {
  return {
    headers: {
      authorization
    }
  } as unknown as Request
}

const makeResponseMock = () => {
  const res = { status: jest.fn(() => res), send: jest.fn() }
  return res
}

const makeNextMock = () => jest.fn()

const sutFactory = () => {
  const decrypterMock = { decrypt: jest.fn() } as IDecrypter
  const sut: EnsureAuthenticatedMiddleware = new EnsureAuthenticatedMiddleware(decrypterMock)
  return {
    sut,
    decrypterMock
  }
}

describe('EnsureAuthenticatedMiddleware', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call decrypt with the correct value', async () => {
    const { sut, decrypterMock } = sutFactory()
    const requestMock = makeRequestMock('Bearer validtoken')
    const responseMock = makeResponseMock()
    const nextMock = makeNextMock()

    await sut.handle(requestMock, responseMock, nextMock)

    expect(decrypterMock.decrypt).toHaveBeenCalledWith('validtoken')
  })

  it('should return 401 if token is missing', async () => {
    const { sut } = sutFactory()
    const requestMock = makeRequestMock('')
    const responseMock = makeResponseMock()
    const nextMock = makeNextMock()

    await sut.handle(requestMock, responseMock, nextMock)

    expect(responseMock.status).toHaveBeenCalledWith(401)
    expect(responseMock.send).toHaveBeenCalledWith({ error: MESSAGES.tokenIsMissing })
  })

  it('should return 401 if token is invalid', async () => {
    const { sut, decrypterMock } = sutFactory()

    const requestMock = makeRequestMock('Bearer invalidtoken')
    const responseMock = makeResponseMock()
    const nextMock = makeNextMock()
    decrypterMock.decrypt = jest.fn().mockRejectedValueOnce(new Error())

    await sut.handle(requestMock, responseMock, nextMock)

    expect(responseMock.status).toHaveBeenCalledWith(401)
    expect(responseMock.send).toHaveBeenCalledWith({ error: MESSAGES.tokenIsInvalid })
  })
})
