import React, { useState } from 'react'
import logo from './logo.png'
import '../../../Style/General.scss'
import './Menu.scss'

function Menu() {

    const [menuOpened, setMenuOpened] = useState(false)

    const handleOpen = () => {
        setMenuOpened(true)
    }

    const handleClose = () => {
        setMenuOpened(false)
    }

    return (
        <header className="Header container">
            <img src={logo} className="pixter-logo" alt="Pixter Logo" />
            <nav className={menuOpened ? 'active' : null}>
                <span onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                        <line x1="15" y1="15" x2="25" y2="25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
                        <line x1="25" y1="15" x2="15" y2="25" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>    
                    </svg>
                </span>
                <ul>
                    <li>
                        <a href="#content">Books</a>
                    </li>
                    <li>
                        <a href="#footer">Newsletter</a>
                    </li>
                    <li>
                        <a href="#addresses">Address</a>
                    </li>
                </ul>
            </nav>
            <span onClick={handleOpen}>
                <svg viewBox="0 0 100 80" width="20" height="20">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </span>
        </header>
    )
  }

export default Menu
