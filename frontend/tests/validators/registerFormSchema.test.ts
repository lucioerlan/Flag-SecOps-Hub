import { RegisterSchema } from '@/validators'
import { ObjectSchema } from 'yup'

import { messages } from './__mocks__/messages'

jest.mock('@/hooks/useI18n', () => ({
  useI18n: () => (key: string) => {
    return messages[key] || key
  }
}))

describe('RegisterSchema', () => {
  let registerSchema: ObjectSchema<{
    name: string
    email: string
    password: string
    confirmPassword: string
  }>

  beforeAll(() => {
    registerSchema = RegisterSchema()
  })

  it('should validate a valid input', async () => {
    const validInput = {
      name: 'John Doe',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456'
    }
    await expect(registerSchema.isValid(validInput)).resolves.toBe(true)
  })

  it('should reject an invalid name', async () => {
    const invalidInput = {
      name: '',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456'
    }
    await expect(registerSchema.validate(invalidInput)).rejects.toThrow('Name is required.')
  })

  it('should reject an invalid email', async () => {
    const invalidInput = {
      name: 'John Doe',
      email: 'test',
      password: '123456',
      confirmPassword: '123456'
    }
    await expect(registerSchema.validate(invalidInput)).rejects.toThrow('Invalid email format.')
  })

  it('should reject a short password', async () => {
    const invalidInput = {
      name: 'John Doe',
      email: 'test@example.com',
      password: '123',
      confirmPassword: '123'
    }
    await expect(registerSchema.validate(invalidInput)).rejects.toThrow('Password must be at least 6 characters.')
  })

  it('should reject mismatched passwords', async () => {
    const invalidInput = {
      name: 'John Doe',
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '654321'
    }
    await expect(registerSchema.validate(invalidInput)).rejects.toThrow('Passwords must match.')
  })
})
