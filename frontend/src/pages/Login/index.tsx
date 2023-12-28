import { Tab, Toast } from '@/components'
import useLoginFormInitialValues from '@/constants/authLoginConstants'
import { useI18n } from '@/hooks/useI18n'
import useSettings from '@/hooks/useSettings'
import { authLogin } from '@/services/authService'
import { RequestAuthLogin } from '@/types'
import { LoginSchema } from '@/validators'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginForm } from './components/LoginForm'

const Login = () => {
  const t = useI18n()
  const navigate = useNavigate()
  const { setSettings } = useSettings()

  const tryToLogin = async (values: RequestAuthLogin) => {
    const response = await authLogin({
      email: values.email,
      password: values.password
    })

    try {
      if (response.body && response.body.accessToken) {
        toast.success(`${t('success.welcomeBack')} ${values.email}! ❤️`)

        setTimeout(() => {
          setSettings({
            accessToken: response.body.accessToken,
            isLoggedIn: true
          })
          navigate('/home')
        }, 2000)
      } else {
        const messageKey = response.response.data.body.message
        toast.warning(t(`warning.${messageKey}`))
      }
    } catch (error) {
      toast.error(t('error.login'))
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
