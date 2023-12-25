import FormContainer from '@/constants/form-container'

describe('FormContainer', () => {
  it('should have the correct default values for FormLogin', () => {
    const expected = {
      FormLogin: {
        email: '',
        password: ''
      }
    }
    expect(FormContainer.INITIAL_VALUES).toEqual(expected)
  })
})
