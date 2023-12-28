import { HttpResponse, Request, Response, Done } from '@/presentation/protocols'

export interface Middleware<T = any> {
  handle(request: Request, reply: Response, done: Done): Promise<HttpResponse<T>>
}
