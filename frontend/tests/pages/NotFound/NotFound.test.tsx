import NotFound from '@/pages/NotFound'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('NotFoundView', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>
    )
  })

  it('should render NotFoundView', () => {
    expect(screen.getByTestId('not-found')).toBeInTheDocument()
  })

  it('should render NotFoundView title', () => {
    expect(screen.getByText('titles.notFoundPage')).toBeInTheDocument()
  })

  it('should navigate back when back button is clicked', async () => {
    const backButton = screen.getByText('button.back')
    await userEvent.click(backButton)

    expect(window.location.pathname).toBe('/')
  })
})
