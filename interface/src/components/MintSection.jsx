import {useState, useEffect} from 'react';
import "./MintSection.css";

const MintSection = () => {
  const [imageToShow,setImageToShow] = useState(1) // toggle between 1 and 2
  useEffect(()=>{
    console.log('changed the thing');
    console.log(imageToShow)
  },[imageToShow])

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
                  <div style={{width:'80%',height:'50%',border:'1px solid red'}}>TODO - create component</div>
                }

                {/* show right arrow btn, or insert phantom div */}
                {(imageToShow === 1 )? <button onClick={()=> setImageToShow(2)}><i></i></button> : <div className='phantomDiv'></div>}
              </div>

              {/* price and mint btn */}
              {/* todo - this should be at the bottom of the page, maybe flex? */}
              <div className="priceAndBtnContainer">
                <p>Price: 0.001 AXAV</p>
                <button className="blueBtn" onClick={()=> alert('Clicked MINT button')}>Mint Now</button>
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