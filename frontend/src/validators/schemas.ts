import { useI18n } from '@/hooks/useI18n'
import * as Yup from 'yup'

export const LoginSchema = () => {
  const t = useI18n()

  return Yup.object().shape({
    email: Yup.string().email(t('input.errorEmail.type.message')).required(t('input.errorEmail.required.message')),
    password: Yup.string().min(6, t('input.errorPass.type.message')).required(t('input.errorPass.required.message'))
  })
}

export const FeatureFlagSchema = () => {
  const t = useI18n()

  return Yup.object().shape({
    name: Yup.string().required(t('input.errorName.required.message')),
    description: Yup.string().required(t('input.errorDescription.required.message')),
    state: Yup.boolean().optional()
  })
}

export const RegisterSchema = () => {
  const t = useI18n()

  return Yup.object().shape({
    name: Yup.string().required(t('input.errorName.required.message')),
    email: Yup.string().email(t('input.errorEmail.type.message')).required(t('input.errorEmail.required.message')),
    password: Yup.string().min(6, t('input.errorPass.type.message')).required(t('input.errorPass.required.message')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('input.errorConfirmPassword.type.message'))
      .required(t('input.errorPass.required.message'))
  })
}
