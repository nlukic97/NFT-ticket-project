import { useNetwork, useSwitchNetwork } from 'wagmi'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
import abi from "../abis/NftTicketAbi.json"
import { avalanche } from 'wagmi/chains' // import of network ( avalancheFuji )

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
if(!contractAddress) throw new Error("Please set the .env variable REACT_APP_CONTRACT_ADDRESS")

const MintNFTBtn = () => { 
    const {isConnected} = useAccount()
    const { chain } = useNetwork()
    console.log(chain);
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    
    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi,
        functionName: 'mint',
        
        // looks like this is the solution:
        args:[
          {
            gasLimit:21000
          }
        ],
        // overrides:{
        //   value: ethers.utils.parseEther('0.001')
        // },
      }
    )

    const { write } = useContractWrite(config)
    
    return (
        <button 
          className={isConnected ? "blueBtn" : "blueBtn disabled"} 
          disabled={!isConnected} 
          onClick={()=>{
            if(chain?.unsupported){
              switchNetwork(avalanche.id)
            } else {
              write?.()
            }
          }}
        >
          {chain?.unsupported ? 'Switch Network' : 'Mint Now'}
        </button>
    )
}

export default MintNFTBtn