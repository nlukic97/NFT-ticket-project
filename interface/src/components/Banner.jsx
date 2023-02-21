import React from 'react'
import "./Banner.css"

const Banner = ({hideBanner}) => {
  return (
    <div className='bannerFull'>
        <div className='navContainer bannerInner'>
            <div></div> {/* phantom div */}
            <div className='bannerText'>This website is a demo version only. It is intended to be a Proof of Concept for physical NFTs linked to different blockchains. Please do not use this website!</div>
            <button onClick={hideBanner}>X</button>
        </div>
    </div>
  )
}

export default Banner