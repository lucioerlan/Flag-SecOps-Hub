import { Input } from '@/components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'

describe('Input component', () => {
  const setup = () => {
    const utils = render(
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={() => {}}
      >
        <Input type="email" name="email" placeholder="Email" data-testid="input" />
      </Formik>
    )
    const input = utils.getByTestId('input') as HTMLInputElement

    return {
      input,
      ...utils
    }
  }

  it('should render the input', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })

  it('should allow typing in the input', async () => {
    const { input } = setup()
    await userEvent.type(input, 'admin@user.com')

    expect(input.value).toBe('admin@user.com')
  })

  it('should have the correct type attribute', () => {
    const { input } = setup()
    expect(input).toHaveAttribute('type', 'email')
  })
})

describe('Input component styling', () => {
  it('should apply custom color when color prop is provided', () => {
    const customColor = '#123456'
    const image = <img src="https://via.placeholder.com/150" alt="placeholder" />

    const utils = render(
      <Formik initialValues={{ description: '' }} onSubmit={() => {}}>
        <Input name="description" color={customColor} data-testid="input" image={image} />
      </Formik>
    )
    const input = utils.getByTestId('input')
    expect(input).toHaveStyle(`color: ${customColor}`)
    expect(input).toHaveStyle(`border: 1px solid ${customColor}`)
  })
})
