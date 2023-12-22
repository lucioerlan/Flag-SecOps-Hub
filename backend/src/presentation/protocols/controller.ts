import { HttpResponse, Request } from '@/presentation/protocols'

export interface Controller<T = Request> {
  handle(request: T): Promise<HttpResponse>
}
