import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <header className='header'>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/create-post'}>Create Post</Link>
            <Link to={'/existing-works'}>Posts</Link>
        </nav>
    </header>
    )
}

export default Header