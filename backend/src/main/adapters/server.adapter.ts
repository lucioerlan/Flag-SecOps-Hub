import { Routes } from '@/presentation/protocols'
import fastifyCompress from '@fastify/compress'
import fastifyHelmet from '@fastify/helmet'
import fastify, { FastifyInstance } from 'fastify'

export interface IFastifyAdapter {
  start(): Promise<void>
}

export class FastifyAdapter implements IFastifyAdapter {
  private app: FastifyInstance
  private readonly port: number

  constructor(routes: Routes[], port: number) {
    this.app = fastify({
      logger: true,
      ignoreTrailingSlash: true,
      bodyLimit: 1048576 * 2,
      maxParamLength: 100,
      caseSensitive: false,
      requestIdHeader: 'x-request-id',
      genReqId: () => {
        return 'x-request-id'
      }
    })
    this.port = port
    this.registerMiddleware()
    this.registerRoutes(routes)
  }

  private registerMiddleware() {
    this.app.register(fastifyHelmet)
    this.app.register(fastifyCompress)
  }

  private registerRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.route(route)
    })
  }

  public async start(): Promise<void> {
    try {
      await this.app.listen({ port: this.port, host: '0.0.0.0' })
    } catch (err) {
      process.exit(1)
    }
  }
}
