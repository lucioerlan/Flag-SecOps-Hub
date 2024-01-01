import { Tab, Toast } from '@/components'
import useLoginFormInitialValues from '@/constants/authLoginConstants'
import useI18n from '@/hooks/useI18n'
import useSettings from '@/hooks/useSettings'
import { authLogin } from '@/services/authService'
import { RequestAuthLogin } from '@/types'
import { LoginSchema } from '@/validators'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginForm } from './components/LoginForm'

const Login: React.FC = () => {
  const t = useI18n()
  const navigate = useNavigate()
  const { setSettings } = useSettings()

  const onLoginSuccess = (email: string, accessToken: string) => {
    toast.success(`${t('success.welcomeBack')} ${email}! ❤️`, {
      onClose: () => {
        setSettings({ accessToken, isLoggedIn: true })
        navigate('/home')
      },
      autoClose: 1000
    })
  }

  const onLoginFailure = (messageKey: string) => {
    toast.warning(t(`warning.${messageKey}`))
  }

  const onLoginError = () => {
    toast.error(t('error.login'))
  }

  const tryToLogin = async (values: RequestAuthLogin) => {
    try {
      const response = await authLogin(values)

      if (response.body && response.body.accessToken) {
        onLoginSuccess(values.email, response.body.accessToken)
      } else {
        onLoginFailure(response.response.data.body.message)
      }
    } catch (error) {
      onLoginError()
    }
  }

  return (
    <Tab title={t('tabs.login')} data-testid="login">
      <Formik
        initialValues={useLoginFormInitialValues()}
        onSubmit={tryToLogin}
        validationSchema={LoginSchema()}
        component={LoginForm}
      />
      <Toast />
    </Tab>
  )
}

export default Login
