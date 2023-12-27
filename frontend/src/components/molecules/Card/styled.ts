import styled from 'styled-components'

export const CardContainer = styled.div`
  padding-top: 80px;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  flex-wrap: wrap;
`

export const CardBox = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
  background-color: rgb(34, 33, 48);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px;
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const CardTitle = styled.p`
  margin: 0px 0px 20px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const CardText = styled.p`
  margin: 5px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(160, 160, 177);
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const CardValue = styled.div`
  color: #747487;
  font-size: 2.2rem;
  font-weight: 600;
  margin-right: 10px;
`
