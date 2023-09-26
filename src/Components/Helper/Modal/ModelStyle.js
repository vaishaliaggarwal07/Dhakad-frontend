import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

const ModelStyle = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
      if(props.handleClose){
          props.handleClose(false)
      }
      setShow(false);
  }
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <span variant="primary" onClick={handleShow}>
        {props.modalBtn}
      </span>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-component">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">{props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={props.className}>
            <Form>{props.children}</Form>
          </Modal.Body>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModelStyle;
