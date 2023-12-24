import { WinstonLoggerAdapter, createLoggerInstance, logger } from '@/main/adapters'
import { Logger as WinstonLogger } from 'winston'

const sutFactory = () => {
  const winstonLoggerMock = {
    log: jest.fn(),
    error: jest.fn(),
    debug: jest.fn()
  } as unknown as WinstonLogger

  const sut = new WinstonLoggerAdapter(winstonLoggerMock)

  return { sut, winstonLoggerMock }
}

describe('WinstonLoggerAdapter', () => {
  it('should log a message with given level', () => {
    const { sut, winstonLoggerMock } = sutFactory()
    sut.log('test message', 'info')

    expect(winstonLoggerMock.log).toHaveBeenCalledWith({ level: 'info', message: 'test message' })
  })

  it('should log a message with default level when level is not provided', () => {
    const { sut, winstonLoggerMock } = sutFactory()
    sut.log('test message')

    expect(winstonLoggerMock.log).toHaveBeenCalledWith({ level: 'info', message: 'test message' })
  })

  it('should log a message with provided level when level is provided', () => {
    const { sut, winstonLoggerMock } = sutFactory()
    sut.log('test message', 'warn')

    expect(winstonLoggerMock.log).toHaveBeenCalledWith({ level: 'warn', message: 'test message' })
  })

  it('should log an error message', () => {
    const { sut, winstonLoggerMock } = sutFactory()
    sut.error('test error message')

    expect(winstonLoggerMock.error).toHaveBeenCalledWith('test error message')
  })

  it('should log a debug message', () => {
    const { sut, winstonLoggerMock } = sutFactory()
    sut.debug('test debug message')

    expect(winstonLoggerMock.debug).toHaveBeenCalledWith('test debug message')
  })

  it('should verify that the logger instance is called with the correct data', () => {
    const winstonLogSpy = jest.spyOn(createLoggerInstance, 'log') as jest.SpyInstance
    logger.log('test message')

    const [loggedData] = winstonLogSpy.mock.calls[0]

    expect(loggedData).toHaveProperty('level')
    expect(loggedData).toHaveProperty('message')
    expect(loggedData).toHaveProperty('timestamp')
  })
})
