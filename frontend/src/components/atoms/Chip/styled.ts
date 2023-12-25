import styled, { css } from 'styled-components'

export const ChipWrapper = styled.button`
  top: 5px;
  left: 30px;
  cursor: pointer;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  margin-left: 10px;
  margin-top: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 20px;
  text-align: center;
  background-color: #e0e0e0;

  & > svg {
    width: 15.2px;
    display: none;
  }

  &:hover,
  &:focus {
    filter: brightness(0.8);
  }

  ${() => css`
    color: #24292f;
    background-color: #fff;
    border: 1px solid #24292f;
    &:hover,
    &:focus {
      filter: none;
      border: 1px solid #24292f;
    }
  `}

  ${() => css`
    & svg {
      display: inherit;
      margin-right: 8px;
    }
  `}
`
