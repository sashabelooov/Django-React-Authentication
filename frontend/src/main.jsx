import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   // createRoot import qilingan
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

// root elementni olish
const root = createRoot(document.getElementById('root'))

// appni render qilish
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
