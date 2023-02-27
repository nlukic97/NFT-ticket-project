import { useState } from 'react'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'
import HeroSection from './components/HeroSection'
import MintSection from './components/MintSection'
import Modal from './components/Modal'

import { client } from './wagmi.js'
import { useAccount, WagmiConfig } from 'wagmi'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { isConnected } = useAccount()

  function openModal(){
    document.body.classList.add('modalOpen')
    setModalOpen(true)
  }
  
  function closeModal(){
    document.body.classList.remove('modalOpen')
    setModalOpen(false)
  }

  // should fix this, as it will just close the wallet loading page
  /* if(isConnected && modalOpen){
    closeModal()
  } */

  window.addEventListener('keydown',function(event){
    if(event.key === "Escape" && modalOpen === true){
      closeModal()
    }
})
  
  return (
    <WagmiConfig client={client}>      
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
    </WagmiConfig>
    )
  }
  
  export default App