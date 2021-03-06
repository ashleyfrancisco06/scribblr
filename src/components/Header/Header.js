import React from 'react'
import './header.css';
// import Nav from "../Nav/Nav"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className='header'>

            <h1>Scribblr</h1>
            <Navbar bg="light" variant="light">
                <h3>A Hub for Literary Expression</h3>
                <Nav className="mr-auto">
                    <Link to="/scribbls" className="nav-link">Home</Link>
                    <NavDropdown title="Hello Scribblr!" id="basic-nav-dropdown">
                        <Link to="/user-profile"  className="dropdown-item">Profile</Link>
                        <Link to="/create-scribbl" className="dropdown-item">Create Scribbl</Link>
                        <NavDropdown.Divider />
                        <Link to="/" className="dropdown-item">Log Out</Link>
                    </NavDropdown>
                </Nav>
            </Navbar>


        </header>
    )
}

// <nav className='nav'>
        //     <Link to={'/scribbls'}>Home</Link>
        //     <Link to={'/create-scribbl'}>Create Scribbl</Link>
        // </nav>

export default Header
