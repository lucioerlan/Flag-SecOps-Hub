import React from 'react'

import { FooterContainer, FooterInner, PaginationControls, Select, Text } from './styled'

type FooterProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
  text: {
    itemsDisplayed: string
    page: string
  }
}

const PaginationSelect: React.FC<{ totalPages: number; currentPage: number; onPageChange: (page: number) => void }> = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  return (
    <Select value={currentPage} onChange={(e) => onPageChange(Number(e.target.value))}>
      {Array.from({ length: totalPages }, (_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </Select>
  )
}

const Footer: React.FC<FooterProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange, text }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <FooterContainer as="footer" aria-label="Table Footer">
      <FooterInner>
        <Text tabIndex={0}>
          {text.itemsDisplayed} {startItem} to {endItem} of {totalItems}
        </Text>
        <PaginationControls>
          <Text tabIndex={0}>
            {text.page} {currentPage} of {totalPages}
          </Text>
          {totalPages > 1 && (
            <PaginationSelect totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
          )}
        </PaginationControls>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer
