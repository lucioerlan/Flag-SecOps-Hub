import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

const server: FastifyInstance = fastify({
  logger: true
})

server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return 'Hello World'
})

server.listen({ port: 5000, host: '0.0.0.0' }, (err: Error, address: string) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server listening at ${address}`)
})
