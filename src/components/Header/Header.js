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
                    <Nav.Link href="/scribbls">Home</Nav.Link>
                    <NavDropdown title="Hello Scribblr!" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/create-scribbl">Create Scribbl</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My Scribbls</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
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
