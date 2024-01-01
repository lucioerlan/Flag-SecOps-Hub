import useI18n from '@/hooks/useI18n'
import * as Yup from 'yup'

export const LoginSchema = () => {
  const t = useI18n()

  return Yup.object().shape({
    email: Yup.string().email(t('input.errorEmail.type.message')).required(t('input.errorEmail.required.message')),
    password: Yup.string().min(6, t('input.errorPass.type.message')).required(t('input.errorPass.required.message'))
  })
}
