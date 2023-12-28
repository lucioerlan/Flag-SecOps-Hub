import { useI18n } from '@/hooks/useI18n'
import * as Yup from 'yup'

export const FeatureFlagSchema = () => {
  const t = useI18n()

  return Yup.object().shape({
    name: Yup.string().required(t('input.errorName.required.message')),
    description: Yup.string().required(t('input.errorDescription.required.message')),
    state: Yup.boolean().optional()
  })
}
