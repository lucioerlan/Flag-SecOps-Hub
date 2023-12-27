import { Edit, Trash } from '@/assets'
import styled from 'styled-components'

export const BodyContainer = styled.div`
  max-height: 400px;
  overflow: auto;
`

export const CellBaseStyles = `
  box-sizing: border-box;
  padding: 16px;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-size: 0.840rem;
  line-height: 1.5rem;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  color: rgb(238, 238, 252);
  border-bottom: 1px solid rgb(50, 49, 68);
  background-color: rgb(43, 42, 60);
  font-weight: normal;
`

export const StyledBody = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  display: table;
  overflow: hidden;
  border-radius: 12px;
  background-color: rgb(34, 33, 48);
  margin-bottom: 16px;
`

export const StyledTh = styled.th`
  ${CellBaseStyles}
  font-weight: 600;
`

export const StyledTd = styled.td`
  ${CellBaseStyles}
`

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 11px;

    &:before {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: rgb(151, 146, 237);
  }

  input:focus + span {
    box-shadow: 0 0 1px rgb(151, 146, 237);
  }

  input:checked + span:before {
    transform: translateX(18px);
  }
`

export const StyledActionsTd = styled.td`
  ${CellBaseStyles}
  svg {
    margin: 0 4px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Icon = styled.img`
  margin: 0 4px;
  cursor: pointer;
  transition: 0.2s;
  width: 18px;
  height: 18px;

  &:hover {
    transform: scale(1.2);
  }
`

export const EditIcon = styled(Icon).attrs({
  src: Edit,
  alt: 'Edit'
})``

export const TrashIcon = styled(Icon).attrs({
  src: Trash,
  alt: 'Delete'
})``

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
