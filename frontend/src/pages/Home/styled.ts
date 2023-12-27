import styled from 'styled-components'

export const HomeLayout = styled.div`
  background-color: rgb(26, 25, 36);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  padding-top: max(10vh, 100px)

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-top: 80px;
`

export const AppLayout = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin: 0 auto;
  }
`

export const VerticalStack = styled.div`
  box-sizing: border-box;
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`

export const ShadowBox = styled.div`
  box-sizing: border-box;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 12px;
  background-color: rgb(34, 33, 48);
  color: rgb(238, 238, 252);
  box-shadow: none;
  cursor: inherit;
`
