import {useState} from 'react'
import "./Banner.css"

const Banner = () => {
  const previouslyClicked = (localStorage.getItem('closedNotification') === 'true')
  const [bannerClicked, setBannerClicked] = useState(previouslyClicked)

  /* Closes banner, and sets local storage so that banner wont show up on reload */
  function hideBanner(){
    localStorage.setItem('closedNotification',true)
    setBannerClicked(true)
  }

  if(bannerClicked === false){
    return (
      <div className='bannerFull'>
          <div className='navContainer bannerInner'>
              <div></div> {/* phantom div */}
              <div className='bannerText'>This website is a demo version only. It is intended to be a Proof of Concept for physical NFTs linked to different blockchains. Please do not use this website!</div>
              <button onClick={hideBanner}>X</button>
          </div>
      </div>
    )
  } else {
    return null
  }
}

export default Banner