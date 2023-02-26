import { configureChains, createClient } from 'wagmi'
import { avalanche } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const infuraApiKey = process.env.REACT_APP_INFURA_API_KEY
if(!infuraApiKey){
  console.error("Please enter a value for REACT_APP_INFURA_API_KEY in the .env file")
}

const { chains, provider, webSocketProvider } = configureChains(
  [avalanche],
  [
    infuraProvider({ apiKey: infuraApiKey }),
    publicProvider(),
  ],
)

export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
