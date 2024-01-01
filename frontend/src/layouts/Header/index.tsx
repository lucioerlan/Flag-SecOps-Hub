import useI18n from '@/hooks/useI18n'
import useSettings from '@/hooks/useSettings'
import { useNavigate } from 'react-router-dom'

import { ExitButton, InnerDiv, Logo, NavInnerDiv, StyledExitButton, StyledHeader, StyledNav, Tooltip } from './styled'

const Header = () => {
  const t = useI18n()
  const { setSettings } = useSettings()
  const navigate = useNavigate()

  const handleLogout = () => {
    setSettings({
      accessToken: '',
      isLoggedIn: false
    })
    navigate('/login')
  }

  return (
    <StyledHeader>
      <InnerDiv>
        <Logo />
        <StyledNav aria-label="Header navigation">
          <NavInnerDiv>
            <Tooltip title={t('tooltip.logout')}>
              <ExitButton aria-label={t('header.logout')} onClick={handleLogout}>
                <StyledExitButton aria-hidden="true" />
              </ExitButton>
            </Tooltip>
          </NavInnerDiv>
        </StyledNav>
      </InnerDiv>
    </StyledHeader>
  )
}

export default Header
