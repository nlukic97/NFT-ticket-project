import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'
import HeroSection from './components/HeroSection'
import MintSection from './components/MintSection'

const App = () => {
  return (
    <div>
      <Banner />
      
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