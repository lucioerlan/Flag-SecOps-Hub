import { FlagSecopsHubLogo, Mail, Pass, User } from '@/assets'
import { Frame, Button, ErrorMessage, Input, Form, Logo } from '@/components'
import { useI18n } from '@/hooks/useI18n'
import { FormAuthRegisterValues, OtherAuthRegisterProps, PasswordField } from '@/types/formik'
import { FormikProps } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinkContainer, StyledLink } from '../styled'

import { Password } from './Password'

export const RegisterForm = (props: OtherAuthRegisterProps & FormikProps<FormAuthRegisterValues>) => {
  const t = useI18n()
  const navigate = useNavigate()
  const { touched, errors, isSubmitting } = props

  const [passwordVisibility, setPasswordVisibility] = useState<{ [key in PasswordField]: boolean }>({
    password: false,
    confirmPassword: false
  })

  const handleRegisterClick = () => {
    navigate('/login')
  }

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  return (
    <Frame>
      <Form as="form" aria-label="Register form" onSubmit={props.handleSubmit}>
        <Logo src={FlagSecopsHubLogo} alt="Logo" />

        <Input
          aria-label={t('input.name')}
          color="#fff"
          image={User}
          type="text"
          name="name"
          placeholder={t('input.name')}
          className={`form-control ${touched.name && errors.name ? '-invalid' : ''}`}
        />
        <ErrorMessage component="div" name="name" className="error-form" />

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
          type={passwordVisibility.password ? 'text' : 'password'}
          name="password"
          placeholder={t('input.password')}
          className={`form-control ${touched.password && errors.password ? '-invalid' : ''}`}
        />
        <Password
          showPassword={passwordVisibility.password}
          handleClickPassword={() => togglePasswordVisibility('password')}
        />
        <ErrorMessage component="div" name="password" className="error-form" aria-live="assertive" />

        <Input
          aria-label={t('input.confirmPassword')}
          color="#fff"
          image={Pass}
          type={passwordVisibility.confirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder={t('input.confirmPassword')}
          className={`form-control ${touched.confirmPassword && errors.confirmPassword ? '-invalid' : ''}`}
        />
        <Password
          showPassword={passwordVisibility.confirmPassword}
          handleClickPassword={() => togglePasswordVisibility('confirmPassword')}
        />
        <ErrorMessage name="confirmPassword" component="div" className="error-form" />

        <Button
          aria-label="Register button"
          type="submit"
          color="#fff"
          hover="rgb(235, 233, 233)"
          disabled={isSubmitting || Object.keys(errors).length > 0}
          label={isSubmitting ? t('button.isSubmitting') : t('button.register')}
        />

        <LinkContainer>
          <StyledLink onClick={handleRegisterClick}>{t('link.alreadyMemberLogin')}</StyledLink>
        </LinkContainer>
      </Form>
    </Frame>
  )
}
