import { useNetwork, useSwitchNetwork } from 'wagmi'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
import abi from "../abis/NftTicketAbi.json"
import { avalanche } from 'wagmi/chains' // import of network ( avalancheFuji )

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
if(!contractAddress) throw new Error("Please set the .env variable REACT_APP_CONTRACT_ADDRESS")

const MintNFTBtn = () => { 
    const {isConnected} = useAccount()
    const { chain } = useNetwork() // the current chain user is connected to
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork({
      // If the user has clicked mint to switch to avalanche, this means we should call the mint function
      onSuccess(data){
        if(data.id === avalanche.id){
          write?.()
        }
      }
    })
    
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
          Mint Now
        </button>
    )
}

export default MintNFTBtn