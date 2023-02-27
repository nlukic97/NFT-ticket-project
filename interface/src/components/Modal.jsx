import { Connect } from './wagmi/Connect'
// import { NetworkSwitcher } from './wagmi/NetworkSwitcher'
import "./Modal.css"

const Modal = ({isModalOpen, closeModal}) => {
    return (
        <div className={'modalOverlay'} onClick={closeModal}>
            <Connect closeModal={closeModal} />
        </div>
    )
}

export default Modal