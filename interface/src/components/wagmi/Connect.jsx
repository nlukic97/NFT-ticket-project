import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function Connect() {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

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
