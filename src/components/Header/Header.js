import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>Scribblr</h1>

            <nav className='nav'>
                <Link to={'/create-scribbl'}>Create Scribbl</Link>
                <Link to={'/scribbls'}>Home</Link>

            </nav>
            <h3>A Hub for Literary Expression</h3>
        </header>
    )
}

export default Header