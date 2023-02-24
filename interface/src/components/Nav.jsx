import {useState} from 'react'
import Logo from './Logo'
import "./Nav.css"

const Nav = () => {
  const [hideMobileMenu, setHideMobileMenu] = useState(true)
  
  function toggleMobileMenu(){
    setHideMobileMenu(!hideMobileMenu)
  }
  
  return (
    <div className='navFull'>
        <nav className='navContainer'>
            <Logo />
            
            <button id='hamburgerBtn' onClick={toggleMobileMenu}>
              {hideMobileMenu ? "open" : "X"}
            </button>

            <ul className={ hideMobileMenu ? "hiddenOnSmallScreen":null}>
                <li><a href="./">About</a></li>
                <li><button>Connect Wallet</button></li>
            </ul>
        </nav >
    </div>
  )
}

export default Nav