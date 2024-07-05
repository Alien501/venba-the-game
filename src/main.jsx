import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LenisComp from './components/LenisComp/LenisComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LenisComp>
      <App />
    </LenisComp>
  </React.StrictMode>,
)
