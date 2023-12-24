import Compress from '@fastify/compress'
import { FastifyInstance } from 'fastify'

export const setupCompress = (app: FastifyInstance) => {
  app.register(Compress)
}
