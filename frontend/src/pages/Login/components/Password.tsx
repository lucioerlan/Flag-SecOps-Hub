import { EyeOff, EyeOn } from '@/assets'

import { PasswordView } from '../styled'

type PasswordProps = {
  showPassword: boolean
  handleClickPassword: () => void
}

export const Password = ({ showPassword, handleClickPassword }: PasswordProps) => (
  <PasswordView style={{ width: 0 }} aria-label="toggle password vibility" onClick={handleClickPassword}>
    {showPassword ? (
      <img src={EyeOff} alt="ico eye off" className="togglePasswordLogin" />
    ) : (
      <img src={EyeOn} alt="ico eye vible" className="togglePasswordLogin" />
    )}
  </PasswordView>
)
