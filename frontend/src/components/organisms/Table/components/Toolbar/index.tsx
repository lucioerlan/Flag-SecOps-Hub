import { debounce } from 'lodash'
import React from 'react'

import { ActionButton, Text, ButtonGroup, Container, ContentArea, SearchContainer, TitleBar } from './styled'

type ToolbarProps = {
  titleText: string
  searchPlaceholder: string
  buttonText: string
  onCreateNew: () => void
  onSearch: (query: string) => void
}

const Toolbar: React.FC<ToolbarProps> = ({ titleText, searchPlaceholder, buttonText, onCreateNew, onSearch }) => {
  const debouncedOnSearch = debounce(onSearch, 300)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    debouncedOnSearch(value)
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
