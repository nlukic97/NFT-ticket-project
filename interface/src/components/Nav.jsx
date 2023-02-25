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
              
              <div className={hideMobileMenu ? 'line' : 'line openMobileMenu'}></div>
            </button>

            <ul className={ hideMobileMenu ? "hiddenOnSmallScreen":null}>
                <li><a href="./">About</a></li>
                <li><button className='blueBtn'>Connect Wallet</button></li>
            </ul>
        </nav >
    </div>
  )
}

export default Nav