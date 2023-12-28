import React, { useState, useEffect } from 'react'

import { ActionButton, Text, ButtonGroup, Container, ContentArea, SearchContainer, TitleBar } from './styled'

type ToolbarProps = {
  titleText: string
  searchPlaceholder: string
  buttonText: string
  onCreateNew: () => void
  onSearch: (query: string) => void
}

const Toolbar: React.FC<ToolbarProps> = ({ titleText, searchPlaceholder, buttonText, onCreateNew, onSearch }) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(inputValue)
    }, 500)

    return () => clearTimeout(timerId)
  }, [inputValue, onSearch])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <Container as="section" aria-labelledby="feature-flags-section">
      <ContentArea>
        <TitleBar>
          <Text>{titleText}</Text>
          <ButtonGroup>
            <SearchContainer>
              <input
                type="text"
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                onChange={handleInputChange}
              />
            </SearchContainer>
            <ActionButton onClick={onCreateNew}>{buttonText}</ActionButton>
          </ButtonGroup>
        </TitleBar>
      </ContentArea>
    </Container>
  )
}

export default Toolbar
