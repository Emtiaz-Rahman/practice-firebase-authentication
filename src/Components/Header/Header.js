import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
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

                            <span>{user?.displayName && user.displayName}</span>
                            {
                                user?.uid
                                    ?
                                    <Button onClick={() => signOut(auth)} >SignOut</Button>
                                    :
                                    <NavLink to='/login'>Login</NavLink>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;