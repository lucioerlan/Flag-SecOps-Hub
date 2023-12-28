import { TextArea } from '../../../../src/components/atoms/TextArea'

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Primary = {
  args: {
    placeholder: 'Placeholder',
    name: 'name',
    onChange: () => {},
    rows: 4,
    cols: 50,
    maxLength: 100,
    minLength: 10
  }
}
