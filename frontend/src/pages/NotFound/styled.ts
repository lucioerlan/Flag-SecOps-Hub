import { EmptyImage as EmptyIllustration } from '@/assets'
import styled from 'styled-components'

export const NotfoundContainer = styled.div`
  background-color: rgb(26, 25, 36);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 20px;
`

export const Title = styled.h3`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: normal;
  font-weight: 700;
  text-align: center;
  color: rgb(238, 238, 252);
  margin-bottom: 10px;
`

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: normal;
  font-weight: 400;
  text-align: center;
  color: rgb(238, 238, 252);
  margin-bottom: 20px;
`

export const BackButton = styled.button`
  background-color: rgb(76, 73, 146);
  color: rgb(238, 238, 252);
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 15px;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(85, 82, 158);
  }
`

export const EmptyImage = styled.img.attrs({
  src: EmptyIllustration,
  alt: 'Page Not Found'
})`
  width: 50%;
  max-width: 250px;
  height: auto;
  margin-bottom: 15px;
`
