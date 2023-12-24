import Session from '@fastify/session'
import { randomBytes } from 'crypto'
import { FastifyInstance } from 'fastify'

export const setupSession = (app: FastifyInstance) => {
  app.register(Session, {
    secret: randomBytes(32).toString('hex'),
    cookieName: 'session',
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  })
}
