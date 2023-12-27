import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
`

export const ContentArea = styled(Container)`
  padding: 20px 25px;
`

export const TitleBar = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Text = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 16px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 40px;
  padding: 0;
  margin: 0;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`

export const SearchContainer = styled(Container)`
  display: flex;
  align-items: center;
  background-color: rgb(43, 42, 60);
  border: 1px solid rgb(69, 67, 96);
  border-radius: 12px;
  padding: 3px 12px;
  max-width: 400px;
  flex-grow: 1;

  input {
    font: inherit;
    padding: 4px 8px;
    border: none;
    background: none;
    color: inherit;
    width: 100%;
    outline: none;
  }
`

export const ActionButton = styled.button`
  background-color: rgb(76, 73, 146);
  color: rgb(238, 238, 252);
  padding: 6px 16px;
  border: none;
  border-radius: 12px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-left: 8px;
  text-transform: none;

  &:hover {
    background-color: rgb(85, 82, 158);
    transform: scale(1.02);
  }
`
