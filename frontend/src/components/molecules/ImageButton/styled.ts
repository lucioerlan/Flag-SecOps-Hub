import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  margin-left: 10px;
  margin-top: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  cursor: pointer;

  & > svg {
    width: 15.2px;
    display: none;
  }

  &:hover,
  &:focus {
    filter: brightness(0.8);
  }

  ${() => css`
    color: '#24292F';
    background-color: #fff;
    &:hover,
    &:focus {
      filter: none;
      border: 1px solid #24292F};
    }
  `}

  ${() => css`
    & svg {
      display: inherit;
      margin-right: 8px;
    }
  `}
`
