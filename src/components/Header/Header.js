import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <header className='header'>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/createPost'}>Create Post</Link>
            <Link to={'/existingWorks'}>Posts</Link>
        </nav>
    </header>
    )
}

export default Header