import { AccessDeniedError, ServerError } from '@/presentation/errors'
import { HttpResponse } from '@/presentation/protocols'

const createResponse = <T = object>(statusCode: number, data: T): HttpResponse<T> => {
  return { statusCode, body: data }
}

export const ok = <T = string>(data: T): HttpResponse => {
  return createResponse(200, data)
}

export const badRequest = <T = string>(data: T): HttpResponse => {
  return createResponse(400, data)
}

export const notFound = <T = string>(data: T): HttpResponse => {
  return createResponse(404, data)
}

export const conflict = <T = string>(data: T): HttpResponse => {
  return createResponse(409, data)
}

export const unauthorized = <T = string>(data: T): HttpResponse => {
  return createResponse(401, data)
}

export const accessDenied = (): HttpResponse => {
  return createResponse(403, new AccessDeniedError())
}

export const serverError = (error: unknown): HttpResponse => {
  return createResponse(500, new ServerError(error as Error))
}
