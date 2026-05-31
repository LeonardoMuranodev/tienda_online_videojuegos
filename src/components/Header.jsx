import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react"
import { Form, NavLink} from "react-router"

function Header() {
    const navClass = "p-1 hover:font-bold active:font-bold"
    return (
        <header>
            <Navbar fluid>
                <NavbarBrand as={NavLink} to='/'>
                    Logo
                </NavbarBrand>
                <div>
                    <form className="flex flex-row">
                        <TextInput id="busqueda" type="text" placeholder="Buscar" required/><Button color="green" type="submit"> Buscar </Button>
                    </form>
                </div>
                <Button outline as={NavLink} to='carrito'>
                    
                </Button>
            </Navbar>
            <Navbar fluid>
                <NavbarToggle/>
                <NavbarCollapse>
                    <NavbarLink as={NavLink} to='/'>Inicio</NavbarLink>
                    <NavbarLink as={NavLink} to='/catalogo'>Catálogo</NavbarLink>
                    <NavbarLink as={NavLink} to='/catalogo?type=nuevo'>Novedades</NavbarLink>
                    <NavbarLink as={NavLink} to='/catalogo?type=oferta'>Ofertas</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </header>
    )
}

export default Header