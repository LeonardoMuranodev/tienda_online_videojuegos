import { useContext } from "react"

import { Button, Navbar, NavbarBrand } from "flowbite-react"
import { NavLink, Link, useNavigate } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons"

import { CarritoContexto } from "../context/CarritoContext"

import Logo from '../data/logo.png'
import Buscador from '../pages/Buscador.jsx'

import './Header.css'

function Header() {

    const navigate = useNavigate()

    const { carrito } = useContext(CarritoContexto)

    const cantidadProductos = carrito.reduce(
        (acum, juego) => acum + juego.cantidad,
        0
    )

    const handleBusqueda = (e) => {
        e.preventDefault()
        navigate('/catalogo')
    }

    return (
        <header>

            <Navbar fluid className="bg-blue-900 dark:bg-gray-900">

                <NavbarBrand as={Link} to='/' className="h-12 md:h-16">
                    <img src={Logo} className="h-full"/>
                </NavbarBrand>

                <form onSubmit={handleBusqueda} className="flex flex-row mw-2 w-1/2 sm:w-fit">
                    <Buscador className="mr-1"/>

                    <Button color="green" type="submit" className="p-0 aspect-square text-xl">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </form>

                <Button
                    outline
                    as={Link}
                    className="ml-2 p-0 aspect-square text-xl bg-blue-100 dark:bg-transparent relative"
                    to='carrito'
                >
                    <FontAwesomeIcon icon={faCartShopping} />

                    {cantidadProductos > 0 && (
                        <span
                            className="
                                absolute
                                -top-2
                                -right-2
                                bg-red-600
                                text-white
                                text-xs
                                w-5
                                h-5
                                rounded-full
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {cantidadProductos}
                        </span>
                    )}

                </Button>

            </Navbar>

            <Navbar fluid className="bg-blue-300 text-gray-950 dark:bg-gray-700 dark:text-gray-300">
                <ul className="flex flex-row align-middle">
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/catalogo' end>Catálogo</NavLink></li>
                    <li><NavLink to='/catalogo/novedades'>Novedades</NavLink></li>
                    <li><NavLink to='/contacto'>Contacto</NavLink></li>
                </ul>
            </Navbar>

        </header>
    )
}

export default Header