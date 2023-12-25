import { Tab, Toast } from '@/components'
import FormContainer from '@/constants/form-container'
import useSettings from '@/hooks/useSettings'
import { authUser } from '@/services/auth'
import { AuthUser } from '@/types/auth'
import { LoginSchema } from '@/validators/schemas'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginForm } from './components/LoginForm'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setSettings } = useSettings()

  const tryToLogin = async (values: AuthUser) => {
    const { body } = await authUser({
      email: values.email,
      password: values.password
    })

    try {
      if (body && body.accessToken) {
        setSettings({
          token: body.accessToken,
          email: body.email,
          isLoggedIn: true
        })

        navigate('/app/dashboard')
      } else {
        toast.warning(t('warning.credentials'))
      }
    } catch (error) {
      toast.error(t('error.login'))
    }
  }

  return (
    <Tab title={t('tabs.login')} data-testid="login">
      <Formik
        initialValues={FormContainer.INITIAL_VALUES.FormLogin}
        onSubmit={tryToLogin}
        validationSchema={LoginSchema()}
        component={LoginForm}
      />
      <Toast />
    </Tab>
  )
}

export default Login
