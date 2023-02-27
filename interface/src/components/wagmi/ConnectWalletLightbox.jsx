import { useAccount, useConnect, useDisconnect } from 'wagmi'

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
    <div className='modalBox' onClick={(e)=> e.stopPropagation()}>

        {connectors.filter((x) => x.ready)
          .map((x) => (
            // only allow connect on click if not already connected, otherwise button is inactive
            <button key={x.id} className={(x.name+"Btn")} onClick={() => !isConnected ? connect({ connector: x }) : null}>
              {x.name}
            </button>
          )
        )}

        {/* disconnect wallet button */}
        {isConnected && (
          <button className='disconnectWalletBtn' onClick={() => disconnect()}>
            Disconnect Wallet
          </button>
        )}

    </div>
  )
}
