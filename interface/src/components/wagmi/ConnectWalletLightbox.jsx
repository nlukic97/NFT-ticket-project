import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Logo from "../Logo"
import "./ConnectWalletLightbox.css"

export function ConnectWalletLightbox({closeModal}) {
  const { isConnected } = useAccount()

  const { connect, connectors } = useConnect({
    onSuccess(){
      closeModal()
    },
  })

  const { disconnect } = useDisconnect({
    onSuccess(){
      closeModal()
    }
  })

  return (
    <div className='lightBox' onClick={(e)=> e.stopPropagation()}>
        <div className="logoContainer">
          <Logo/>
        </div>
        
        <h3 className='connectHeading'>Connect your wallet</h3>

        {connectors.filter((x) => x.ready)
          .map((x) => (
            // only allow connect on click if not already connected, otherwise button is inactive
            <button key={x.id} className={(x.name+"Btn")} onClick={() => !isConnected ? connect({ connector: x }) : null}>
              <i></i>
              <span>{x.name}</span>
            </button>
          )
        )}

        {/* disconnect wallet button */}
        {isConnected && (
          <button className='disconnectWalletBtn' onClick={() => disconnect()}>
            <i></i>
            <span>Disconnect Wallet</span>
          </button>
        )}

    </div>
  )
}
