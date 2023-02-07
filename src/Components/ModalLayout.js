import "./modal.css";
const ModalLayout = (props) => {
  return (
    <div
      className={`modal fade custom-modal ${props.className}`}
      id={props.modalId}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title mx-auto" id="exampleModalLabel">
              {props.modalTitle}
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={`modal-body ${props.bodyClassName}`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLayout;
