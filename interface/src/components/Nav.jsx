import {useState} from 'react'
import Logo from './Logo'
import "./Nav.css"

import { useAccount} from 'wagmi'

const Nav = ({openModal}) => {
  const [hideMobileMenu, setHideMobileMenu] = useState(true)
  const {address, isConnected} = useAccount()
  
  function toggleMobileMenu(){
    setHideMobileMenu(!hideMobileMenu)
  }
  
  return (
    <div className='navFull'>
        <nav className='navContainer'>
            <Logo />
            
            <button id='hamburgerBtn' onClick={toggleMobileMenu}>
              
              <div className={hideMobileMenu ? 'line' : 'line openMobileMenu'}></div>
            </button>

            <ul className={ hideMobileMenu ? "hiddenOnSmallScreen":null}>
                <li><a href="./">About</a></li>
                <li>
                  <button className='blueBtn' onClick={openModal}>
                    {!isConnected ? 
                      "Connect Wallet" 
                      : 
                      // displaying part of the address (first 6 and last 3 chars)
                      `${address.slice(0,6)}...${address.slice(42 - 3)}`
                    }
                  </button>
                </li>
            </ul>
        </nav >
    </div>
  )
}

export default Nav