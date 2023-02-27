import { useNetwork } from 'wagmi'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
// todo import abi here

const MintNFTBtn = () => { 
    const {isConnected} = useAccount()

    const { chain } = useNetwork()
    
    const { config } = usePrepareContractWrite({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', // todo replace this with real address, and add the abi underneath
        abi: [
          {
            name: 'mint',
            type: 'function',
            stateMutability: 'nonpayable',
            inputs: [],
            outputs: [],
          },
        ],
        functionName: 'mint',
      }
    )

    const { write } = useContractWrite(config)

    /* const { chain } = useNetwork()
    const { chains, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    
    if (!chain) return null

    if(switchNetwork){
      if(chain?.unsupported === true && isLoading === false){
        switchNetwork(chains[0].id) // switch to avalanche
      }
    } */
    
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