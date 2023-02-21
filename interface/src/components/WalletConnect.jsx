/* todo still testing this */
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { avalanche } from 'wagmi/chains'

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.REACT_APP_PROJECT_ID) {
  throw new Error('You need to provide REACT_APP_PROJECT_ID env variable')
}
const projectId = process.env.REACT_APP_PROJECT_ID

// 2. Configure wagmi client
const chains = [avalanche]

const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ version: '2', appName: 'web3Modal', chains, projectId }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export default function WalletConnect() {
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <Web3Button label='WalletConnect'/>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  )
}