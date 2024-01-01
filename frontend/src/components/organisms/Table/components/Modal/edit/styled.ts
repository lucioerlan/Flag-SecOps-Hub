import styled from 'styled-components'

export const ToggleLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #fff;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`

export const StyledToggle = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: 0.8rem 0;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 24px;

    &:before {
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  & input:checked + span {
    background-color: rgb(151, 146, 237);
  }

  & input:focus + span {
    box-shadow: 0 0 1px rgb(151, 146, 237);
  }

  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
