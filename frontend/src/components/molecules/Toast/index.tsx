import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer } from './styled'

const Toast = () => (
  <StyledToastContainer
    position="bottom-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)

export default Toast
