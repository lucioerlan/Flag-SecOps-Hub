import env from '@/main/config/env'
import { Logger as WinstonLogger, createLogger, transports, format } from 'winston'

export interface ILogger {
  log(message: string, level?: string): void
  error(message: string): void
  debug(message: string): void
}

export class WinstonLoggerAdapter implements ILogger {
  private readonly loggerInstance: WinstonLogger

  constructor(loggerInstance: WinstonLogger) {
    this.loggerInstance = loggerInstance
  }

  /**
   * Logs a message with given level
   * @param {string} message
   * @param level
   */
  log(message: string, level = 'info') {
    this.loggerInstance.log({ level, message })
  }

  /**
   * Logs an error message
   * @param {string} message
   */
  error(message: string) {
    this.loggerInstance.error(message)
  }

  /**
   * Logs a debug message
   * @param {string} message
   */
  debug(message: string) {
    this.loggerInstance.debug(message)
  }
}

export const createLoggerInstance: WinstonLogger = createLogger({
  level: env.logLevel,
  transports: [new transports.Console()],
  format: format.combine(
    format.json(),
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`
    })
  )
})

export const logger: ILogger = new WinstonLoggerAdapter(createLoggerInstance)
