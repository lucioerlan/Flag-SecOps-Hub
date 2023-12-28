import { TextArea } from '@/components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'

describe('TextArea component', () => {
  const setup = () => {
    const utils = render(
      <Formik
        initialValues={{
          description: ''
        }}
        onSubmit={() => {}}
      >
        <TextArea name="description" placeholder="Enter description" data-testid="textarea" />
      </Formik>
    )
    const textarea = utils.getByTestId('textarea') as HTMLTextAreaElement

    return {
      textarea,
      ...utils
    }
  }

  it('should render the textarea', () => {
    const { textarea } = setup()
    expect(textarea).toBeInTheDocument()
  })

  it('should allow typing in the textarea', async () => {
    const { textarea } = setup()
    await userEvent.type(textarea, 'Here is a sample description')

    expect(textarea.value).toBe('Here is a sample description')
  })

  it('should have the correct placeholder attribute', () => {
    const { textarea } = setup()
    expect(textarea).toHaveAttribute('placeholder', 'Enter description')
  })
})

describe('TextArea component styling', () => {
  it('should apply custom color when color prop is provided', () => {
    const customColor = '#123456'
    const image = <img src="https://via.placeholder.com/150" alt="placeholder" />

    const utils = render(
      <Formik initialValues={{ description: '' }} onSubmit={() => {}}>
        <TextArea name="description" color={customColor} data-testid="textarea" image={image} />
      </Formik>
    )
    const textarea = utils.getByTestId('textarea')
    expect(textarea).toHaveStyle(`color: ${customColor}`)
    expect(textarea).toHaveStyle(`border: 1px solid ${customColor}`)
  })
})
