import { Tab } from '@/components'
import { render, screen } from '@testing-library/react'

describe('Tab component', () => {
  const title = 'Tab'
  const childrenContent = 'Tab children'

  beforeEach(() => {
    render(
      <Tab data-testid="tab" title={title}>
        <div data-testid="tab-children">{childrenContent}</div>
      </Tab>
    )
  })

  it('Should render tab', () => {
    const tabElement = screen.getByTestId('tab')
    expect(tabElement).toBeInTheDocument()
  })

  it('Should render tab children', () => {
    const tabChildrenElement = screen.getByText(childrenContent)
    expect(tabChildrenElement).toBeInTheDocument()
  })
})
