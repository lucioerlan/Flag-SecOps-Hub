import styled from 'styled-components'

const getColorOrDefault = (props: { color?: string }, defaultColor = '#24292F') => {
  return props.color || defaultColor
}

export const ButtonWrapper = styled.button`
  padding: 12px 38px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border: 1px solid ${(props) => getColorOrDefault(props)};
  border-radius: 12px;
  color: ${(props) => getColorOrDefault(props)};
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
    border: solid 2px ${(props) => getColorOrDefault(props)};
    color: ${(props) => getColorOrDefault(props)};
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
`
