import React from 'react'
import Menu from './Menu/Menu'
import Presentation from './Presentation/Presentation'
import '../../Style/General.scss'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <Menu />
            <Presentation />
        </div>
    );
}

export default Header
