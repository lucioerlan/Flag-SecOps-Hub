import { useNavigate } from 'react-router-dom'

import { ChipWrapper } from './styled'

export type ChipProps = {
  link: string
  label: string
  'data-testid'?: string
}

export const Chip = ({ link, label }: ChipProps) => {
  const navigate = useNavigate()

  return <ChipWrapper onClick={() => navigate(link, { replace: true })}>{label}</ChipWrapper>
}

export default Chip
