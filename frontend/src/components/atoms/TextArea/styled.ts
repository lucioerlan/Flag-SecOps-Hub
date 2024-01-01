import { Field } from 'formik'
import styled from 'styled-components'

const getColorOrDefault = (color: string | undefined, defaultColor = '#24292F') => {
  return color || defaultColor
}

export const TextAreaField = styled(Field).attrs({ as: 'textarea' })`
  width: 88%;
  padding: 15px 0 15px 42px;
  min-height: 120px;
  border: 1px solid ${(props) => getColorOrDefault(props.color)};
  border-radius: 12px;
  outline: 0;
  font-size: 14px;
  color: ${(props) => getColorOrDefault(props.color)};
  margin: 14px 0;
  font-family: 'Sen', 'Roboto', sans-serif;
  background: url(${({ image }) => (image ? image : null)}) no-repeat 10px 11px;
  background-size: 24px;

  &:hover {
    border: none;
    border: solid 1px rgb(235, 233, 233);
    color: ${(props) => getColorOrDefault(props.color)};
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }

  ::placeholder {
    color: ${(props) => getColorOrDefault(props.color)};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${(props) => getColorOrDefault(props.color)};
  }

  ::-ms-input-placeholder {
    color: ${(props) => getColorOrDefault(props.color)};
  }
`
