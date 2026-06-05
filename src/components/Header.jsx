import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react"
import { useState } from "react"
import { Form, NavLink, Link} from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons"

import './Header.css'

function Header() {
    const navClass = "p-1 hover:font-bold active:font-bold"
    return (
        <header>
            <Navbar fluid className="bg-blue-900 dark:bg-gray-900">
                <NavbarBrand as={Link} to='/' className="h-12 md:h-16">
                    <img src='src/data/logo.png' className="h-full"/>
                </NavbarBrand>
                
                    <form className="flex flex-row mw-2 w-1/2 sm:w-fit">
                        <TextInput id="busqueda" type="text" placeholder="Buscar" required className="mr-1"/>
                        <Button color="green" type="submit" className="text-xl">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </form>

                    <Button outline as={Link} className="ml-2 aspect-square text-xl" to='carrito'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                
            </Navbar>
            <Navbar fluid className="bg-blue-300 text-gray-950 dark:bg-gray-700 dark:text-gray-300">
                <ul className="flex flex-row align-middle">
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/catalogo' end>Catálogo</NavLink></li>
                    <li><NavLink to='/catalogo/novedades'>Novedades</NavLink></li>
                    <li><NavLink to='/catalogo/ofertas'>Ofertas</NavLink></li>
                </ul>
            </Navbar>
        </header>
    )
}

export default Header