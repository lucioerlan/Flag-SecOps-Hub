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

export const StyledLink = styled.button`
  background-color: transparent;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-family: 'Sen', 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 16px;
  padding: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`
