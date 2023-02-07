import React from "react";
import { Form, Stack, Col } from "react-bootstrap";

import "../Style.css";
const UserDetailForm = (props) => {
  return (
    <React.Fragment>
      <div className="user-detail-sec shadow-lg">
        <div className="user-detail-sec-inner col-md-10 mx-auto">
          <Stack className="col-md-10 mx-auto form-header text-center mb-5">
            <h2>{props.FormTitle}</h2>
          </Stack>
          <Form
            onSubmit={props.onSubmit}
            id={props.formId}
            autoComplete={"off"}
          >
            {props.children}
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const CoulmRow = (props) => {
  return (
    <React.Fragment>
      <Col sm={props.columWidth}>
        <Form.Group className={props.columStyle} controlid="formBasicName">
          {props.children}
        </Form.Group>
      </Col>
    </React.Fragment>
  );
};

export { UserDetailForm, CoulmRow };
