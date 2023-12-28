import useLoginFormInitialValues from '@/constants/authLoginConstants'

describe('useLoginFormInitialValues', () => {
  it('should have the correct default values for FormLogin', () => {
    const expected = {
      email: '',
      password: ''
    }

    const actual = useLoginFormInitialValues()
    expect(actual).toEqual(expected)
  })
})
