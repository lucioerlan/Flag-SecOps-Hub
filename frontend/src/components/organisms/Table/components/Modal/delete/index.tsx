import useI18n from '@/hooks/useI18n'
import { deleteFeatureFlagThunk } from '@/store/asyncThunks/deleteFeatureFlagThunk'
import { useAppDispatch } from '@/store/shared'

import { ConfirmationMessage, StyledButton, ButtonContainer } from './styled'

type FeatureFlagDeleteProps = {
  onClose: () => void
  flagId: string
  flagName: string
}

const FeatureFlagDelete: React.FC<FeatureFlagDeleteProps> = ({ onClose, flagId, flagName }: FeatureFlagDeleteProps) => {
  const t = useI18n()
  const dispatch = useAppDispatch()

  const handleDelete = async () => {
    await dispatch(deleteFeatureFlagThunk({ flagId, translate: t }))
    onClose()
  }

  return (
    <>
      <ConfirmationMessage>
        {`${t('modal.delete.description')} `} <strong>{flagName}</strong>
      </ConfirmationMessage>

      <ButtonContainer>
        <StyledButton
          label={t('button.cancel')}
          onClick={onClose}
          type="button"
          aria-label="Button Cancel"
          color="rgb(108, 117, 125)"
          hover="rgb(150, 150, 150)"
        />

        <StyledButton
          label={t('button.delete')}
          onClick={handleDelete}
          type="button"
          aria-label="Button Delete"
          color="rgb(220, 53, 69)"
          hover="rgb(200, 35, 51)"
        />
      </ButtonContainer>
    </>
  )
}

export default FeatureFlagDelete
