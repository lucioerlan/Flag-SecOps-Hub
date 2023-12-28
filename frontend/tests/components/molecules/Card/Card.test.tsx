import { Card } from '@/components'
import { render, screen } from '@testing-library/react'

describe('Card component', () => {
  const cardData = [{ title: 'Card Title 1', value: 'Value 1', description: 'Description 1' }]

  beforeEach(() => {
    render(<Card cardData={cardData} />)
  })

  it('Should render all cards', () => {
    const cardElements = screen.getAllByRole('listitem')
    expect(cardElements).toHaveLength(cardData.length)
  })

  it('Should display the correct title for the first card', () => {
    const titleElement = screen.getByText(cardData[0].title)
    expect(titleElement).toBeInTheDocument()
  })

  it('Should display the correct value for the first card', () => {
    const valueElement = screen.getByText(cardData[0].value)
    expect(valueElement).toBeInTheDocument()
  })
})
