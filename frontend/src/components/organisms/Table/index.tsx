import { Modal, Toast } from '@/components'
import useFeatureFlags from '@/hooks/useFeatureFlags'
import { useI18n } from '@/hooks/useI18n'
import { TableData } from '@/types/feature-flags'
import React, { useState } from 'react'

import Body from './components/Body'
import Footer from './components/Footer'
import FeatureFlagCreate from './components/Modal/create'
import FeatureFlagDelete from './components/Modal/delete'
import FeatureFlagEdit from './components/Modal/edit'
import Toolbar from './components/Toolbar'
import { ShadowBox } from './styled'

export default function Table({ tableData }: { tableData: TableData }) {
  const t = useI18n()
  const { refetchFeatureFlags } = useFeatureFlags()
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)

  const { data, columns, handleSearch, currentPage, setCurrentPage, totalItems } = tableData

  const handleCloseModal = () => {
    setModalContent(null)
    refetchFeatureFlags()
  }

  const handleFlagCreate = () => {
    setModalContent(
      <FeatureFlagCreate
        onClose={handleCloseModal}
        onFlagCreated={() => {
          handleCloseModal()
        }}
      />
    )
  }

  const handleFlagDelete = (flagId: string, flagName: string) => {
    setModalContent(
      <FeatureFlagDelete
        onClose={handleCloseModal}
        flagId={flagId}
        flagName={flagName}
        onFlagDeleted={() => {
          handleCloseModal()
        }}
      />
    )
  }

  const handleFlagEdit = (flag: TableData['data'][0]) => {
    setModalContent(
      <FeatureFlagEdit
        onClose={handleCloseModal}
        flag={flag}
        onFlagEdited={() => {
          handleCloseModal()
        }}
      />
    )
  }

  return (
    <ShadowBox as="section" aria-labelledby="feature-flags-section">
      <Toolbar
        titleText={t('table.toolbar.titleManageFeatureFlags')}
        buttonText={t('table.toolbar.createNewFeatureFlag')}
        searchPlaceholder={t('table.toolbar.searchFeatureFlags')}
        onCreateNew={handleFlagCreate}
        onSearch={handleSearch}
      />

      <Body columns={columns} data={data} onEdit={handleFlagEdit} onDelete={handleFlagDelete} />

      <Footer
        totalItems={totalItems}
        itemsPerPage={25}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        text={{
          itemsDisplayed: t('table.footer.page'),
          page: t('table.footer.displaying')
        }}
      />

      {modalContent && (
        <Modal isOpen={!!modalContent} onClose={handleCloseModal}>
          {modalContent}
        </Modal>
      )}

      <Toast />
    </ShadowBox>
  )
}
