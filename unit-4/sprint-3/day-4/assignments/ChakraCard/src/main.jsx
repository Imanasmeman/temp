import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from '../../../../../sprint-4/day-1/assignments/ChakraCard/src/components/ui/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>
  </StrictMode>,
)
