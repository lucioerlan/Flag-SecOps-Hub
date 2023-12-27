import { LogoWrapper } from './styled'

type LogoProps = {
  src: string
  alt: string
  'data-testid'?: string
}

const Logo = ({ ...props }: LogoProps) => <LogoWrapper {...props} />

export default Logo
