import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store';
import { ChProvider } from './components/ui/provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChProvider>
      <Provider store={store}>
    <App />
     </Provider>
     </ChProvider>
  </StrictMode>,
)
