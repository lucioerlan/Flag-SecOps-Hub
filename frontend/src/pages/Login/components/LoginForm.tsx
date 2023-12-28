import { FlagSecopsHubLogo, Mail, Pass } from '@/assets'
import { Frame, Button, ErrorMessage, Input, Form, Logo } from '@/components'
import { useI18n } from '@/hooks/useI18n'
import { FormAuthLoginValues, OtherAuthLoginProps } from '@/types'
import { FormikProps } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinkContainer, StyledLink } from '../styled'

import { Password } from './Password'

export const LoginForm = (props: OtherAuthLoginProps & FormikProps<FormAuthLoginValues>) => {
  const t = useI18n()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const { touched, errors, isSubmitting } = props

  const handleRegisterClick = () => {
    navigate('/register')
  }

  const handleClickPassword = () => {
    setShowPassword(showPassword ? false : true)
  }

  return (
    <Frame>
      <Form as="form" aria-label="Login form" onSubmit={props.handleSubmit}>
        <Logo src={FlagSecopsHubLogo} alt="Logo" />

        <Input
          aria-label={t('input.email')}
          color="#fff"
          image={Mail}
          type="email"
          name="email"
          placeholder={t('input.email')}
          className={`form-control ${touched.email && errors.email ? '-invalid' : ''}`}
        />
        <ErrorMessage component="div" name="email" className="error-form" />

        <Input
          aria-label={t('input.password')}
          color="#fff"
          image={Pass}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder={t('input.password')}
          className={`form-control ${touched.password && errors.password ? '-invalid' : ''}`}
        />
        <Password showPassword={showPassword} handleClickPassword={handleClickPassword} />
        <ErrorMessage component="div" name="password" className="error-form" aria-live="assertive" />

        <Button
          aria-label="Login button"
          type="submit"
          color="#fff"
          hover="rgb(235, 233, 233)"
          disabled={isSubmitting || Object.keys(errors).length > 0}
          label={isSubmitting ? t('button.isSubmitting') : t('button.enter')}
        />

        <LinkContainer>
          <StyledLink onClick={handleRegisterClick}>{t('link.notMemberRegister')}</StyledLink>
        </LinkContainer>
      </Form>
    </Frame>
  )
}
