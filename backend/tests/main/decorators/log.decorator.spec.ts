import { ILogger } from '@/main/adapters'
import { LogControllerDecorator } from '@/main/decorators'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

const userEmail = 'test@example.com'
const responseSucess: HttpResponse = { statusCode: 200, body: 'success' }
const responseError: HttpResponse = { statusCode: 500, body: 'error' }
const mockRequest = {
  method: 'GET',
  url: '/test_endpoint',
  params: { email: userEmail }
} as Request

const sutFactory = () => {
  const mockController: Controller = {
    handle: jest.fn()
  }

  const mockLogger: ILogger = {
    log: jest.fn(),
    error: jest.fn(),
    debug: jest.fn()
  }

  const sut: LogControllerDecorator = new LogControllerDecorator(mockController, mockLogger)

  return { sut, mockController, mockLogger }
}

describe('LogControllerDecorator', () => {
  it('should call controller handle method', async () => {
    const { sut, mockController } = sutFactory()
    mockController.handle = jest.fn().mockResolvedValue(responseSucess)

    await sut.handle(mockRequest)

    expect(mockController.handle).toHaveBeenCalledWith(mockRequest)
  })

  it('should log error if controller returns status code 500', async () => {
    const { sut, mockController, mockLogger } = sutFactory()
    mockController.handle = jest.fn().mockResolvedValue(responseError)

    await sut.handle(mockRequest)

    expect(mockLogger.error).toHaveBeenCalledWith(`${mockRequest.method} ${mockRequest.url}`)
  })
})
