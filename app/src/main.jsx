import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//always remove this style to resset the styles in the app
  import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
