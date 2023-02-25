import "./MintSection.css";

const MintSection = () => {
  return (
    <div>
        <div className="container ticketSpec">
          <h2>NFT ticket specifications</h2>

          {/* Contains both of the tables */}
          <div className="imgSpecContainer">

            <div className="leftCard">
              {/* image and arrows */}
              <div className="ticketContainer">
                <button>&#60;</button>
                <img src="./images/ticket.png" alt="some img" />
                <button>&#62;</button>
              </div>

              {/* price and mint btn */}
              <div className="priceAndBtnContainer">
                <p>text</p>
                <button>Mint Ticket</button>
              </div>
            </div>

            <div className="rightCard">
              <div>SPECIFICATIONS</div>
              <div className="iconTextContainer">
                <div>one</div>
                <div>two</div>
              </div>
              <div className="iconTextContainer">
                <div>one</div>
                <div>two</div>
              </div>
              <div className="iconTextContainer">
                <div>one</div>
                <div>two</div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default MintSection