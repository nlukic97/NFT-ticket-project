import "./MintSection.css";

const MintSection = () => {
  return (
    <div>
        <div className="container ticketSpec">
          <h2>NFT ticket specifications</h2>

          {/* Contains both of the tables */}
          <div className="imgSpecContainer">

            {/* left card */}
            <div className="leftCard">

              {/* image and arrows */}
              <div className="ticketContainer">
                <button>&#60;</button>
                <img src="./images/ticket.png" alt="some img" />
                <button>&#62;</button>
              </div>

              {/* price and mint btn */}
              <div className="priceAndBtnContainer">
                <p>Price: 0.001 AXAV</p>
                <button className="blueBtn" onClick={()=> alert('Clicked MINT button')}>Mint Now</button>
              </div>

            </div>

            {/* right card */}
            <div className="rightCard">

              <div className="heading">SPECIFICATIONS</div>

              <div className="iconTextContainer">
                <div>
                  <span><i>icon</i> text</span>
                </div>
                <div>With this ticket you can follow the event online and replays on the multiverse.</div>
              </div>

              <div className="iconTextContainer">
                <div>
                  <span><i>icon</i> text</span>
                </div>
                <div>This ticket grants you entrance for the concert.</div>
              </div>

              <div className="iconTextContainer">
                <div>
                  <span><i>icon</i> text</span>
                </div>
                <div>Buying this ticket you are white listed for the next events and you will access a lottery that can give you access to the backstage.</div>
              </div>

            </div>

          </div>
          
        </div>
    </div>
  )
}

export default MintSection