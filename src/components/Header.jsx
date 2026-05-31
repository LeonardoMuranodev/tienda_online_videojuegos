import { NavLink } from "react-router"

function Header() {
    const navClass = "p-1 hover:font-bold active:font-bold"
    return (
        <header>
            <div className="flex justify-between p-4 bg-gray-950 text-amber-100">
                <NavLink to='/'>Logo</NavLink>
                <div>barra de busqueda</div>
                <NavLink to='/carrito'>carrito</NavLink>
            </div>
            <div className="flex justify-start p-1 bg-gray-500 text-amber-100">
                <NavLink to='/' className={navClass}>Inicio</NavLink>
                <NavLink to='/catalogo' className={navClass}>Catálogo</NavLink>
                <NavLink to='/catalogo/novedades' className={navClass}>Novedades</NavLink>
                <NavLink to='/catalogo/ofertas' className={navClass}>Ofertas</NavLink>
            </div>
        </header>
    )
}

export default Header