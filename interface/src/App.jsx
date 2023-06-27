import { useState, useEffect} from 'react'

import Nav from './components/Nav'
import Banner from './components/blocks/Banner/Banner'
import Logo from './components/Logo'
import HeroSection from './components/sections/Hero/HeroSection'
import MintSection from './components/MintSection'
import ConnectWalletModal from './components/ConnectWalletModal'

import { client } from './wagmi.js'
import { WagmiConfig } from 'wagmi'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal(){
    setModalOpen(true)
  }
  
  function closeModal(){
    setModalOpen(false)
  }

  /** 
   * Upon changing the state of modalOpen, either add or hide the class which 
   * will display the "Connect your wallet" modal (Using CSS to avoid JS re-rendering)
   * */
  useEffect(()=>{
    if(modalOpen){
      document.body.classList.add('modalOpen')
    } else {
      document.body.classList.remove('modalOpen')
    }
  },[modalOpen])

  window.addEventListener('keydown',function(event){
    if(event.key === "Escape" && modalOpen === true){
      closeModal()
    }
})
  
  return (
    <WagmiConfig client={client}>      
      <ConnectWalletModal isModalOpen={modalOpen} closeModal={closeModal}/>
      
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