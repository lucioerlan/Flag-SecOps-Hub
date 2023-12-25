import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const LoginSchema = () => {
  const { t } = useTranslation()

  return Yup.object().shape({
    email: Yup.string().email(t('input.errorEmail.type.message')).required(t('input.errorEmail.required.message')),
    password: Yup.string().min(6, t('input.errorPass.type.message')).required(t('input.errorPass.required.message'))
  })
}
