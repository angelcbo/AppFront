import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UIOtherBootstrapElements extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Other Bootstrap 4 Elements</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <h2>0. Navbar</h2>
                    <h3>Normal</h3>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-dark.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-1"
                        aria-controls="navbarSupportedContent-1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-1"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-primary btn-gradient"
                                type="button"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-white</h3>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-dark.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-2"
                        aria-controls="navbarSupportedContent-2"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-2"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-secondary"
                                type="button"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-dark</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-3"
                        aria-controls="navbarSupportedContent-3"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-3"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-primary</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-4"
                        aria-controls="navbarSupportedContent-4"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-4"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-secondary"
                                type="button"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-secondary</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-5"
                        aria-controls="navbarSupportedContent-5"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-5"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-success</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-6"
                        aria-controls="navbarSupportedContent-6"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-6"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-warning" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-danger</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-7"
                        aria-controls="navbarSupportedContent-7"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-7"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-info" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-warning</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-8"
                        aria-controls="navbarSupportedContent-8"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-8"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-success" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>bg-info</h3>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                      <a className="navbar-brand" to="#!">
                        <img
                          src="assets/img/logo-white.png"
                          width="145"
                          height="32.3"
                          alt="QuillPro"
                        />
                      </a>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent-9"
                        aria-controls="navbarSupportedContent-9"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent-9"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" to="#!">
                              Home <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" to="#!">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" to="#!">
                              Disabled
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="http://example.com"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown link
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" to="#!">
                                Action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Another action
                              </a>
                              <a className="dropdown-item" to="#!">
                                Something else here
                              </a>
                            </div>
                          </li>
                        </ul>
                        <form className="my-2 my-lg-0 no-waves-effect">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                              aria-label="Search for..."
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-danger" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>1. Progress Bars</h2>
                    <h3>Default</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <br />
                    <br />
                    <h3>Labels</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                    <br />
                    <br />
                    <h3>Height</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-sm"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-lg"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <br />
                    <br />
                    <h3>Backgrounds</h3>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-purple"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <br />
                    <br />
                    <h3>Multiple bars</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "15%" }}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <br />
                    <br />
                    <h3>Striped bars</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-danger"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <br />
                    <br />
                    <h3>Animated stripes</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>2. Alert</h2>
                    <h3>Normal</h3>
                    <div className="alert alert-primary" role="alert">
                      <strong>Holy guacamole!</strong> This is a primary alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-secondary" role="alert">
                      <strong>Holy guacamole!</strong> This is a secondary alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-success" role="alert">
                      <strong>Holy guacamole!</strong> This is a success alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-danger" role="alert">
                      <strong>Holy guacamole!</strong> This is a danger alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-warning" role="alert">
                      <strong>Holy guacamole!</strong> This is a warning alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-info" role="alert">
                      <strong>Holy guacamole!</strong> This is a info alert with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-light" role="alert">
                      <strong>Holy guacamole!</strong> This is a light alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <div className="alert alert-dark" role="alert">
                      <strong>Holy guacamole!</strong> This is a dark alert with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
                    <br />
                    <h3>Dismissible</h3>
                    <div className="alert alert-primary" role="alert">
                      <strong>Holy guacamole!</strong> This is a primary alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-secondary" role="alert">
                      <strong>Holy guacamole!</strong> This is a secondary alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-success" role="alert">
                      <strong>Holy guacamole!</strong> This is a success alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-danger" role="alert">
                      <strong>Holy guacamole!</strong> This is a danger alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-warning" role="alert">
                      <strong>Holy guacamole!</strong> This is a warning alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-info" role="alert">
                      <strong>Holy guacamole!</strong> This is a info alert with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-light" role="alert">
                      <strong>Holy guacamole!</strong> This is a light alert
                      with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-dark" role="alert">
                      <strong>Holy guacamole!</strong> This is a dark alert with{" "}
                      <a to="#!" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>3. Badge &amp; Pills</h2>
                    <h3>Badge - Contextual variations</h3>
                    <span className="badge badge-primary">Primary</span>
                    <span className="badge badge-secondary">Secondary</span>
                    <span className="badge badge-success">Success</span>
                    <span className="badge badge-danger">Danger</span>
                    <span className="badge badge-warning">Warning</span>
                    <span className="badge badge-info">Info</span>
                    <span className="badge badge-light">Light</span>
                    <span className="badge badge-dark">Dark</span>
                    <br />
                    <br />
                    <h3>Pill Badges</h3>
                    <span className="badge badge-pill badge-primary">
                      Primary
                    </span>
                    <span className="badge badge-pill badge-secondary">
                      Secondary
                    </span>
                    <span className="badge badge-pill badge-success">
                      Success
                    </span>
                    <span className="badge badge-pill badge-danger">
                      Danger
                    </span>
                    <span className="badge badge-pill badge-warning">
                      Warning
                    </span>
                    <span className="badge badge-pill badge-info">Info</span>
                    <span className="badge badge-pill badge-light">Light</span>
                    <span className="badge badge-pill badge-dark">Dark</span>
                    <br />
                    <br />
                    <h3>Links Badges</h3>
                    <a to="#!" className="badge badge-primary">
                      Primary
                    </a>
                    <a to="#!" className="badge badge-secondary">
                      Secondary
                    </a>
                    <a to="#!" className="badge badge-success">
                      Success
                    </a>
                    <a to="#!" className="badge badge-danger">
                      Danger
                    </a>
                    <a to="#!" className="badge badge-warning">
                      Warning
                    </a>
                    <a to="#!" className="badge badge-info">
                      Info
                    </a>
                    <a to="#!" className="badge badge-light">
                      Light
                    </a>
                    <a to="#!" className="badge badge-dark">
                      Dark
                    </a>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>4. Breadcrumb</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Home
                        </li>
                      </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a to="#!">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Library
                        </li>
                      </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a to="#!">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a to="#!">Library</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Data
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>5. Carousel</h2>
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        />
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        />
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/slider-1.jpg"
                            alt="First slide"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light">First slide label</h5>
                            <p className="text-light">
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/slider-2.jpg"
                            alt="Second slide"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light">Second slide label</h5>
                            <p className="text-light">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/slider-3.jpg"
                            alt="Third slide"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light">Third slide label</h5>
                            <p className="text-light">
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur.
                            </p>
                          </div>
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <i className="batch-icon batch-icon-arrow-left batch-icon-lg" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                      >
                        <i className="batch-icon batch-icon-arrow-right batch-icon-lg" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>6. Jumbotron</h2>
                    <div className="jumbotron">
                      <h1 className="display-1">Hello, world!</h1>
                      <p className="lead">
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                      </p>
                      <hr className="my-4" />
                      <p>
                        It uses utility classes for typography and spacing to
                        space content out within the larger container.
                      </p>
                      <p className="lead">
                        <a
                          className="btn btn-primary btn-lg"
                          to="#!"
                          role="button"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h2>7. Jumbotron - Fluid</h2>
                    <div className="jumbotron jumbotron-fluid">
                      <div className="container">
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">
                          This is a modified jumbotron that occupies the entire
                          horizontal space of its parent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h2>8. List Group</h2>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.1. Basic</h3>
                    <ul className="list-group">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.2. Active</h3>
                    <ul className="list-group">
                      <li className="list-group-item active">
                        Cras justo odio
                      </li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.3. Disabled items</h3>
                    <ul className="list-group">
                      <li className="list-group-item disabled">
                        Cras justo odio
                      </li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.4. Link</h3>
                    <div className="list-group">
                      <a to="#!" className="list-group-item active">
                        Cras justo odio
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action"
                      >
                        Dapibus ac facilisis in
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action"
                      >
                        Morbi leo risus
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action"
                      >
                        Porta ac consectetur ac
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action disabled"
                      >
                        Vestibulum at eros
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.5. Buttons</h3>
                    <div className="list-group">
                      <button
                        type="button"
                        className="list-group-item list-group-item-action active"
                      >
                        Cras justo odio
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        Dapibus ac facilisis in
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        Morbi leo risus
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        Porta ac consectetur ac
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                        disabled
                      >
                        Vestibulum at eros
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <h3>8.6. Flush</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>8.7. Contextual Classes</h3>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>

                      <li className="list-group-item list-group-item-primary">
                        This is a primary list group item
                      </li>
                      <li className="list-group-item list-group-item-secondary">
                        This is a secondary list group item
                      </li>
                      <li className="list-group-item list-group-item-success">
                        This is a success list group item
                      </li>
                      <li className="list-group-item list-group-item-danger">
                        This is a danger list group item
                      </li>
                      <li className="list-group-item list-group-item-warning">
                        This is a warning list group item
                      </li>
                      <li className="list-group-item list-group-item-info">
                        This is a info list group item
                      </li>
                      <li className="list-group-item list-group-item-light">
                        This is a light list group item
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        This is a dark list group item
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>8.8. Contextual Classes (Linked)</h3>
                    <div className="list-group">
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action"
                      >
                        Dapibus ac facilisis in
                      </a>

                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-primary"
                      >
                        This is a primary list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-secondary"
                      >
                        This is a secondary list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-success"
                      >
                        This is a success list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-danger"
                      >
                        This is a danger list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-warning"
                      >
                        This is a warning list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-info"
                      >
                        This is a info list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-light"
                      >
                        This is a light list group item
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action list-group-item-dark"
                      >
                        This is a dark list group item
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>8.9. With Badges 1</h3>
                    <ul className="list-group">
                      <li className="list-group-item justify-content-between">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">
                          14
                        </span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">
                          2
                        </span>
                      </li>
                      <li className="list-group-item justify-content-between">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">
                          1
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3>8.10. With Badges 2</h3>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">
                          14
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">
                          2
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">
                          1
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 mb-5">
                    <h3>8.11. Custom Content</h3>
                    <div className="list-group">
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action flex-column align-items-start active"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                          <small>3 days ago</small>
                        </div>
                        <p className="mb-1">
                          Donec id elit non mi porta gravida at eget metus.
                          Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">
                          Donec id elit non mi porta gravida at eget metus.
                          Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small className="text-muted">
                          Donec id elit non mi porta.
                        </small>
                      </a>
                      <a
                        to="#!"
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">List group item heading</h5>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">
                          Donec id elit non mi porta gravida at eget metus.
                          Maecenas sed diam eget risus varius blandit.
                        </p>
                        <small className="text-muted">
                          Donec id elit non mi porta.
                        </small>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 my-5">
                    <h2>9. Navs</h2>
                    <h3>9.1. Default Nav</h3>
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link active" to="#!">
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" to="#!">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>9.2. Centered Nav</h3>
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a className="nav-link active" to="#!">
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" to="#!">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>9.3. Right Nav</h3>
                    <ul className="nav justify-content-end">
                      <li className="nav-item">
                        <a className="nav-link active" to="#!">
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" to="#!">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>9.4. Vertical Nav</h3>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" to="#!">
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" to="#!">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" to="#!">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 my-5">
                    <h2>10. Pagination</h2>
                    <h3>10.1. Default</h3>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" to="#!">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <br />
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            to="#!"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>10.2. Centered</h3>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link" to="#!">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <br />
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a
                            className="page-link"
                            to="#!"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>10.3. Right</h3>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" to="#!">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <br />
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item">
                          <a
                            className="page-link"
                            to="#!"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-12 mb-5">
                    <h3>10.4. Sizing</h3>
                    <h4>Large</h4>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination pagination-lg">
                        <li className="page-item disabled">
                          <a className="page-link" to="#!">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <br />
                    <h4>Small</h4>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination pagination-sm">
                        <li className="page-item disabled">
                          <a className="page-link" to="#!">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" to="#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" to="#!">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
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

export default UIOtherBootstrapElements;
