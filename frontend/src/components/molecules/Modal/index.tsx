import { useI18n } from '@/hooks/useI18n'
import { ReactNode } from 'react'

import { CloseButton, ModalContent, ModalHeader, ModalOverlay, Tooltip } from './styled'

type ModalMode = 'create' | 'edit' | 'delete'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  mode?: ModalMode
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const t = useI18n()
  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose} data-testid="modal-overlay">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Tooltip title={t('tooltip.modal.close')}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </Tooltip>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
