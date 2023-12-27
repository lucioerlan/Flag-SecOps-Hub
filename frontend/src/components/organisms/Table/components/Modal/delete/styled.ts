import { Button } from '@/components'
import styled from 'styled-components'

export const ConfirmationMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const StyledButton = styled(Button)`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0 0.5rem;

  &.delete {
    background-color: red;

    &:hover {
      background-color: darkred;
    }
  }

  &.cancel {
    background-color: transparent;
    color: white;
    border: 1px solid white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`
