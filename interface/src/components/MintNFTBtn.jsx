import { ethers } from 'ethers'
import { useNetwork } from 'wagmi'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
import abi from "../abis/NftTicketAbi.json"

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
if(!contractAddress) throw new Error("Please set the .env variable REACT_APP_CONTRACT_ADDRESS")

const MintNFTBtn = () => { 
    const {isConnected} = useAccount()

    const { chain } = useNetwork()
    
    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi,
        functionName: 'mint',
        overrides:{
          value: ethers.utils.parseEther('0.001')
        }
      }
    )

    const { write } = useContractWrite(config)
    
    return (
        <button 
          className={write && isConnected && !chain?.unsupported ? "blueBtn" : "blueBtn disabled"} 
          disabled={!write || chain?.unsupported} 
          onClick={()=> write?.()}
        >
          Mint Now
        </button>
    )
}

export default MintNFTBtn