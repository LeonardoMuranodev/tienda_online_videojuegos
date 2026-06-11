import { Route, Routes } from 'react-router'

import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import Carrito from './pages/Carrito.jsx'
import Contacto from './pages/Contacto.jsx'
import Error404 from './pages/Error404.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ConfirmacionCompra from './pages/ConfirmacionCompra.jsx'
import { TerminosYCondiciones } from './pages/TerminosyCondiciones.jsx'
import { PoliticaDePrivacidad } from './pages/PoliticaDePrivacidad.jsx'

function App() {

  return (<div className='flex flex-col min-h-screen'>
    <Header/>
    <main className='bg-blue-100 dark:bg-zinc-900 text-zinc-900 dark:text-cyan-50 h-fit grow'>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route path='/catalogo' element={<Productos/>}/>
        <Route path='/catalogo/:especiales' element={<Productos/>}/>
        <Route path='/producto/:id' element={<DetalleProducto/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/terminos-y-condiciones' element={<TerminosYCondiciones/>}/>
        <Route path='/politica-de-privacidad' element={<PoliticaDePrivacidad/>}/>
        <Route path='/confirmacion-compra' element={<ConfirmacionCompra />} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App
