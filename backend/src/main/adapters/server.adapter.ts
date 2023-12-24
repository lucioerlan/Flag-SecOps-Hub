import {
  setupCompress,
  setupCookie,
  setupCors,
  setupCsrf,
  setupHelmet,
  setupRateLimit,
  setupSession
} from '@/main/middlewares'
import { Routes } from '@/presentation/protocols'
import Swagger, { SwaggerOptions } from '@fastify/swagger'
import SwaggerUi from '@fastify/swagger-ui'
import fastify, { FastifyInstance } from 'fastify'

import swaggerConfig from '../docs/swagger'

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
      caseSensitive: false
    })
    this.port = port
    this.registerMiddleware()
    this.registerRoutes(routes)
    this.registerSwagger()
  }

  private registerMiddleware() {
    // Security headers
    setupHelmet(this.app)

    // Rate limiting
    setupRateLimit(this.app)

    // CORS
    setupCors(this.app)

    // Cookies
    setupCookie(this.app)

    // Session Management
    setupSession(this.app)

    // Compression
    setupCompress(this.app)

    // CSRF Protection
    setupCsrf(this.app)
  }

  private registerRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.route(route)
    })
  }

  private registerSwagger() {
    this.app.register(Swagger, swaggerConfig as SwaggerOptions)
    this.app.register(SwaggerUi)
  }

  public async start(): Promise<void> {
    try {
      await this.app.listen({ port: this.port, host: '0.0.0.0' })
    } catch (err) {
      process.exit(1)
    }
  }
}
