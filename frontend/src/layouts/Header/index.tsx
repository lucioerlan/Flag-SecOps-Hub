import useSettings from '@/hooks/useSettings'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { LogoutContainer, BackContainer } from './styled'

const Header = () => {
  const { setSettings } = useSettings()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleBack = () => {
    navigate('/app/dashboard')
  }

  const handleLogout = () => {
    setSettings({
      token: '',
      email: '',
      isLoggedIn: false
    })
    navigate('/login')
  }

  return (
    <>
      <LogoutContainer onClick={handleLogout}></LogoutContainer>

      {pathname !== '/app/dashboard' && <BackContainer onClick={handleBack} />}
    </>
  )
}

export default Header
