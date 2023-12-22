import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify'

export type Request = FastifyRequest
export type Handler = (request: Request) => Promise<object>
export type Response = FastifyReply
export type Routes = RouteOptions
