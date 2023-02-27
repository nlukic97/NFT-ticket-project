import { Connect } from './wagmi/Connect'
// import { NetworkSwitcher } from './wagmi/NetworkSwitcher'
import "./Modal.css"
// import { useAccount } from 'wagmi'

const Modal = ({closeModal}) => {
    // const { isConnected } = useAccount()
    return (
        <div className="modalOverlay" onClick={closeModal}>
            <Connect />
            {/* {isConnected ? <NetworkSwitcher/> : null} */}
        </div>
    )
}

export default Modal