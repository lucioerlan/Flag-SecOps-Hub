import { ILogger, WinstonLoggerAdapter, createLoggerInstance } from '@/main/adapters'
import { LogControllerDecorator } from '@/main/decorators'
import { Controller } from '@/presentation/protocols'

const logger: ILogger = new WinstonLoggerAdapter(createLoggerInstance)

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  return new LogControllerDecorator(controller, logger)
}
