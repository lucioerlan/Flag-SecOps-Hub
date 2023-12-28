import { Chip } from '@/components'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

describe('Chip component', () => {
  const label = 'Back'
  const link = '/home'

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Root</div>} />
          <Route path={link.substring(1)} element={<div>Home Page</div>} />
        </Routes>
        <Chip link={link} label={label} />
      </BrowserRouter>
    )
  })

  it('should render Chip label', () => {
    const chipElement = screen.getByText(label)
    expect(chipElement).toBeInTheDocument()
  })

  it('should navigate to the correct page', async () => {
    const chipElement = screen.getByText(label)
    await userEvent.click(chipElement)
    const homePage = screen.getByText('Home Page')
    expect(homePage).toBeInTheDocument()
  })
})
