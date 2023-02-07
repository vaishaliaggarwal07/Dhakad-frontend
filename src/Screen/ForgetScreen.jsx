import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Input } from "../Components/Helper/Input";

const ForgetScreen = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showLogin} onHide={props.hideLogin}>
        <div className="modal-component">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">{props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h1>ForgetScreen Form</h1>
              <Input lableNone="d-block" lable="Password" type="text" />
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default ForgetScreen;
