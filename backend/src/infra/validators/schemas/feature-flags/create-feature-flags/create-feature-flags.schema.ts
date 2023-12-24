import { FastifySchema } from 'fastify'

export const createFeatureFlagSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'state'],
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      state: { type: 'boolean' }
    }
  }
}
