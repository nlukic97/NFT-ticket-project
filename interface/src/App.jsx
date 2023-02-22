import React,{useState} from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Logo from './components/Logo'
import ConnectWalletModal from './components/connectWalletModal/ConnectWalletModal'

const App = () => {
  const [bannerClicked, setBannerClicked] = useState(false) // displays the banner until set to true
  const [connectModalVisible, setConnectModalVisible] = useState(false) // hides the connect wallet modal until set to true
  const [walletConnected, setWalletConnected] = useState(false) // when connect wallet modal is visible, will hide 'disconnect wallet' button until set to true
  

  function disconnectWallet(){
    console.log('Disconnect wallet');
    setWalletConnected(false)
  }

  return (
    <div>
      {!bannerClicked ? <Banner hideBanner={()=>setBannerClicked(true)} /> : null}
      
      <Nav openConnectWalletModal={()=>setConnectModalVisible(true)} />

      
      {
        (connectModalVisible) ?
          <ConnectWalletModal 
            closeConnectWalletModal={()=> setConnectModalVisible(false)} 
            walletConnected={walletConnected}
            disconnectWallet={disconnectWallet}
          /> 
          : null
      }

      {/* Section 1 ------- hero section */}
      <div className="heroContainer">
        <div className='heroSection container'>
          {/* hero text */}
          <div className="left">
            <h1>Vibes for the Web3 Community</h1>
            <p>An event that will happen on 21/06/2024.Your favorite band is playing in your city and it’s an amazing opportunity for you to see them.</p>
            <p>Mint your NFT below.</p>
          </div>

          {/* hero image */}
          <div className="right">
            <img src="./band.png" alt="pang playing" />
          </div>
        </div>
      </div>

      {/* Section 2 ------- ticket specifications section */}
      <div>
        <div className="container ticketSpec">
          <h2>NFT ticket specifications</h2>
        </div>
      </div>


      {/* footer sectionj */}
      <footer>
        <Logo />
        <p>Terms of Service Privacy Policy</p>
        <p>&copy; 2022 Infinity Admission</p>
      </footer>
    </div>
  )
}

export default App