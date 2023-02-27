// todo check this, no longer imported anywhere
import { useNetwork, useSwitchNetwork } from 'wagmi'

export function NetworkSwitcher() {
  const { chain } = useNetwork()

  const { chains, isLoading, switchNetwork } = useSwitchNetwork()

  if (!chain) return null

  if(switchNetwork){
    if(chain?.unsupported === true && isLoading === false){
      switchNetwork(chains[0].id) // switch to avalanche
    }
  }
}
