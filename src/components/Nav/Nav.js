import React from "react"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <nav className='nav'>
            <Link to={'/create-scribbl'}>Create Scribbl</Link>
            <Link to={'/scribbls'}>Home</Link>
        </nav>
    )
}


export default Nav;