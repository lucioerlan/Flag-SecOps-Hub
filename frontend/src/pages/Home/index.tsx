import { Tab, Card, Table } from '@/components'
import useCardsFeatureFlags from '@/hooks/useCardsFeatureFlags'
import { useI18n } from '@/hooks/useI18n'
import { useTableManager } from '@/hooks/useTableManager'

import { HomeLayout, AppLayout, VerticalStack } from './styled'

const Home = () => {
  const t = useI18n()
  const cardData = useCardsFeatureFlags()
  const tableData = useTableManager()

  return (
    <Tab title={t('tabs.home')} data-testid="home">
      <HomeLayout as="main">
        <AppLayout>
          <VerticalStack>
            <Card cardData={cardData} />
            <Table tableData={tableData} />
          </VerticalStack>
        </AppLayout>
      </HomeLayout>
    </Tab>
  )
}

export default Home
