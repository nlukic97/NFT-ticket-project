import React,{useState} from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'

const App = () => {
  const [bannerClicked, setBannerClicked] = useState(true) // displays the banner until set to true // todo - change back to false

  return (
    <div>
      {!bannerClicked ? <Banner hideBanner={()=>setBannerClicked(true)} /> : null}
      
      <Nav/>

      {/* Section 1 ------- hero section */}
      <div className="heroContainer">
        <div className='heroSection container'>
          
          <div className="left">
            <h1>Vibes for the Web3 Community</h1>
            <p>An event that will happen on 21/06/2024.Your favorite band is playing in your city and it’s an amazing opportunity for you to see them.</p>
            <p>Mint your NFT below.</p>
          </div>

          
          <div className="right">
            <img src="./images/band.png" alt="pang playing" />
          </div>
        </div>
      </div>

      {/* Section 2 ------- ticket specifications section */}
      <div>
        <div className="container ticketSpec">
          <h2>NFT ticket specifications</h2>
        </div>
      </div>


      {/* footer section */}
      <footer>
        <Logo />
        <p>Terms of Service Privacy Policy</p>
        <p>&copy; 2022 Infinity Admission</p>
      </footer>
    </div>
  )
}

export default App