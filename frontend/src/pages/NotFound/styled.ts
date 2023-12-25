import styled from 'styled-components'

export const NotfoundContainer = styled.div`
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

export const Title = styled.h3`
font-size: 20px;
line-height: 32px;
letter-spacing: .5px;
font-weight: 600;
text-align: center;
color: #434C56;
  @media (min-width: 960px) {
  h3 {
    font-size: 1.417rem;
  }
  @media (min-width: 1280px) {
  h3 {
    font-size: 1.417rem;
  }
`

export const Subtitle = styled.p`
margin-bottom: 32px;
font-size: 15px;
line-height: 24px;
letter-spacing: .25px;
font-weight: 400;
text-align: center;
color: #8C98A6;
  @media (min-width: 960px) {
    p {
    font-size: 1.417rem;
  }
  @media (min-width: 1280px) {
    p {
    font-size: 1.417rem;
  }
  a {
    text-decoration: none;
    color: #1F62AF;
    cursor: pointer;
  }
`
