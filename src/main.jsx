import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Components/Context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
