import { ConnectWalletLightbox } from './wagmi/ConnectWalletLightbox'
import "./ConnectWalletModal.css"

const ConnectWalletModal = ({isModalOpen, closeModal}) => {
    return (
        <div className={'modalOverlay'} onClick={closeModal}>
            <ConnectWalletLightbox closeModal={closeModal} />
        </div>
    )
}

export default ConnectWalletModal