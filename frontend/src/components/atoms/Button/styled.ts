import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  padding: 12px 38px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border: 1px solid ${({ color }) => (color ? color : '#24292F')};
  border-radius: 12px;
  color: ${({ color }) => (color ? color : '#24292F')};
  background: rgba(255, 255, 255, 0);
  outline: 0;
  cursor: pointer;
  font-family: 'Sen', 'Roboto', sans-serif;
  margin: 45px auto 31px;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;

  &:hover {
    background: none;
    border: none;
    border: solid 2px ${({ color }) => (color ? color : '#24292F')};
    color: ${({ color }) => (color ? color : '#24292F')};
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
`
