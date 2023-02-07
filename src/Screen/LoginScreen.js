import React, { useState } from "react";
import "../Components/Helper/Style.css";
import { Input } from "../Components/Helper/Input";
import { Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ForgetScreen from "./ForgetScreen";

const LoginScreen = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // forget
  return (
    <React.Fragment>
      <Modal show={props.showLogin} onHide={props.hideLogin}>
        <div className="modal-component">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">{props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h1>Login Form</h1>
              <Input lableNone="d-block" lable="Password" type="text" />
              <NavLink to="/forget">
                <p className="person-outline" onClick={handleShowLogin}>
                  Forget
                </p>
                <ForgetScreen
                  showLogin={showLogin}
                  hideLogin={handleCloseLogin}
                />
              </NavLink>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default LoginScreen;
