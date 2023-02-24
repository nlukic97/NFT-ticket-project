import { createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'


export const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
})

    