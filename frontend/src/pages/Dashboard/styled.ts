import styled, { keyframes } from 'styled-components'

export const DashboardContainer = styled.div`
  background-color: #f4f6f8;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`

const rotate = keyframes`
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0px);
  }
`

export const Title = styled.h4`
  animation: ${rotate} 2s;
  color: #434C56;
  font-size: 1.11875rem;
  font-weight: 300;
  line-height: 1.235;
  letter-spacing: -0.06px;
  @media (min-width: 960px) {
  h4 {
    font-size: 1.417rem;
  }
  @media (min-width: 1280px) {
  h4 {
    font-size: 1.417rem;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`
