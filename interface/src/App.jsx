import React,{useState} from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
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

    </div>
  )
}

export default App