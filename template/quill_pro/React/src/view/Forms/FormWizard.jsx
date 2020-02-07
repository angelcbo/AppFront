import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpFormWizard } from "../../utils/misc";

class FormWizard extends Component {
  componentDidMount() {
    qpFormWizard();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Forms Wizard</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                User Registration
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-sm bg-gradient"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
              <div className="card-form-wizard">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="rootwizard-1">
                      <ul className="nav nav-pills wizard-header">
                        <li>
                          <a href="#tab1" data-toggle="tab">
                            <span className="main-text">
                              <span className="h3">1. Registration</span>
                              <small>This step has validation</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab2" data-toggle="tab">
                            <span className="main-text">
                              <span className="h3">2. Optional Info</span>
                              <small>No validation required</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab3" data-toggle="tab">
                            <span className="main-text">
                              <span className="h3">3. Review Data</span>
                              <small>
                                Here&#39;s a summary of what you entered.
                              </small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab4" data-toggle="tab">
                            <span className="main-text">
                              <span className="h3">4. Finish</span>
                              <small>You're done!</small>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content clearfix">
                        <div className="tab-pane" id="tab1">
                          <div className="row">
                            <div className="col-md-6">
                              <form method="post" id="wizard-stage-1">
                                <div className="form-group">
                                  <label className="control-label">
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control wizard-stage-1-username"
                                    name="username"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="control-label">
                                    Email address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control wizard-stage-1-email"
                                    name="email"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="control-label">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control wizard-stage-1-password"
                                    name="password"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab2">
                          <div className="row">
                            <div className="col-md-6">
                              <form method="post" id="wizard-stage-2">
                                <div className="form-group">
                                  <label className="control-label">
                                    Telephone
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control wizard-stage-2-optional-1"
                                    name="username"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="control-label">
                                    Your Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control wizard-stage-2-optional-2"
                                    name="email"
                                  />
                                </div>
                                <div className="form-group">
                                  <label className="control-label">
                                    Write something about yourself
                                  </label>
                                  <textarea className="form-control wizard-stage-2-optional-3" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab3">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-wizard-review-block" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab4">
                          <div className="row">
                            <div className="col-md-6">
                              <h2>You're Done!</h2>
                              <p>
                                Thanks for filling out this form. We&#39;ll get
                                back to you shortly.
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="pager wizard">
                          <li
                            className="previous first"
                            style={{ display: "none" }}
                          >
                            <a className="btn btn-light" href="#!">
                              <i className="batch-icon batch-icon-arrow-left" />
                              First
                            </a>
                          </li>
                          <li className="previous">
                            <a className="btn btn-secondary" href="#!">
                              <i className="batch-icon batch-icon-arrow-left" />
                            </a>
                          </li>
                          <li className="next last" style={{ display: "none" }}>
                            <a className="btn btn-primary" href="#!">
                              Last
                            </a>
                          </li>
                          <li className="next">
                            <a className="btn btn-primary" href="#!">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default FormWizard;
