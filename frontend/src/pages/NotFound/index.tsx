import { Tab } from '@/components'
import { useI18n } from '@/hooks/useI18n'
import { useNavigate } from 'react-router-dom'

import { NotfoundContainer, Title, Subtitle, BackButton, EmptyImage } from './styled'

const NotFound = () => {
  const t = useI18n()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <Tab title={t('tabs.notFound')} data-testid="not-found">
      <NotfoundContainer as="section">
        <EmptyImage tabIndex={0} alt="Illustration indicating page not found" />
        <Title tabIndex={0}>{t('titles.notFoundPage')}</Title>
        <Subtitle tabIndex={0}>{t('subtitles.notFoundPage')}</Subtitle>
        <BackButton onClick={handleBack}>{t('button.back')}</BackButton>
      </NotfoundContainer>
    </Tab>
  )
}

export default NotFound
