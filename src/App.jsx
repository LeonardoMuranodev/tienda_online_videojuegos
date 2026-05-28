import { useState } from 'react'

import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import Carrito from './pages/Carrito.jsx'
import Contacto from './pages/Contacto.jsx'
import Error404 from './pages/Error404.jsx'

function App() {

  return (
    <>
    <h1>asd</h1>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/catalogo' element={<Productos/>}/>
      <Route path='/producto/:id' element={<DetalleProducto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </>
  )
}

export default App
