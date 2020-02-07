import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UIModalBoxes extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Modal Boxes</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Modal Samples</div>
              <div className="card-body table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Modal Type</th>
                      <th>Try A Demo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Default</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Launch demo modal
                        </button>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Scroll</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                        >
                          Launch demo modal
                        </button>

                        <div
                          className="modal fade"
                          id="exampleModalLong"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLongTitle"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLongTitle"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                                <p>
                                  Cras mattis consectetur purus sit amet
                                  fermentum. Cras justo odio, dapibus ac
                                  facilisis in, egestas eget quam. Morbi leo
                                  risus, porta ac consectetur ac, vestibulum at
                                  eros.
                                </p>
                                <p>
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Vivamus sagittis lacus
                                  vel augue laoreet rutrum faucibus dolor
                                  auctor.
                                </p>
                                <p>
                                  Aenean lacinia bibendum nulla sed consectetur.
                                  Praesent commodo cursus magna, vel scelerisque
                                  nisl consectetur et. Donec sed odio dui. Donec
                                  ullamcorper nulla non metus auctor fringilla.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Vertically centered</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          Launch demo modal
                        </button>

                        <div
                          className="modal fade"
                          id="exampleModalCenter"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLongTitle"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Tooltips and popovers</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalToolTip"
                        >
                          Launch Demo Modal
                        </button>

                        <div
                          className="modal fade"
                          id="exampleModalToolTip"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalToolTip"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLongTitle"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <h5>Popover in a modal</h5>
                                <p>
                                  This{" "}
                                  <a
                                    to="#!"
                                    role="button"
                                    className="btn btn-secondary popover-test"
                                    data-toggle="popover"
                                    title="Popover title"
                                    data-content="Popover body content is set in this attribute."
                                  >
                                    button
                                  </a>{" "}
                                  triggers a popover on click.
                                </p>
                                <hr />
                                <h5>Tooltips in a modal</h5>
                                <p>
                                  <a
                                    to="#!"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Default tooltip"
                                  >
                                    This link
                                  </a>{" "}
                                  and{" "}
                                  <a
                                    to="#!"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Default tooltip"
                                  >
                                    that link
                                  </a>{" "}
                                  have tooltips on hover.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Using the grid</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalGrid"
                        >
                          Launch Demo Modal
                        </button>

                        <div
                          className="modal"
                          id="exampleModalGrid"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLongTitle"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLongTitle"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-4">.col-md-4</div>
                                    <div className="col-md-4 ml-auto">
                                      .col-md-4 .ml-auto
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 ml-auto">
                                      .col-md-3 .ml-auto
                                    </div>
                                    <div className="col-md-2 ml-auto">
                                      .col-md-2 .ml-auto
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6 ml-auto">
                                      .col-md-6 .ml-auto
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-9">
                                      Level 1: .col-sm-9
                                      <div className="row">
                                        <div className="col-8 col-sm-6">
                                          Level 2: .col-8 .col-sm-6
                                        </div>
                                        <div className="col-4 col-sm-6">
                                          Level 2: .col-4 .col-sm-6
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sizes - Large</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target=".bd-example-modal-sizes"
                        >
                          Launch Demo Modal
                        </button>

                        <div
                          className="modal fade bd-example-modal-sizes"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="myLargeModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sizes - Small</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target=".bd-example-modal-sm"
                        >
                          Launch Demo Modal
                        </button>

                        <div
                          className="modal fade bd-example-modal-sm"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="mySmallModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default UIModalBoxes;
