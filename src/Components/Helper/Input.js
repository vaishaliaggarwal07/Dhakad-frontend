import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Input = (props) => {
  return (
    <React.Fragment>
      <div className="mb-2 col-md-12">
        <Form.Label className={props.lableNone}>{props.lable}</Form.Label>
        <Form.Control
          type={props.type}
          name={props.name}
          controlid={props.controlId}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          autoComplete="off"
          required={props.required}
        />
      </div>
    </React.Fragment>
  );
};
Input.defaultProps = {
  lable: "",
  lableNone: "d-none",
};

const InputButton = (props) => {
  return (
    <React.Fragment>
      <Form.Group className={props.TextTopGroup}>
        <input
          type="checkbox"
          onChange={props.onChangeTerm}
          className="input-form-checkbox"
        />
        <Form.Text>
          {props.accountDefaultStatus}
          <NavLink
            to="terms-and-conditions"
            className="modal-form-sign-in-option"
            onClick={props.onClickTop}
          >
            <span>{props.acountDefaultOption}</span>
          </NavLink>
        </Form.Text>
        <Form.Text>
          <span>{props.acountDefaultOptionText}</span>
        </Form.Text>
        <Form.Text>
          {props.accountDefaultStatus1}
          <NavLink
            to="/privacy-policy"
            className="modal-form-sign-in-option "
            onClick={props.onClickTop}
          >
            <span>{props.acountDefaultOption1}</span>
          </NavLink>
        </Form.Text>
      </Form.Group>
      <Button type={props.type} className="model-submit-btn mt-2" size="lg">
        <span onClick={props.submitNavLink} className="nav-link">
          {props.buttonTitle}
        </span>
      </Button>
      <Form.Group className={props.TextBottomGroup}>
        <Form.Text>
          {props.accountStatus}
          <Link
            to={props.navLinkBottom}
            className="modal-form-sign-in-option"
            onClick={props.onClickBottom}
            disable={props.disable}
          >
            <span>{props.acountOption}</span>
          </Link>
        </Form.Text>
      </Form.Group>
    </React.Fragment>
  );
};

const InputButtonOTP = (props) => {
  return (
    <React.Fragment>
      <Form.Group className={props.TextTopGroup}>
        <input
          type="checkbox"
          onChange={props.onChangeTerm}
          className="input-form-checkbox"
        />
        <Form.Text>
          {props.accountDefaultStatus}
          <NavLink
            to="/terms-and-conditions"
            className="modal-form-sign-in-option"
            onClick={props.onClickTop}
          >
            <span>{props.acountDefaultOption}</span>
          </NavLink>
        </Form.Text>
        <Form.Text>
          <span>{props.acountDefaultOptionText}</span>
        </Form.Text>
        <Form.Text>
          {props.accountDefaultStatus1}
          <NavLink
            to="/privacy-policy"
            className="modal-form-sign-in-option "
            onClick={props.onClickTop}
          >
            <span>{props.acountDefaultOption1}</span>
          </NavLink>
        </Form.Text>
      </Form.Group>
      
      <Form.Group className={props.TextBottomGroup}>
        <Form.Text>
          {props.accountStatus}
          <Link
            to={props.navLinkBottom}
            className="modal-form-sign-in-option"
            onClick={props.onClickBottom}
            disable={props.disable}
          >
            <span>{props.acountOption}</span>
          </Link>
        </Form.Text>
      </Form.Group>
    </React.Fragment>
  );
};



InputButton.defaultProps = {
  Textgroup: "text-center mb-2 d-none",
  CheckBoxClass: "d-none",
  accountDefaultStatus: "",
  acountDefaultOption: "",
  acountDefaultOption1: "",
  accountStatus: "",
  acountOption: "",
};
export { Input, InputButton ,InputButtonOTP};
