import { CardBox, CardContainer, CardContent, CardText, CardTitle, CardValue } from './styled'

export type CardData = {
  title: string
  value: string | number
  description: string
}

export const Card = ({ cardData }: { cardData: CardData[] }) => {
  return (
    <CardContainer role="list" aria-label="Card" data-testid="card">
      {cardData.map((card, index) => (
        <CardBox key={index} role="listitem">
          <CardTitle tabIndex={0}>{card.title}</CardTitle>
          <CardContent>
            <CardValue tabIndex={0}>{card.value}</CardValue>
            <CardText tabIndex={0}>{card.description}</CardText>
          </CardContent>
        </CardBox>
      ))}
    </CardContainer>
  )
}

export default Card
