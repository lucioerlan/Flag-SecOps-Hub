import { Button, ErrorMessage } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik, Form, Field, FormikValues } from 'formik'

describe('ErrorMessage component', () => {
  const mockSubmit = jest.fn()
  const initialValues = {
    email: ''
  }

  const validate = (values: FormikValues) => {
    const errors = {
      email: ''
    }

    if (!values.email) {
      errors.email = 'Required'
    }
    return errors
  }

  beforeEach(() => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockSubmit} validate={validate}>
        {() => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Button type="submit" label="Submit" onClick={() => {}} />
          </Form>
        )}
      </Formik>
    )
  })

  it('should display error message when there is an error', async () => {
    const submitButton = screen.getByRole('button', { name: /submit/i })
    userEvent.click(submitButton)

    const errorMessage = await screen.findByText('Required')
    expect(errorMessage).toBeInTheDocument()
  })
})
