import Logo from '@/components/atoms/Logo'
import { render, screen } from '@testing-library/react'

describe('Logo component', () => {
  beforeEach(() => {
    render(
      <Logo
        alt="Logo"
        data-testid="logo"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
    )
  })

  it('Should render logo', () => {
    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('Should render logo with correct src', () => {
    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toHaveAttribute(
      'src',
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    )
  })

  it('Should render logo with correct alt', () => {
    const logoElement = screen.getByTestId('logo')
    expect(logoElement).toHaveAttribute('alt', 'Logo')
  })
})
