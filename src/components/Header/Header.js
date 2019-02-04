import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1>Scribblr</h1>
                <nav>
                    <Link to={'/scribbls'}>Home</Link>
                    <Link to={'/create-scribbl'}>Create Scribbl</Link>
 
                </nav>
            </div>

        </header>
    )
}

export default Header