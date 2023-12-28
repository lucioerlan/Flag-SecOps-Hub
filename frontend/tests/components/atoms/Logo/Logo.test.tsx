import { Logo } from '@/components'
import { render, screen } from '@testing-library/react'

describe('Logo component', () => {
  const logoSrc = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  const logoAlt = 'Logo'

  beforeEach(() => {
    render(<Logo alt={logoAlt} data-testid="logo" src={logoSrc} />)
  })

  it('should render the logo', () => {
    const logoElement = screen.getByRole('img', { name: logoAlt })
    expect(logoElement).toBeInTheDocument()
  })

  it('should render the logo with correct src', () => {
    const logoElement = screen.getByRole('img', { name: logoAlt })
    expect(logoElement).toHaveAttribute('src', logoSrc)
  })

  it('should render the logo with correct alt text', () => {
    const logoElement = screen.getByRole('img', { name: logoAlt })
    expect(logoElement).toHaveAttribute('alt', logoAlt)
  })
})
