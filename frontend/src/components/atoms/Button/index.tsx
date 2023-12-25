import { ButtonWrapper } from './styled'

export type ButtonProps = {
  color?: string
  disabled?: boolean
  label: string
  type: 'button' | 'submit' | 'reset'
  hover?: string
  Submitting?: boolean
  onClick?: () => void
  'data-testid'?: string
}

export const Button = ({ ...props }: ButtonProps) => <ButtonWrapper {...props}>{props.label}</ButtonWrapper>

export default Button
