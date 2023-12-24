import { AccessDeniedError, ServerError } from '@/presentation/errors'
import { ok, badRequest, notFound, conflict, unauthorized, accessDenied, serverError } from '@/presentation/helpers'

const sutFactory = (error?: Error) => {
  const sut = {
    ok: (data = {}) => ok(data),
    badRequest: (data = {}) => badRequest(data),
    notFound: (data = {}) => notFound(data),
    conflict: (data = {}) => conflict(data),
    unauthorized: (data = {}) => unauthorized(data),
    accessDenied: () => accessDenied(),
    serverError: () => serverError(error)
  }

  return { sut }
}

describe('HttpResponse', () => {
  describe('ok', () => {
    it('should return 200 and the correct data', () => {
      const { sut } = sutFactory()
      const data = { message: 'success' }
      const result = sut.ok(data)
      expect(result.statusCode).toBe(200)
      expect(result.body).toBe(data)
    })
  })

  describe('notFound', () => {
    it('should return 404 and the correct data', () => {
      const { sut } = sutFactory()
      const data = { message: 'not found' }
      const result = sut.notFound(data)
      expect(result.statusCode).toBe(404)
      expect(result.body).toBe(data)
    })
  })

  describe('conflict', () => {
    it('should return 409 and the correct data', () => {
      const { sut } = sutFactory()
      const data = { message: 'conflict' }
      const result = sut.conflict(data)
      expect(result.statusCode).toBe(409)
      expect(result.body).toBe(data)
    })
  })

  describe('badRequest', () => {
    it('should return 400 and the correct data', () => {
      const { sut } = sutFactory()
      const data = { message: 'bad request' }
      const result = sut.badRequest(data)
      expect(result.statusCode).toBe(400)
      expect(result.body).toBe(data)
    })
  })

  describe('unauthorized', () => {
    it('should return 401 and the correct data', () => {
      const { sut } = sutFactory()
      const data = { message: 'unauthorized' }
      const result = sut.unauthorized(data)
      expect(result.statusCode).toBe(401)
      expect(result.body).toBe(data)
    })
  })

  describe('accessDenied', () => {
    it('should return 403 and AccessDeniedError', () => {
      const { sut } = sutFactory()
      const result = sut.accessDenied()
      expect(result.statusCode).toBe(403)
      expect(result.body).toEqual(new AccessDeniedError())
    })
  })

  describe('serverError', () => {
    it('should return 500 and ServerError with the original error', () => {
      const originalError = new Error('Something went wrong')
      const { sut } = sutFactory(originalError)
      const result = sut.serverError()
      expect(result.statusCode).toBe(500)
      expect(result.body).toEqual(new ServerError(originalError))
    })
  })
})
