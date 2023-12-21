import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const Strict = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))
