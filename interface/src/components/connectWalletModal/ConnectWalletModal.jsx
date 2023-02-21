import React from 'react'

const ConnectWalletModal = ({closeConnectWalletModal, walletConnected, disconnectWallet}) => {
  return (
    
    // todo figure out this onClick event, where should the click happen
    // <div onClick={closeConnectWalletModal}>
    <div>
        <button>Metamast</button>
        <button>Wallet Connect</button>
        {walletConnected ? <button onClick={disconnectWallet}>Disconnect wallet</button> : null}

    </div>
  )
}

export default ConnectWalletModal