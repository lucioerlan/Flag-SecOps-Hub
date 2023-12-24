import RateLimit from '@fastify/rate-limit'
import { FastifyInstance } from 'fastify'

export const setupRateLimit = (app: FastifyInstance) => {
  const rateLimitConfig = {
    max: 100,
    timeWindow: '1 minute'
  }

  app.register(RateLimit, rateLimitConfig)
}
