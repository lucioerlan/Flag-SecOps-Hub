import { FastifyReply, FastifyRequest, RouteOptions, DoneFuncWithErrOrRes } from 'fastify'

export type Request = FastifyRequest
export type Handler = (request: Request) => Promise<{ statusCode: number; body: object }>
export type Response = FastifyReply
export type Routes = RouteOptions
export type Done = DoneFuncWithErrOrRes
