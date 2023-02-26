import { Connect } from './wagmi/Connect'
import { NetworkSwitcher } from './wagmi/NetworkSwitcher'
import "./Modal.css"
import { useAccount } from 'wagmi'

const Modal = ({closeModal}) => {
    const { isConnected } = useAccount()
    return (
        // <div className="modal" onClick={closeModal}>
        <div className="modal">
            <Connect />
            {isConnected ? <NetworkSwitcher/> : null}
            <button onClick={closeModal}>CloseModal</button>
        </div>
    )
}

export default Modal