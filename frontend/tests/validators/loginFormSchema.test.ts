import { LoginSchema } from '@/validators'
import { ObjectSchema } from 'yup'

import { mockMessages } from './__mocks__/messages'

jest.mock('@/hooks/useI18n', () => ({
  __esModule: true,
  default: () => (key: string) => mockMessages[key] || key
}))

describe('LoginSchema', () => {
  let loginSchema: ObjectSchema<{
    email: string
    password: string
  }>

  beforeAll(() => {
    loginSchema = LoginSchema()
  })

  it('should validate a valid input', async () => {
    const validInput = { email: 'test@example.com', password: '123456' }
    await expect(loginSchema.isValid(validInput)).resolves.toBe(true)
  })

  it('should reject an invalid email', async () => {
    const invalidInput = { email: 'test', password: '123456' }
    await expect(loginSchema.validate(invalidInput)).rejects.toThrow('Invalid email format.')
  })

  it('should reject a short password', async () => {
    const invalidInput = { email: 'test@example.com', password: '123' }
    await expect(loginSchema.validate(invalidInput)).rejects.toThrow('Password must be at least 6 characters.')
  })
})
