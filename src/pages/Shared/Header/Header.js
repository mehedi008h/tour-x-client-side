import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className="me-2" src="" alt="" /></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/">Skypro Medicare</Navbar.Brand>
                    <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-dark" id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="me-3">Home</Nav.Link>
                            {user?.email &&
                                <Nav.Link as={Link} to="/home" className="me-3">My Order</Nav.Link>
                            }
                            {user?.email &&
                                <Nav.Link as={Link} to="/home" className="me-3">Manage Order</Nav.Link>
                            }


                            {/* <Nav.Link as={Link} className="user-name me-2 text-light">{user?.displayName}</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="signup me-2 text-light">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="signup me-2 text-light">Login</Nav.Link>
                            <Button onClick={logOut} variant="success" className="text-white me-2 text-success">Logout</Button> */}

                            {user?.email &&
                                <img className="user-img" src={user?.photoURL} alt="" />
                            }
                            {user?.email &&
                                <NavDropdown className="" title={user?.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/add-service" >Add Service</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manage-order" >My Order</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/add-service" >Manage Order</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>
                                </NavDropdown>
                            }
                            {user?.email ?
                                <Button onClick={logOut} variant="success" className="logout text-white me-2 text-success">Logout</Button> :
                                <Nav.Link as={Link} to="/login" className="signup me-2 text-white">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;