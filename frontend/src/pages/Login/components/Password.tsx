import { EyeOff, EyeOn } from '@/assets'

import { PasswordView } from '../styled'

type PasswordProps = {
  showPassword: boolean
  handleClickPassword: () => void
}

export const Password = ({ showPassword, handleClickPassword }: PasswordProps) => (
  <PasswordView style={{ width: 0 }} aria-label="Show password" onClick={handleClickPassword}>
    {showPassword ? (
      <img src={EyeOff} alt="Hide password" className="togglePasswordLogin" />
    ) : (
      <img src={EyeOn} alt="Show password" className="togglePasswordLogin" />
    )}
  </PasswordView>
)
