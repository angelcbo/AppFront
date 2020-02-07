import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpFormValidation } from "../../utils/misc";
import { qpDemoFormValidation } from "../../utils/demo";

class FormValidation extends Component {
  componentDidMount() {
    qpFormValidation();
    qpDemoFormValidation(); // Controls the validate button for the demo
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Forms Validation</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="lead">
                      Click 'Validate' below to see the validation in action
                    </p>
                    <form action="" id="registration-form">
                      <div className="form-group">
                        <label htmlFor="email" className="active">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          data-validation="email"
                          placeholder="Enter Email"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="username" className="active">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="user"
                          id="user"
                          data-validation="length alphanumeric"
                          data-validation-length="3-12"
                          data-validation-error-msg="Username has to be an alphanumeric value (3-12 chars)"
                          placeholder="Username"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password1" className="active">
                          Repeat Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password1"
                          name="pass_confirmation"
                          data-validation="strength"
                          placeholder="Password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="active">
                          Birth date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="birth"
                          data-validation="birthdate"
                          data-validation-help="yyyy-mm-dd"
                          id="birth"
                          placeholder="Birth Date"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="country" className="active">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          id="country"
                          placeholder="Country"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="presentation">
                          User Presentation (100 characters max)
                        </label>
                        <textarea
                          className="form-control"
                          name="presentation"
                          id="presentation"
                          rows="3"
                        />
                      </div>
                      <button
                        id="validate"
                        type="button"
                        className="btn btn-primary"
                      >
                        Validate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default FormValidation;
