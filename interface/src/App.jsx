import { useState } from 'react'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'
import HeroSection from './components/HeroSection'
import MintSection from './components/MintSection'
import Modal from './components/Modal'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal(){
    document.body.classList.add('modalOpen')
    setModalOpen(true)
  }
  
  function closeModal(){
    document.body.classList.remove('modalOpen')
    setModalOpen(false)
  }
  
  return (
    <div>      
      {modalOpen ? <Modal closeModal={closeModal}/> : null}
      
      <Banner />
      
      <Nav openModal={openModal}/>
      
      <HeroSection/>
      
      <MintSection/>
      
      <footer>
        <Logo />
        <p>Terms of Service Privacy Policy</p>
        <p>&copy; 2022 Infinity Admission</p>
      </footer>
    </div>
    )
  }
  
  export default App