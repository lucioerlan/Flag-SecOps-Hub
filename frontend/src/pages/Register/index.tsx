import { Tab, Toast } from '@/components'
import useRegisterFormInitialValues from '@/constants/authRegisterConstants'
import { useI18n } from '@/hooks/useI18n'
import { authRegister } from '@/services/authService'
import { RequestAuthRegister } from '@/types'
import { RegisterSchema } from '@/validators'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RegisterForm } from './components/RegisterForm'

const Register = () => {
  const t = useI18n()
  const navigate = useNavigate()

  const tryToRegister = async (values: RequestAuthRegister) => {
    const response = await authRegister({
      name: values.name,
      email: values.email,
      password: values.password
    })

    try {
      if (response.body && response.body.includes('created with success')) {
        toast.success(`${t('success.successAccountCreation')} ${values.email}! ${t('success.letsdoit')} 🚀`)

        setTimeout(() => {
          navigate('/login')
        }, 3000)
      } else {
        const messageKey = response.response.data.body
        toast.warning(t(`warning.${messageKey}`))
      }
    } catch (error) {
      toast.error(t('error.register'))
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
