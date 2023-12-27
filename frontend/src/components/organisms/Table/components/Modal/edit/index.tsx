import { Input, Button, ErrorMessage, TextArea } from '@/components'
import { useI18n } from '@/hooks/useI18n'
import { editFeatureFlagThunk } from '@/store/asyncThunks/editFeatureFlagThunk'
import { useAppDispatch } from '@/store/shared'
import { FeatureFlag } from '@/types/feature-flags'
import { FeatureFlagSchema } from '@/validators/schemas'
import { Formik, Form, FormikHelpers } from 'formik'
import React from 'react'

import { ButtonContainer, ToggleLabel, StyledToggle } from './styled'

type FeatureFlagEditProps = {
  onClose: () => void
  onFlagEdited: (flag: FeatureFlag) => void
  flag: FeatureFlag
}
type FormValues = {
  id: string
  name: string
  description: string
  state: boolean
}

const FeatureFlagEdit: React.FC<FeatureFlagEditProps> = ({ onClose, flag }: FeatureFlagEditProps) => {
  const t = useI18n()
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    await dispatch(editFeatureFlagThunk({ ...values, translate: t }))
    resetForm()
    onClose()
  }

  const initialValues = {
    id: flag?.id,
    name: flag?.name,
    description: flag?.description,
    state: flag?.state
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeatureFlagSchema()}>
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

          <ToggleLabel htmlFor="stateToggle" tabIndex={0}>
            {values.state ? t('labels.stateFeatureFlagOn') : t('labels.stateFeatureFlagOff')}
          </ToggleLabel>

          <ButtonContainer>
            <Button
              aria-label="edit button"
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

export default FeatureFlagEdit
