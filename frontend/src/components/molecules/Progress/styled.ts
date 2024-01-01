import styled from 'styled-components'

export const ProgressOverlay = styled.div<{
  bgcolor: string
}>`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgcolor};
  z-index: 1000;
`

export const ProgressBar = styled.div<{
  width: number
  barcolor: string
}>`
  height: 5px;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.barcolor};
  transition: width 0.2s;
`
