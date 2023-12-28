import { Frame } from '@/components'
import { render } from '@testing-library/react'

describe('Block component', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = render(<Frame style={{ backgroundColor: '#cecece' }} />).container
  })

  it('renders with a background color', () => {
    const blockElement = container.firstChild
    expect(blockElement).toHaveStyle('background-color: #cecece')
  })

  it('renders with a default height', () => {
    const blockElement = container.firstChild
    expect(blockElement).toHaveStyle('height: 100vh')
  })
})
