import React from 'react'
import { StoryFn } from '@storybook/react'
import { Chip, ChipProps } from '../../../../src/components/atoms/Chip'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/Atoms/Chip',
  component: Chip,
  decorators: [
    (Story: StoryFn) => (
      <Router>
        <Story />
      </Router>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Primary = (args: ChipProps) => <Chip {...args} />
Primary.args = {
  label: 'Chip',
  link: '/'
}
