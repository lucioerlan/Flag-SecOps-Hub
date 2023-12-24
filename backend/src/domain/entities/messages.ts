export const MESSAGES = {
  invalidEmail: 'Invalid email',
  invalidPassword: 'Invalid password',
  loginSuccess: 'Login success',
  userAlreadyExists: 'Already exists',
  userCreationFail: 'Failed to create user',
  tokenIsMissing: 'Token is missing',
  tokenIsInvalid: 'Token is invalid',
  featureFlagNotFound: (id: string) => `Feature flag with id ${id} not found`,
  userCreationSuccess: (email: string, userId: string) => `User ${email} created with success, ID: ${userId}`,
  createFeatureFlagSuccess: (name: string, id: string) => `Feature flag ${name} created with success, ID: ${id}`,
  deleteFeatureFlagSuccess: (id: string) => `Feature flag ${id} deleted with success`
}
