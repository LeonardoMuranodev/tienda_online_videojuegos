import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import { Form, NavLink } from "react-router"

function Header() {
    const navClass = "p-1 hover:font-bold active:font-bold"
    return (
        <header>
            <Navbar fluid>
                <NavbarBrand as={NavLink} to='/'>
                    Logo
                </NavbarBrand>
                <NavbarLink as={NavLink} to='carrito'>Carrito</NavbarLink>
            </Navbar>
            <Navbar fluid>
                <NavbarToggle/>
                <NavbarCollapse>
                    <NavbarLink as={NavLink} to='/'>Inicio</NavbarLink>
                    <NavbarLink as={NavLink} to='/catalogo'>Catálogo</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </header>
    )
}

export default Header