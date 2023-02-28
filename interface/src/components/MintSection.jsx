import { useState } from 'react';
import MintNFTBtn from './MintNFTBtn';
import "./MintSection.css";

const MintSection = () => {
  const [imageToShow,setImageToShow] = useState(1) // toggle between 1 and 2

  return (
    <div className='ticketSpecContainer'>
        <div className="container ticketSpec">
          <h2>NFT ticket specifications</h2>

          {/* Contains both of the tables */}
          <div className="imgSpecContainer">

            {/* left card */}
            <div className="leftCard">

              {/* image and arrows */}
              <div className="ticketContainer">
                {/* show left arrow btn, or insert phantom div */}
                {(imageToShow === 2) ? <button onClick={()=> setImageToShow(1)}><i></i></button> : <div className='phantomDiv'></div>}

                {/* Toggle component to display - NFT ticket or info on NFT ticket */}
                {(imageToShow === 1)
                  ?
                  <img src="./images/ticket.png" alt="NFT ticket" />
                  :
                  // todo - create this component
                  <div className="metadata">
                    <h3>METADATA</h3>
                    <div className='metadataDetails'>
                      <h4>Properties</h4>
                      
                      <div>
                        <span className='property'>Rarity 100%</span>
                        <span className='property'>Place no. 45</span>
                      </div>
                      
                      <div>
                        <span className='property'>Star Arena</span>
                        <span className='property'>21/06/2024</span>
                      </div>

                      <h4>Description</h4>
                      <p className='descriptionP'>This ticket is part of a 5,000 NFTs ticket collection, where each NFT represents an entry tiket for one person with unlimited access for the event: Web3 Forever</p>

                    </div>
                  </div>
                }

                {/* show right arrow btn, or insert phantom div */}
                {(imageToShow === 1 )? <button onClick={()=> setImageToShow(2)}><i></i></button> : <div className='phantomDiv'></div>}
              </div>

              {/* price and mint btn */}
              <div className="priceAndBtnContainer">
                <p>Price: 0.001 AXAV</p>
                <MintNFTBtn/>
              </div>

            </div>

            {/* right card */}
            <div className="rightCard">

              <div className="heading">SPECIFICATIONS</div>

              <div className="iconTextDetailsContainer">
                <div className="iconText">
                  <i className="icon1"></i>
                  <span>Digital</span>
                </div>
                <div className="details">With this ticket you can follow the event online and replays on the multiverse.</div>
              </div>

              <div className="iconTextDetailsContainer">
                <div className="iconText">
                  <i className="icon2"></i>
                  <span>Physical</span>
                </div>
                <div className="details">This ticket grants you entrance for the concert.</div>
              </div>

              <div className="iconTextDetailsContainer">
                <div className="iconText">
                  <i className="icon3"></i>
                  <span>Membership</span>
                </div>
                <div className="details">Buying this ticket you are white listed for the next events and you will access a lottery that can give you access to the backstage.</div>
              </div>

            </div>

          </div>
          
        </div>
    </div>
  )
}

export default MintSection