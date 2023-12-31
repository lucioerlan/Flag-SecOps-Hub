import styled, { keyframes } from 'styled-components'

const getColorOrDefault = (color: string | undefined, defaultColor = '#24292F') => {
  return color || defaultColor
}

const Spinner = keyframes`
 from {
   transform: rotate(0deg);
 }
 to {
   transform: rotate(360deg);
 }
`

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid ${(props) => getColorOrDefault(props.color)};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${Spinner} 2000ms infinite linear;
`
