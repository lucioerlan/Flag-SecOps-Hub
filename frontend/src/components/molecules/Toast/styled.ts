import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const StyledToastContainer = styled(ToastContainer)`
  cursor: pointer;
  z-index: 100;

  .Toastify__toast {
    font-size: 16px;
    font-family: 'Sen', 'Roboto', sans-serif;
    text-align: center;
    border-radius: 12px;
    background: rgb(34, 33, 48);
    border: none;
    border: 1px solid #fff;
    color: #fff;
  }

  .Toastify__close-button {
    color: #fff;
  }
`
