import React from 'react'
import { Input } from '../../../../src/components/atoms/Input'
import { Formik, Form, Field } from 'formik'

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Primary = (args) => (
  <Formik initialValues={{ name: '' }} onSubmit={(values) => console.log(values)}>
    <Form>
      <Field as={Input} {...args} />
    </Form>
  </Formik>
)

Primary.args = {
  placeholder: 'Placeholder',
  name: 'name',
  image: 'https://via.placeholder.com/150',
  color: '#000',
  type: ['text', 'email', 'password'],
  className: 'form-control'
}
