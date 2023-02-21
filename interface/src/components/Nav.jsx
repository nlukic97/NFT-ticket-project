import React from 'react'
import Logo from './Logo'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navFull'>
        <nav className='navContainer'>
              <a href="./"><Logo /></a>
            <ul>
                <li><a href="./">About</a></li>
                <li><button>Connect Wallet</button></li>
            </ul>
        </nav >
    </div>
  )
}

export default Nav