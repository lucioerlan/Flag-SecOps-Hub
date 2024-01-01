import { Tab, Toast } from '@/components'
import useRegisterFormInitialValues from '@/constants/authRegisterConstants'
import useI18n from '@/hooks/useI18n'
import { authRegister } from '@/services/authService'
import { RequestAuthRegister } from '@/types'
import { RegisterSchema } from '@/validators'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RegisterForm } from './components/RegisterForm'

const Register: React.FC = () => {
  const t = useI18n()
  const navigate = useNavigate()

  const onRegisterSuccess = (email: string) => {
    toast.success(`${t('success.successAccountCreation')} ${email}! ${t('success.letsdoit')} 🚀`, {
      onClose: () => navigate('/login'),
      autoClose: 1000
    })
  }

  const onRegisterFailure = (messageKey: string) => {
    toast.warning(t(`warning.${messageKey}`))
  }

  const onRegisterError = () => {
    toast.error(t('error.register'))
  }

  const tryToRegister = async (values: RequestAuthRegister) => {
    try {
      const response = await authRegister(values)

      if (response.body && response.body.includes('created with success')) {
        onRegisterSuccess(values.email)
      } else {
        onRegisterFailure(response.response.data.body)
      }
    } catch (error) {
      onRegisterError()
    }
  }

  return (
    <Tab title={t('tabs.register')} data-testid="register">
      <Formik
        initialValues={useRegisterFormInitialValues()}
        onSubmit={tryToRegister}
        validationSchema={RegisterSchema()}
        component={RegisterForm}
      />
      <Toast />
    </Tab>
  )
}

export default Register
