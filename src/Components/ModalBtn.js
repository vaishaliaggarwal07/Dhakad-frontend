import React from "react";
const ModalBtn = (props) => {
  return (
    <React.Fragment>
      <div className="modal-submit-btn">
        <button
          type={props.modalBtnType}
          onClick={props.onClick}
          className={`btn col-12 ${props.btnClass}`}
        >
          {props.modalBtnTitle}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ModalBtn;
