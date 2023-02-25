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
                <div>two</div>
              </div>

              <div className="iconTextContainer">
                <div>
                  <span><i>icon</i> text</span>
                </div>
                <div>two</div>
              </div>

              <div className="iconTextContainer">
                <div>
                  <span><i>icon</i> text</span>
                </div>
                <div>two</div>
              </div>

            </div>

          </div>
          
        </div>
    </div>
  )
}

export default MintSection