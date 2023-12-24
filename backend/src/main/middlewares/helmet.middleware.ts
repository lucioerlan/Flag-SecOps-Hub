import Helmet from '@fastify/helmet'
import { FastifyInstance } from 'fastify'

export const setupHelmet = (app: FastifyInstance) => {
  app.register(Helmet)
}
