import React, { Component } from "react";
import { qpRequiredMisc } from "../../utils/misc";
import "./SiSu.css";

class SiSuForgotPassword2 extends Component {
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
                data-qp-bg-image="bg-image-3.jpg"
              >
                <a className="signin-logo d-sm-block d-md-none" to="#!">
                  <img
                    src="assets/img/logo-white.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <h1 className="display-4">Password Reset Request</h1>
                <p className="lead mb-5">
                  Responsive driven intuitive actionable insight hacker driven
                  personas SpaceTeam.
                </p>
              </div>
              <div className="col-md-5 order-md-1 signin-left-column bg-white px-5">
                <br />
                <br />
                <a className="signin-logo d-sm-none d-md-block" to="#!">
                  <img
                    src="assets/img/logo-dark.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <form>
                  <p>
                    We&#39;ll send the password reset instructions to your
                    email.
                  </p>
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-gradient btn-block"
                  >
                    <i className="batch-icon batch-icon-mail" />
                    Send Reset Instructions
                  </button>
                  <hr />
                  <p className="text-center">
                    Did You Remember Your Password?{" "}
                    <a href="sisu-signin-2.html">Sign In</a>
                  </p>
                  <p className="text-center">
                    No Account? <a href="sisu-signup-2.html">Sign Up here</a>
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

export default SiSuForgotPassword2;
