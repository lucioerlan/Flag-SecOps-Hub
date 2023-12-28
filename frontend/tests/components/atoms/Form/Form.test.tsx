import { Button, Form, ErrorMessage } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field, Formik, FormikValues } from 'formik'

describe('Form component', () => {
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
          <Form className="your-custom-class" data-testid="form-component">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Button type="submit" label="Submit" onClick={() => {}} />
          </Form>
        )}
      </Formik>
    )
  })

  it('should render the form', () => {
    const formElement = screen.getByTestId('form-component')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveClass('your-custom-class')
  })

  it('should render the submit button', () => {
    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
    expect(submitButton).toHaveTextContent('Submit')
  })

  it('should render an error message when submitting with empty email', async () => {
    const submitButton = screen.getByRole('button', { name: /submit/i })
    userEvent.click(submitButton)

    const errorMessage = await screen.findByText('Required')
    expect(errorMessage).toBeInTheDocument()
  })
})
