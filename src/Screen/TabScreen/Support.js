import React, { useState } from "react";
import { Formik } from "formik";
import { connect, useDispatch } from "react-redux";
import { supportChat } from "../../Redux/Actions/support";
const Support = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();

  var resetForms = () => {
    setTimeout(() => {
      return document.getElementById("supportChatForm").reset();
    }, 2000);
  };
  //
  return (
    <React.Fragment>
      <div className="main-content">
        <div className="support-from col-md-6 mx-auto">
          <div className="support-header">
            <div className="support-container col-md-10 mx-auto">
              <h1 className="text-center mb-5">Dhaakad Support Centre </h1>
              <div className="support-form-section">
                <Formik
                  initialValues={{
                    title: "",
                    email: "",
                    description: "",
                  }}
                  enableReinitialize={true}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    const payload = {
                      title: title,
                      email: email,
                      description: description,
                    };
                    dispatch(supportChat(payload));
                    setSubmitting(false);
                    resetForm();
                    resetForms();
                  }}
                >
                  {({ values, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} id="supportChatForm">
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your title"
                          name="title"
                          onChange={(e) => setTitle(e.target.value)}
                          onBlur={handleBlur}
                          defaultValue={values.title}
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email address"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={handleBlur}
                          defaultValue={values.email}
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        <div className="form-group">
                          <label className="form-label">
                            How can we help you today?
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            onBlur={handleBlur}
                            defaultValue={values.description}
                            placeholder="Enter your message..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="custom-support-btn">
                        <button
                          type="submit"
                          disabled={!title || !email || !description}
                          className="btn btn-primary support-btn btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { supportChat })(Support);
