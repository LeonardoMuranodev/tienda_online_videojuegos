import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Error404 from './pages/Error404'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={Inicio}/>
      <Route path='/catalogo' element={Productos}/>
      <Route path='/catalogo/producto/:id' element={DetalleProducto}/>
      <Route path='/carrito' element={Carrito}/>
      <Route path='/contacto' element={Contacto}/>
      <Route path='*' element={Error404}/>
    </Routes>
    </>
  )
}

export default App
