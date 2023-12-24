import env from '@/main/config/env'
import Cors from '@fastify/cors'
import { FastifyInstance } from 'fastify'

export const setupCors = (app: FastifyInstance) => {
  const corsConfig = {
    origin: env.corsOrigin,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }

  app.register(Cors, corsConfig)
}
