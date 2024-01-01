import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ModalContent = styled.div`
  background-color: rgb(34, 33, 48);
  color: rgb(238, 238, 252);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 450px;
  width: auto;
  overflow: hidden;
  text-align: center;

  @media (max-width: 450px) {
    max-width: 100%;
    width: 100%;
    margin: 0 20px;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-bottom: 16px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(238, 238, 252);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  padding: 0.5rem;
  margin: -0.5rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: rgb(50, 49, 68);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(151, 146, 237, 0.5);
  }
`

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    color: rgb(255, 255, 255);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`
