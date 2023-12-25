import Tab from '@/components/molecules/Tab'
import { render, screen } from '@testing-library/react'

describe('Tab component', () => {
  beforeEach(() => {
    render(
      <Tab data-testid="tab" title="Tab">
        <div data-testid="tab-children">Tab children</div>
      </Tab>
    )
  })

  it('Should render tab', () => {
    const tabElement = screen.getByTestId('tab')
    expect(tabElement).toBeInTheDocument()
  })

  it('Should render tab children', () => {
    const tabChildrenElement = screen.getByText('Tab children')
    expect(tabChildrenElement).toBeInTheDocument()
  })
})
