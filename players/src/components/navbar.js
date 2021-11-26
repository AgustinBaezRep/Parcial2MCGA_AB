import React from 'react'
import { Link } from 'react-router-dom'
import NavBarStyles from '../styles/navbar.css'

const NavBar = () => {
    return (
        <div className='main-nav'>
            <Link to="/players" className='nav-link'>
                <h1>Players</h1>
            </Link>
            <Link to="/contact" className='nav-link'> 
                <h1>Contact</h1>
            </Link>
            <Link to="/login" className='nav-link'>
                <h1>Login</h1>
            </Link>
        </div>
    )
}

export default NavBar
