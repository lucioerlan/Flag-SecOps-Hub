import { LogoWrapper } from './styled'

export type LogoProps = {
  src: string
  alt: string
  'data-testid'?: string
}

const Logo = ({ ...props }: LogoProps) => <LogoWrapper {...props} />

export default Logo
