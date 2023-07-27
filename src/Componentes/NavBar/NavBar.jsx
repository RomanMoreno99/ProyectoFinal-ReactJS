import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/"><Navbar.Brand> SneakersLR </Navbar.Brand></Link>
                    <Nav className="me-center">
                        <Nav.Link>
                            <NavLink to="/categoria/1" > Nike Dunk </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/categoria/2" >Nike Air Jordan </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/categoria/3"> Nike Air Force </NavLink>
                        </Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
