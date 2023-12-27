import api from '@/factories/api'
import { RequestCreateFeatureFlag, RequestUpdateFeatureFlag } from '@/types/feature-flags'

const createFeatureFlag = async ({ name, description, state }: RequestCreateFeatureFlag) => {
  try {
    const { data } = await api.post('feature-flags', { name, description, state })
    return data
  } catch (error) {
    return error
  }
}

const listFeatureFlags = async () => {
  try {
    const { data } = await api.get('feature-flags')
    return data
  } catch (error) {
    return error
  }
}

const findFeatureFlag = async (featureFlagId: string) => {
  try {
    const { data } = await api.get(`feature-flags/${featureFlagId}`)
    return data
  } catch (error) {
    return error
  }
}

const updateFeatureFlag = async (featureFlagId: string, params: RequestUpdateFeatureFlag) => {
  try {
    const { data } = await api.patch(`feature-flags/${featureFlagId}`, params)
    return data
  } catch (error) {
    return error
  }
}

const deleteFeatureFlag = async (featureFlagId: string) => {
  try {
    const { data } = await api.delete(`feature-flags/${featureFlagId}`)
    return data
  } catch (error) {
    return error
  }
}

export { createFeatureFlag, listFeatureFlags, findFeatureFlag, updateFeatureFlag, deleteFeatureFlag }
