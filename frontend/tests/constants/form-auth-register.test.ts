import useRegisterFormInitialValues from '@/constants/authRegisterConstants'

describe('useRegisterFormInitialValues', () => {
  it('should have the correct default values for FormRegister', () => {
    const expected = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    const actual = useRegisterFormInitialValues()
    expect(actual).toEqual(expected)
  })
})
