import styled from 'styled-components'

export const FooterContainer = styled.div`
  box-sizing: border-box;
  padding: 12px 16px;
  border-top: 1px solid rgb(57, 56, 76);
  position: sticky;
  bottom: 0;
  background-color: rgb(34, 33, 48);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: rgba(32, 32, 33, 0.06) 0 -2px 8px 0;
`

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Text = styled.p`
  margin: 0;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(160, 160, 177);
  font-size: 0.75rem;
`

export const Select = styled.select`
  border: 1px solid rgb(69, 67, 96);
  border-radius: 4px;
  padding: 4px;
  background-color: rgb(34, 33, 48);
  font-size: 0.875rem;
  margin-left: 8px;
  color: rgb(238, 238, 252);

  &:focus {
    border-color: rgb(151, 146, 237);
    box-shadow: 0 0 0 2px rgba(151, 146, 237, 0.2);
  }

  option {
    background: rgb(34, 33, 48);

    &:checked {
      background: rgb(34, 33, 48);
    }
  }
`

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
