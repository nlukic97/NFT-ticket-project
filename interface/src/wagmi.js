import { avalanche } from 'wagmi/chains' // import of network ( avalancheFuji )
import { configureChains, createClient } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const infuraApiKey = process.env.REACT_APP_INFURA_API_KEY
if(!infuraApiKey) throw new Error("Please enter a value for REACT_APP_INFURA_API_KEY in the .env file")

const projectId = process.env.REACT_APP_PROJECT_ID
if(!projectId) throw new Error("Please enter a value for REACT_APP_PROJECT_ID in the .env file")

const { chains, provider, webSocketProvider } = configureChains(
  [avalanche], // change network here
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
      chains:[avalanche], // change network here
      options: {
        qrcode: true,
        version:"2",
        projectId,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
