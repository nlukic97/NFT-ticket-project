import "./Modal.css"

const Modal = ({closeModal}) => {
    return (
        <div className="modal" onClick={closeModal}></div>
    )
}

export default Modal