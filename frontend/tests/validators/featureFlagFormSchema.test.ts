import { FeatureFlagSchema } from '@/validators/featureFlagFormSchema'
import { ObjectSchema } from 'yup'

import { messages } from './__mocks__/messages'

jest.mock('@/hooks/useI18n', () => ({
  useI18n: () => (key: string) => {
    return messages[key] || key
  }
}))

describe('FeatureFlagSchema', () => {
  let featureFlagSchema: ObjectSchema<{
    name: string
    description: string
    state?: boolean
  }>

  beforeAll(() => {
    featureFlagSchema = FeatureFlagSchema()
  })

  it('should validate a valid input', async () => {
    const validInput = {
      name: 'Feature Flag 1',
      description: 'This is a feature flag.',
      state: true
    }
    await expect(featureFlagSchema.isValid(validInput)).resolves.toBe(true)
  })

  it('should reject an invalid name', async () => {
    const invalidInput = {
      name: '',
      description: 'This is a feature flag.',
      state: true
    }
    await expect(featureFlagSchema.validate(invalidInput)).rejects.toThrow('Name is required.')
  })

  it('should reject an invalid description', async () => {
    const invalidInput = {
      name: 'Feature Flag 1',
      description: '',
      state: true
    }
    await expect(featureFlagSchema.validate(invalidInput)).rejects.toThrow('Description is required.')
  })
})
