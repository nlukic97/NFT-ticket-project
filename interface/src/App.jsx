import React,{useState} from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'
import HeroSection from './components/HeroSection'
import MintSection from './components/MintSection'

const App = () => {
  const [bannerClicked, setBannerClicked] = useState(true) // displays the banner until set to true // todo - change back to false

  return (
    <div>
      {!bannerClicked ? <Banner hideBanner={()=>setBannerClicked(true)} /> : null}
      
      <Nav/>

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