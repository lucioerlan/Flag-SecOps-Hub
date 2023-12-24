import Csrf from '@fastify/csrf-protection'
import { FastifyInstance } from 'fastify'

export const setupCsrf = (app: FastifyInstance) => {
  const csrfConfig = {
    cookieOpts: {
      signed: true
    }
  }
  app.register(Csrf, csrfConfig)
}
