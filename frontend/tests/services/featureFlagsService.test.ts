import api from '@/factories/apiFactory'
import * as services from '@/services/featureFlagsService'

describe('createFeatureFlag', () => {
  const newFeatureFlag = { name: 'New Feature', description: 'Description', state: true }

  it('should return data on successful feature flag creation', async () => {
    const mockData = { id: '1', ...newFeatureFlag }
    jest.spyOn(api, 'post').mockResolvedValueOnce({ data: mockData })

    const result = await services.createFeatureFlag(newFeatureFlag)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed feature flag creation', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'post').mockRejectedValueOnce(mockError)

    const result = await services.createFeatureFlag(newFeatureFlag)
    expect(result).toEqual(mockError)
  })
})

describe('listFeatureFlags', () => {
  it('should return data on successful retrieval of feature flags', async () => {
    const mockData = [
      { id: '1', name: 'Feature 1' },
      { id: '2', name: 'Feature 2' }
    ]
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockData })

    const result = await services.listFeatureFlags()
    expect(result).toEqual(mockData)
  })

  it('should return error on failed retrieval of feature flags', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockError)

    const result = await services.listFeatureFlags()
    expect(result).toEqual(mockError)
  })
})

describe('updateFeatureFlag', () => {
  const featureFlagId = '12345'
  const updateParams = { name: 'Updated Feature', description: 'Updated Description', state: false }

  it('should return data on successful update of a feature flag', async () => {
    const mockData = { id: featureFlagId, ...updateParams }
    jest.spyOn(api, 'patch').mockResolvedValueOnce({ data: mockData })

    const result = await services.updateFeatureFlag(featureFlagId, updateParams)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed update of a feature flag', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'patch').mockRejectedValueOnce(mockError)

    const result = await services.updateFeatureFlag(featureFlagId, updateParams)
    expect(result).toEqual(mockError)
  })
})

describe('deleteFeatureFlag', () => {
  const featureFlagId = '12345'

  it('should return data on successful deletion of a feature flag', async () => {
    const mockData = { message: 'Feature flag deleted successfully' }
    jest.spyOn(api, 'delete').mockResolvedValueOnce({ data: mockData })

    const result = await services.deleteFeatureFlag(featureFlagId)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed deletion of a feature flag', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'delete').mockRejectedValueOnce(mockError)

    const result = await services.deleteFeatureFlag(featureFlagId)
    expect(result).toEqual(mockError)
  })
})

describe('findFeatureFlag', () => {
  const featureFlagId = '12345'

  it('should return data on successful retrieval of a feature flag', async () => {
    const mockData = { id: featureFlagId, name: 'Feature 1', description: 'Description', state: true }
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockData })

    const result = await services.findFeatureFlag(featureFlagId)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed retrieval of a feature flag', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'get').mockRejectedValueOnce(mockError)

    const result = await services.findFeatureFlag(featureFlagId)
    expect(result).toEqual(mockError)
  })
})
