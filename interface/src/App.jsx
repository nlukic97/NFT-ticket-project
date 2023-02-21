import React,{useState} from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'

const App = () => {
  const [bannerClicked,setBannerClicked] = useState(false)

  function hideBanner(){
    setBannerClicked(true)
  }
  return (
    <div>
      {!bannerClicked ? <Banner hideBanner={hideBanner} /> : null}
      <Nav />
    </div>
  )
}

export default App