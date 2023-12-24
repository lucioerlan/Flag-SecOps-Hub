import { MESSAGES } from '@/domain/entities/messages'

describe('MESSAGES', () => {
  it('should have the correct values', () => {
    expect(MESSAGES.invalidEmail).toBe('Invalid email')
    expect(MESSAGES.invalidPassword).toBe('Invalid password')
    expect(MESSAGES.loginSuccess).toBe('Login success')
    expect(MESSAGES.userAlreadyExists).toBe('Already exists')
    expect(MESSAGES.userCreationFail).toBe('Failed to create user')
    expect(MESSAGES.tokenIsMissing).toBe('Token is missing')
    expect(MESSAGES.tokenIsInvalid).toBe('Token is invalid')
  })

  it('should generate the correct feature flag not found message', () => {
    const id = '123'
    const expectedMessage = `Feature flag with id ${id} not found`
    expect(MESSAGES.featureFlagNotFound(id)).toBe(expectedMessage)
  })

  it('should generate the correct user creation success message', () => {
    const email = 'test@example.com'
    const userId = '123'
    const expectedMessage = `User ${email} created with success, ID: ${userId}`
    expect(MESSAGES.userCreationSuccess(email, userId)).toBe(expectedMessage)
  })

  it('should generate the correct create feature flag success message', () => {
    const name = 'Feature Flag'
    const id = '123'
    const expectedMessage = `Feature flag ${name} created with success, ID: ${id}`
    expect(MESSAGES.createFeatureFlagSuccess(name, id)).toBe(expectedMessage)
  })

  it('should generate the correct delete feature flag success message', () => {
    const id = '123'
    const expectedMessage = `Feature flag ${id} deleted with success`
    expect(MESSAGES.deleteFeatureFlagSuccess(id)).toBe(expectedMessage)
  })
})
