import { Tab, VisitorTime } from '@/components'
import useSettings from '@/hooks/useSettings'
import { useTranslation } from 'react-i18next'

import { DashboardContainer, Title } from './styled'

const Dashboard = () => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const user = settings?.email

  return (
    <Tab title={t('tabs.dashboard')} data-testid="dashboard">
      <DashboardContainer>
        <Title>{VisitorTime(user)}</Title>
      </DashboardContainer>
    </Tab>
  )
}

export default Dashboard
