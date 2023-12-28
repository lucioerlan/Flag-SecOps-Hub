import { Button } from '../../../../src/components/atoms/Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Primary = {
  args: {
    label: 'Button',
    type: ['button', 'submit', 'reset'],
    disabled: false,
    color: '#000',
    hover: '#fff',
    onClick: () => {}
  }
}
