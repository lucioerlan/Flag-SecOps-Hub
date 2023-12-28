import useFeatureFlagFormInitialValues from '@/constants/featureFlagConstants'

describe('useFeatureFlagFormInitialValues', () => {
  it('should have the correct default values for FormFeatureFlag', () => {
    const expected = {
      name: '',
      description: '',
      state: false
    }

    const actual = useFeatureFlagFormInitialValues()
    expect(actual).toEqual(expected)
  })
})
