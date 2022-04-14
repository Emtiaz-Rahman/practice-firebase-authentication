import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='header-part'>
            <Navbar expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-4 fs-5  "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                            <NavLink to='/orders'>Orders</NavLink>
                            <NavLink to='/regester'>Regester</NavLink>
                            <NavLink to='/login'>Login</NavLink>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;