import { FastifySchema } from 'fastify'

export const deleteFeatureFlagSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', pattern: '^[0-9a-fA-F]{24}$' }
    }
  }
}
