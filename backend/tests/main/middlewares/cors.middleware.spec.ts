import env from '@/main/config/env'
import { setupCors } from '@/main/middlewares'
import Cors from '@fastify/cors'
import { FastifyInstance } from 'fastify'

const appMock = {
  register: jest.fn()
} as unknown as FastifyInstance

const sutFactory = () => {
  const sut = setupCors
  return { sut, appMock }
}

describe('CORS Setup', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should setup CORS with correct configurations', () => {
    const { sut, appMock } = sutFactory()
    sut(appMock)

    expect(appMock.register).toHaveBeenCalledWith(Cors, {
      origin: env.corsOrigin,
      methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    })
  })

  it('should setup CORS with expected origin from environment variables', () => {
    const { sut, appMock } = sutFactory()
    sut(appMock)

    expect(appMock.register).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        origin: env.corsOrigin
      })
    )
  })

  it('should allow specific methods', () => {
    const { sut, appMock } = sutFactory()
    sut(appMock)

    expect(appMock.register).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        methods: expect.arrayContaining(['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'])
      })
    )
  })

  it('should setup CORS to allow specific headers', () => {
    const { sut, appMock } = sutFactory()
    sut(appMock)

    expect(appMock.register).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
  })

  it('should setup CORS to allow credentials', () => {
    const { sut, appMock } = sutFactory()
    sut(appMock)

    expect(appMock.register).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        credentials: true
      })
    )
  })
})
