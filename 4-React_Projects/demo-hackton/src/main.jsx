import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as BrowserRoiuter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

  <BrowserRoiuter>
    <App />
  </BrowserRoiuter>
)
