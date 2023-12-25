import styled from 'styled-components'

export const PasswordView = styled.div`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  .togglePasswordLogin {
    margin-right: 55px;
  }
  @media (max-width: 1550px) {
    .togglePasswordLogin {
      display: none;
    }
  }
`
