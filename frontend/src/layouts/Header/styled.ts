import { Exit, FlagSecopsHubLogo } from '@/assets'
import styled, { css } from 'styled-components'

const commonFlexBox = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const StyledHeader = styled.header`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px;
  ${commonFlexBox}
  flex-direction: column;
  width: 100%;
  color: rgb(238, 238, 252);
  background-color: rgb(34, 33, 48);
  box-shadow: none;
  position: relative;
  z-index: 300;
  min-height: 60px;
  top: 0;
`

export const InnerDiv = styled.div`
  ${commonFlexBox}
  width: 100%;
  margin: auto;
  padding: 0px 16px 0px 16px;
`

export const StyledNav = styled.nav`
  ${commonFlexBox}
  flex-grow: 1;
`

export const NavInnerDiv = styled.div`
  ${commonFlexBox}
  margin-left: auto;
`

export const Logo = styled.img.attrs({
  src: FlagSecopsHubLogo,
  alt: 'Logo SecOps Hub'
})`
  width: 50px;
  height: 50px;
  srcset: {
    2x: {
      width: 60px;
      height: 60px;
    }
    3x: {
      width: 70px;
      height: 70px;
    }
  }
`

export const StyledExitButton = styled.img.attrs({
  src: Exit,
  alt: 'Icon Exit'
})`
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ExitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    color: rgb(255, 255, 255);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`
