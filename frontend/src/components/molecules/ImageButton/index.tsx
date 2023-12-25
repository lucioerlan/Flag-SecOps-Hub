import { ButtonWrapper } from './styled'

type Props = {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  color: string
  onClick: () => void
  Outline?: boolean
  IconRight?: boolean
}

const ImageButton = ({ Icon, ...props }: Props) => (
  <ButtonWrapper Outline IconRight {...props}>
    {Icon && <Icon />}
    {props.label}
  </ButtonWrapper>
)

export default ImageButton
