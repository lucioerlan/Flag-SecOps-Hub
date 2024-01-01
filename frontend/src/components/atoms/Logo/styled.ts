import styled from 'styled-components'

export const LogoWrapper = styled.img`
  width: 20%;
  margin: 0 0 20px 0;
  @media (max-width: 568px) {
    width: 30%;
  }
  @media (max-width: 1268px) {
    width: 35%;
  }
  @media (max-width: 1368px) {
    width: 30%;
  }
  @media (max-width: 1658px) {
    width: 35%;
  }
  srcset: {
    2x: {
      width: 40%;
    }
    3x: {
      width: 50%;
    }
  }
`
