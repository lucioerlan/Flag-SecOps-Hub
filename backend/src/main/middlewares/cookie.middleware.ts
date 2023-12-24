import Cookie from '@fastify/cookie'
import { randomBytes } from 'crypto'
import { FastifyInstance } from 'fastify'

export const setupCookie = (app: FastifyInstance) => {
  app.register(Cookie, {
    secret: randomBytes(32).toString('hex'),
    parseOptions: {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  })
}
