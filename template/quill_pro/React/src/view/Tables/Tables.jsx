import React, { Component } from "react";
import { qpDatatables } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";

class Tables extends Component {
  componentDidMount() {
    qpDatatables();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Tables</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 pb-5">
                    <p className="lead">
                      A demo list of all the types of tables included in
                      QuillPro - Whether it is <strong>Basic</strong>,{" "}
                      <strong>Fully Responsive</strong> or{" "}
                      <strong>Datatables</strong>.
                    </p>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>1. Basic Table</h2>
                    <p>
                      Basic table layout with only <code>.table</code> class.
                    </p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>2. Striped Table</h2>
                    <p>
                      Add <code>.table-striped</code> class to the table to get
                      the striped effect.
                    </p>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>3. Bordered Table</h2>
                    <p>
                      Add <code>.table-bordered</code> class to the table to get
                      the bordered effect.
                    </p>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>4. Hover Rows</h2>
                    <p>
                      Add <code>.table-hover</code> class to the table to get
                      the hover effect.
                    </p>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>5. Dark Colors (Inverted)</h2>
                    <p>
                      Add <code>.table-dark</code> class to the table to get the
                      inverse background color look.
                    </p>
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>6. Small Table</h2>
                    <p>
                      Add <code>.table-sm</code> class to make you table look
                      small.
                    </p>
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jonas</td>
                          <td>Quinn</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "40%" }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-sm bg-gradient"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>7. Stripped (Dark)</h2>
                    <p>
                      Add <code>.thead-striped</code> and{" "}
                      <code>.thead-dark</code> class to <code>.table</code>.
                    </p>
                    <table className="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>8. Bordered (Dark)</h2>
                    <p>
                      Add <code>.thead-bordered</code> and{" "}
                      <code>.thead-dark</code> class to{" "}
                      <code>&lt;table&gt;</code>.
                    </p>
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>9. Hover</h2>
                    <p>
                      Add <code>.table-hover</code> to{" "}
                      <code>&lt;table&gt;</code>.
                    </p>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 pb-5">
                    <h2>10. Hover (Dark)</h2>
                    <p>
                      Add <code>.table-hover</code> and <code>.table-dark</code>{" "}
                      to <code>&lt;table&gt;</code>.
                    </p>
                    <table className="table table-hover table-dark">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colSpan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-12 pb-5">
                    <h2>11. Header Options</h2>
                    <p>
                      Add <code>.thead-dark</code> class to the{" "}
                      <code>thead</code> tag to make the header inverse.
                    </p>
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Add <code>.thead-light</code> class to the{" "}
                      <code>thead</code> tag to get the default background on
                      the <code>thead</code> tag.
                    </p>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-12 pb-5">
                    <h2>12. Contextual Classes</h2>
                    <p>
                      Add <code>.table-*</code> class to the row (
                      <code>tr</code>) tag of your choice to get the look you
                      wish. Eg: <code>.table-active</code> for Active
                      background, or <code>.table-success</code> for Success
                      colored background, etc
                    </p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Column heading</th>
                          <th>Column heading</th>
                          <th>Column heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-active">
                          <th scope="row">Active</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr>
                          <th scope="row">Default</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-primary">
                          <th scope="row">Primary</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-secondary">
                          <th scope="row">Secondary</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-success">
                          <th scope="row">Success</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-danger">
                          <th scope="row">Danger</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-warning">
                          <th scope="row">Warning</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-info">
                          <th scope="row">Info</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-light">
                          <th scope="row">Light</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                        <tr className="table-dark">
                          <th scope="row">Dark</th>
                          <td>Column content</td>
                          <td>Column content</td>
                          <td>Column content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-12 pb-5">
                    <h2>13. Captions</h2>
                    <p>
                      A <code>&lt;caption&gt;</code> functions like a heading
                      for a table. It helps users with screen readers to find a
                      table and understand what it’s about and decide if they
                      want to read it.
                    </p>
                    <table className="table">
                      <caption>List of users</caption>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-12 pb-5">
                    <h2>14. Responsive Table</h2>
                    <p>
                      Add <code>.table-responsive</code> the container holding
                      the <code>.table</code> to make them scroll horizontally
                      on small devices. Resize your window to see it in action.
                    </p>
                    <p>
                      You can take responsiveness to a new level by using
                      breakpoint specific classes. Use{" "}
                      <code>.table-responsive '-sm' '-md' '-lg' '-xl'</code>,
                      instead of just <code>.table-responsive</code>, as needed
                      to create responsive tables up to a particular breakpoint.
                      From that breakpoint and up, the table will behave
                      normally and not scroll horizontally.
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-12 pb-5">
                    <h2>15. Datatables</h2>
                    <p>
                      Add <code>.table-datatable</code> class to the{" "}
                      <code>table</code> tag to create a datatable. You can also
                      add the <code>.table-responsive</code> class to the
                      container holding the <code>table</code> to make it
                      responsive
                    </p>
                    <div className="table-responsive">
                      <table
                        id="datatable-1"
                        className="table table-datatable table-striped table-hover"
                      >
                        <thead>
                          <tr>
                            <th>Film Title</th>
                            <th>Released</th>
                            <th>Studio</th>
                            <th>Worldwide Gross</th>
                            <th>Domestic Gross</th>
                            <th>Foreign Gross</th>
                            <th>Budget</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Frozen</td>
                            <td>2013</td>
                            <td>
                              <span className="badge badge-primary">
                                Disney
                              </span>
                            </td>
                            <td>$1,232,617,000</td>
                            <td>$400,617,000</td>
                            <td>$832,000,000</td>
                            <td>$150,000,000</td>
                          </tr>
                          <tr>
                            <td>Toy Story 3</td>
                            <td>2010</td>
                            <td>
                              <span className="badge badge-info">
                                Disney Pixar
                              </span>
                            </td>
                            <td>$1,063,171,911</td>
                            <td>$415,004,880</td>
                            <td>$648,167,031</td>
                            <td>$200,000,000</td>
                          </tr>
                          <tr>
                            <td>The Lion King</td>
                            <td>1994</td>
                            <td>
                              <span className="badge badge-primary">
                                Disney
                              </span>
                            </td>
                            <td>$987,483,777</td>
                            <td>$422,783,777</td>
                            <td>$564,700,000</td>
                            <td>$45,000,000</td>
                          </tr>
                          <tr>
                            <td>Despicable Me 2</td>
                            <td>2013</td>
                            <td>
                              <span className="badge badge-success">
                                Universal
                              </span>
                            </td>
                            <td>$970,761,885</td>
                            <td>$368,061,265</td>
                            <td>$602,700,620</td>
                            <td>$76,000,000</td>
                          </tr>
                          <tr>
                            <td>Finding Nemo</td>
                            <td>2003</td>
                            <td>
                              <span className="badge badge-danger">Pixar</span>
                            </td>
                            <td>$936,743,261</td>
                            <td>$380,843,261</td>
                            <td>$555,900,000</td>
                            <td>$94,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek 2</td>
                            <td>2004</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$919,838,758</td>
                            <td>$441,226,247</td>
                            <td>$478,612,511</td>
                            <td>$150,000,000</td>
                          </tr>
                          <tr>
                            <td>Ice Age: Dawn of the Dinosaurs</td>
                            <td>2009</td>
                            <td>
                              <span className="badge badge-secondary">Fox</span>
                            </td>
                            <td>$886,686,817</td>
                            <td>$196,573,705</td>
                            <td>$690,113,112 </td>
                            <td>$90,000,000</td>
                          </tr>
                          <tr>
                            <td>Ice Age: Continental Drift</td>
                            <td>2012</td>
                            <td>
                              <span className="badge badge-secondary">Fox</span>
                            </td>
                            <td>$877,244,782</td>
                            <td>$161,321,843</td>
                            <td>$715,922,939</td>
                            <td>$95,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek the Third</td>
                            <td>2007</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$798,958,162</td>
                            <td>$322,719,944</td>
                            <td>$476,238,218</td>
                            <td>$160,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek Forever After</td>
                            <td>2010</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$752,600,867</td>
                            <td>$238,736,787</td>
                            <td>$513,864,080 </td>
                            <td>$165,000,000</td>
                          </tr>
                          <tr>
                            <td>Frozen</td>
                            <td>2013</td>
                            <td>
                              <span className="badge badge-primary">
                                Disney
                              </span>
                            </td>
                            <td>$1,232,617,000</td>
                            <td>$400,617,000</td>
                            <td>$832,000,000</td>
                            <td>$150,000,000</td>
                          </tr>
                          <tr>
                            <td>Toy Story 3</td>
                            <td>2010</td>
                            <td>
                              <span className="badge badge-info">
                                Disney Pixar
                              </span>
                            </td>
                            <td>$1,063,171,911</td>
                            <td>$415,004,880</td>
                            <td>$648,167,031</td>
                            <td>$200,000,000</td>
                          </tr>
                          <tr>
                            <td>The Lion King</td>
                            <td>1994</td>
                            <td>
                              <span className="badge badge-primary">
                                Disney
                              </span>
                            </td>
                            <td>$987,483,777</td>
                            <td>$422,783,777</td>
                            <td>$564,700,000</td>
                            <td>$45,000,000</td>
                          </tr>
                          <tr>
                            <td>Despicable Me 2</td>
                            <td>2013</td>
                            <td>
                              <span className="badge badge-success">
                                Universal
                              </span>
                            </td>
                            <td>$970,761,885</td>
                            <td>$368,061,265</td>
                            <td>$602,700,620</td>
                            <td>$76,000,000</td>
                          </tr>
                          <tr>
                            <td>Finding Nemo</td>
                            <td>2003</td>
                            <td>
                              <span className="badge badge-danger">Pixar</span>
                            </td>
                            <td>$936,743,261</td>
                            <td>$380,843,261</td>
                            <td>$555,900,000</td>
                            <td>$94,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek 2</td>
                            <td>2004</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$919,838,758</td>
                            <td>$441,226,247</td>
                            <td>$478,612,511</td>
                            <td>$150,000,000</td>
                          </tr>
                          <tr>
                            <td>Ice Age: Dawn of the Dinosaurs</td>
                            <td>2009</td>
                            <td>
                              <span className="badge badge-secondary">Fox</span>
                            </td>
                            <td>$886,686,817</td>
                            <td>$196,573,705</td>
                            <td>$690,113,112 </td>
                            <td>$90,000,000</td>
                          </tr>
                          <tr>
                            <td>Ice Age: Continental Drift</td>
                            <td>2012</td>
                            <td>
                              <span className="badge badge-secondary">Fox</span>
                            </td>
                            <td>$877,244,782</td>
                            <td>$161,321,843</td>
                            <td>$715,922,939</td>
                            <td>$95,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek the Third</td>
                            <td>2007</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$798,958,162</td>
                            <td>$322,719,944</td>
                            <td>$476,238,218</td>
                            <td>$160,000,000</td>
                          </tr>
                          <tr>
                            <td>Shrek Forever After</td>
                            <td>2010</td>
                            <td>
                              <span className="badge badge-warning">
                                Dreamworks
                              </span>
                            </td>
                            <td>$752,600,867</td>
                            <td>$238,736,787</td>
                            <td>$513,864,080 </td>
                            <td>$165,000,000</td>
                          </tr>
                        </tbody>
                      </table>
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

export default Tables;
