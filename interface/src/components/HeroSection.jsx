import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer">
        <div className='heroSection container'>
          
          <div className="left">
            <h1>Vibes for the Web3 Community</h1>
            <p className="body-text-2">An event that will happen on 21/06/2024. Your favorite band is playing in your city and it’s an amazing opportunity for you to see them.</p>
            <p className="body-text-2">Mint your NFT below.</p>
          </div>

          
          <div className="right">
            <img src="./images/band.png" alt="pang playing" />
          </div>
        </div>
    </div>
  )
}

export default HeroSection