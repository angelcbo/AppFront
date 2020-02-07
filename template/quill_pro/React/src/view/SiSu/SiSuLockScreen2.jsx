import React, { Component } from "react";
import { qpRequiredMisc } from "../../utils/misc";
import "./SiSu.css";

class SisuLockScreen2 extends Component {
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
                data-qp-bg-image="bg-image-4.jpg"
              >
                <a className="signin-logo d-sm-block d-md-none" href="#!">
                  <img
                    src="assets/img/logo-white.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <h1 className="display-4">Locked</h1>
                <p className="lead mb-5">
                  Workflow entrepreneur big data workflow ship it ship it
                  quantitative.
                </p>
              </div>
              <div className="col-md-5 order-md-1 signin-left-column bg-white px-5">
                <a
                  className="signin-logo d-sm-none d-md-block text-center"
                  href="#!"
                >
                  <img
                    src="assets/img/logo-dark.png"
                    width="145"
                    height="32.3"
                    alt="QuillPro"
                  />
                </a>
                <div className="profile-picture profile-picture-lg bg-gradient bg-primary">
                  <img
                    src="assets/img/profile-pic.jpg"
                    width="44"
                    height="44"
                    alt="Profile"
                  />
                </div>
                <form className="pt-3">
                  <p>
                    If this is your account, just enter your password to
                    continue.
                  </p>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-gradient btn-block"
                  >
                    <i className="batch-icon batch-icon-key" />
                    Sign In
                  </button>
                  <hr />
                  <p className="text-center">
                    Not Your Account?{" "}
                    <a href="sisu-signin">Sign In with another account</a>
                  </p>
                  <p className="text-center">
                    No Account? <a href="sisu-signup">Sign Up here</a>
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

export default SisuLockScreen2;
