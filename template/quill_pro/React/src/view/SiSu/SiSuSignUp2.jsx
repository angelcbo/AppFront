import React, { Component } from "react";
import { qpRequiredMisc } from "../../utils/misc";
import "./SiSu.css";

class SiSuSignUp extends Component {
  componentDidMount() {
    qpRequiredMisc();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="right-column sisu">
            <div className="row mx-0">
              <div
                className="col-md-7 order-md-2 signin-right-column px-5 bg-dark"
                data-qp-bg-image="bg-image-2.jpg"
              >
                <a className="signin-logo d-sm-block d-md-none" to="#!">
                  <img
                    src="assets/img/logo-white.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <h1 className="display-4">Sign Up For An Account Today</h1>
                <p className="lead mb-5">
                  Big data latte SpaceTeam unicorn cortado hacker physical
                  computing paradigm.
                </p>
              </div>
              <div className="col-md-5 order-md-1 signin-left-column bg-white px-5">
                <a className="signin-logo d-sm-none d-md-block" to="#!">
                  <img
                    src="assets/img/logo-dark.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&#39;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="newsletter-signup"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="newsletter-signup"
                    >
                      I want to receive weekly Newsletters
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-gradient btn-block"
                  >
                    <i className="batch-icon batch-icon-quill" />
                    Sign Up
                  </button>
                  <hr />
                  <p className="text-center">
                    Already Have An Account?{" "}
                    <a href="sisu-signin.html">Sign In here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SiSuSignUp;
