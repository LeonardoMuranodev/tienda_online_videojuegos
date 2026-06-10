import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CarritoProvider } from './context/CarritoProvider.jsx'
import { BusquedaProvider } from './pages/Buscador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <BusquedaProvider>
          <App />
        </BusquedaProvider>
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
