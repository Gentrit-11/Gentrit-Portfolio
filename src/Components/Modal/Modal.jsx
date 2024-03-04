import "./Modal.css";
const Modal = ({ isOpen, closeModal, modalContent }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'hidden'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{modalContent.isError ? 'Error!' : 'Success!'}</h2>
        </div>
        <div className="modal-body">
          <p>{modalContent.message}</p>
          {modalContent.isError && <span>Please fill out all fields.</span>}
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal