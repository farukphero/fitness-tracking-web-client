import React from "react";

const ConfirmationModal = ({title, successButtonName, message, successAction, modalData, closeModal}) => {
  return (
    <div>
      <input type="checkbox" id="ConfirmationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="ConfirmationModal"
              className="btn"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-primary">
              cencel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
