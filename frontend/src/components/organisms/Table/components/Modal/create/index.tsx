import { Input, Button, ErrorMessage, TextArea } from '@/components'
import useFeatureFlagFormInitialValues from '@/constants/featureFlagConstants'
import { useI18n } from '@/hooks/useI18n'
import { createFeatureFlagThunk } from '@/store/asyncThunks/createFeatureFlagThunk'
import { useAppDispatch } from '@/store/shared'
import { FeatureFlag } from '@/types'
import { FeatureFlagSchema } from '@/validators'
import { Formik, Form, FormikHelpers } from 'formik'
import React from 'react'

import { ButtonContainer, ToggleLabel, StyledToggle } from './styled'

type FeatureFlagCreateProps = {
  onClose: () => void
  onFlagCreated: (flag: FeatureFlag) => void
}
type FormValues = {
  name: string
  description: string
  state: boolean
}

const FeatureFlagCreate: React.FC<FeatureFlagCreateProps> = ({ onClose }: FeatureFlagCreateProps) => {
  const t = useI18n()
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    await dispatch(createFeatureFlagThunk({ ...values, translate: t }))
    resetForm()
    onClose()
  }

  return (
    <Formik
      initialValues={useFeatureFlagFormInitialValues()}
      onSubmit={handleSubmit}
      validationSchema={FeatureFlagSchema()}
    >
      {({ values, setFieldValue, errors, touched, isSubmitting }) => (
        <Form>
          <Input
            color="#fff"
            name="name"
            placeholder={t('input.nameFeatureFlag')}
            className={`form-control ${touched.name && errors.name ? '-invalid' : ''}`}
          />
          <ErrorMessage component="div" name="name" className="error-form" />

          <TextArea
            color="#fff"
            name="description"
            placeholder={t('input.descriptionFeatureFlag')}
            className={`form-control ${touched.description && errors.description ? '-invalid' : ''}`}
            value={values.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFieldValue('description', e.target.value)}
          />
          <ErrorMessage component="div" name="description" className="error-form" />

          <StyledToggle>
            <input
              type="checkbox"
              id="stateToggle"
              name="state"
              checked={values.state}
              onChange={() => setFieldValue('state', !values.state)}
            />
            <span onClick={() => setFieldValue('state', !values.state)}></span>
          </StyledToggle>

          <ToggleLabel htmlFor="stateToggle">
            {values.state ? t('labels.stateFeatureFlagOn') : t('labels.stateFeatureFlagOff')}
          </ToggleLabel>

          <ButtonContainer>
            <Button
              aria-label="create button"
              type="submit"
              color="#fff"
              hover="rgb(235, 233, 233)"
              disabled={
                isSubmitting || !!(errors.name && touched.name) || !!(errors.description && touched.description)
              }
              label={isSubmitting ? t('button.isSubmitting') : t('button.create')}
            />
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  )
}

export default FeatureFlagCreate
