import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function Connect({closeModal}) {
  const { connector, isConnected } = useAccount()
  
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
    onSuccess(){
      closeModal()
    }
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

      {/* {error && <div>{error.message}</div>} */}
    </div>
  )
}
