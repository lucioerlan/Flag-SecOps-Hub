import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const StyledToastContainer = styled(ToastContainer)`
  cursor: pointer;
  z-index: 100;
  .Toastify__toast {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border-radius: 0;
  }
  .Toastify__toast--error {
    background: #dc3545;
    color: white;
  }
  .Toastify__toast--warning {
    background: yellow;
    color: black;
  }
  .Toastify__toast--success {
    background: #008b00;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`
