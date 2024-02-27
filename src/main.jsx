import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Userprovider from './context/UserContext.jsx'
import AuthProvider from './context/AuthContext.jsx'
import ModalProvider from './context/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <Userprovider>
    <ModalProvider>
      <App />
    </ModalProvider>
    </Userprovider>
  </AuthProvider>
)
