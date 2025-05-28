import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChProvider } from "./components/ui/provider"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChProvider>
    <App />
    </ChProvider>
  </StrictMode>,
)
