import React from 'react'
import Logo from './Logo'
import "./Nav.css"

const Nav = ({openConnectWalletModal}) => {
  return (
    <div className='navFull'>
        <nav className='navContainer'>
              <a href="./"><Logo /></a>
            <ul>
                <li><a href="./">About</a></li>
                <li><button onClick={openConnectWalletModal}>Connect Wallet</button></li>
            </ul>
        </nav >
    </div>
  )
}

export default Nav