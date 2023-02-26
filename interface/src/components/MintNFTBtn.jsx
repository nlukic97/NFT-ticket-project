import { usePrepareContractWrite, useContractWrite } from 'wagmi'
// todo import abi here

const MintNFTBtn = () => {
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

    return (
        <button className='blueBtn' disabled={!write} onClick={()=> write?.()}>Mint Now</button>
    )
}

export default MintNFTBtn