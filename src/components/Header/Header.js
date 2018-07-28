import React from 'react'
import logo from './logo.gif'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className='logo' alt='' />
            <h1>A Lytle EOS Explorer</h1>
        </header>
    )
}

export default Header;