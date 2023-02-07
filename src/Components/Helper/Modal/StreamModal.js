import React from "react";
import ModalLayout from "../../ModalLayout";
const StrModal = ({ modalId, onClick, id }) => {
  return (
    <React.Fragment>
      <ModalLayout
        modalId={modalId}
        modalTitle={""}
        className="streamModalOuter"
      >
        <div className="str-warning p-4">
          <h4>Once started , you have 9 hours to watch this movie!</h4>
        </div>
        <div className="d-flex justify-content-between px-4 py-3">
          <button
            className="custom-Str-btn out-line-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Not Now
          </button>
          <button
            type="button"
            className="custom-Str-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClick}
          >
            Play Now
          </button>
        </div>
      </ModalLayout>
    </React.Fragment>
  );
};

export default StrModal;
