import Input from '@/components/atoms/Input'
import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { Formik } from 'formik'

describe('Input component', () => {
  beforeEach(() => {
    render(
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={() => {}}
      >
        <Input color="#fff" type="email" name="email" placeholder="Email" data-testid="input" />
      </Formik>
    )
  })

  it('should render the input', () => {
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
  })

  it('should render the input with the correct value', async () => {
    const input = screen.getByTestId('input')
    await UserEvent.type(input, 'admin@user.com')

    expect(input).toHaveValue('admin@user.com')
  })

  it('should render the input with the correct type', () => {
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('type', 'email')
  })
})
