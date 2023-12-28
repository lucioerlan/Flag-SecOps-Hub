import { LogoWrapper } from './styled'

type LogoProps = {
  src: string
  alt: string
  'data-testid'?: string
}

export const Logo = ({ ...props }: LogoProps) => <LogoWrapper {...props} />

export default Logo
