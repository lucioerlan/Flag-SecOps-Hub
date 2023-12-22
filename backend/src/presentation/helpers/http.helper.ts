import { AccessDeniedError, ServerError, UnauthorizedError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols'

const createResponse = <T = object>(statusCode: number, data: T): HttpResponse<T> => {
  return { statusCode, body: data }
}

export const ok = <T = string>(data: T): HttpResponse => createResponse(200, data)

export const badRequest = <T = string>(data: T): HttpResponse => createResponse(400, data)

export const unauthorized = (): HttpResponse => createResponse(401, new UnauthorizedError())

export const accessDenied = (): HttpResponse => createResponse(403, new AccessDeniedError())

export const serverError = (error: unknown): HttpResponse => createResponse(500, new ServerError(error as Error))
