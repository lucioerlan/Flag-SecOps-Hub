import React from 'react'

import { ButtonWrapper } from './styled'

export type ImageButtonProps = {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  color: string
  onClick: () => void
  Outline?: boolean
  IconRight?: boolean
}

const ImageButton = ({ Icon, ...props }: ImageButtonProps) => (
  <ButtonWrapper {...props}>
    {Icon && <Icon />}
    {props.label}
  </ButtonWrapper>
)

export default ImageButton
