import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpNotificationToastr } from "../../utils/demo";

class UINotifications extends Component {
  componentDidMount() {
    qpNotificationToastr();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Notifications (Toastr)</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Toastr Demo</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label htmlFor="title" className="control-label">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter a title ..."
                        className="form-control"
                        id="title"
                        defaultValue="My Epic Title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="control-label">
                        Message
                      </label>
                      <textarea
                        placeholder="Enter a message ..."
                        rows="3"
                        id="message"
                        className="form-control"
                        defaultValue="This is where you put in more information about the notification."
                      />
                    </div>
                    <div className="form-group">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue="checked"
                            id="closeButton"
                            defaultChecked
                          />
                          Close Button
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue="checked"
                            id="addBehaviorOnToastClick"
                          />
                          Add behavior on toast click
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue="checked"
                            id="debugInfo"
                          />
                          Debug
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1" />
                  <div className="col-sm-2">
                    <div id="toastTypeGroup" className="form-group">
                      <div className="form-group">
                        <label>Toast Type</label>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              checked=""
                              defaultValue="success"
                              name="toasts"
                            />
                            Success
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="info"
                              name="toasts"
                            />
                            Info
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="warning"
                              name="toasts"
                            />
                            Warning
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="error"
                              name="toasts"
                            />
                            Error
                          </label>
                        </div>
                      </div>
                    </div>
                    <div id="positionGroup" className="form-group">
                      <div className="form-group">
                        <label>Position</label>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              checked=""
                              defaultValue="toast-top-right"
                              name="positions"
                            />
                            Top Right
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="toast-bottom-right"
                              name="positions"
                            />
                            Bottom Right
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="toast-bottom-left"
                              name="positions"
                            />
                            Bottom Left
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="toast-top-left"
                              name="positions"
                            />
                            Top Left
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="toast-top-full-width"
                              name="positions"
                            />
                            Top Full Width
                          </label>
                        </div>
                        <div className="radio">
                          <label className="radio">
                            <input
                              type="radio"
                              defaultValue="toast-bottom-full-width"
                              name="positions"
                            />{" "}
                            Bottom Full Width
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label htmlFor="showEasing" className="control-label">
                        Show Easing
                      </label>
                      <input
                        type="text"
                        defaultValue="swing"
                        className="form-control"
                        placeholder="swing, linear"
                        id="showEasing"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="hideEasing" className="control-label">
                        Hide Easing
                      </label>
                      <input
                        type="text"
                        defaultValue="linear"
                        className="form-control"
                        placeholder="swing, linear"
                        id="hideEasing"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="showMethod" className="control-label">
                        Show Method
                      </label>
                      <input
                        type="text"
                        defaultValue="fadeIn"
                        className="form-control"
                        placeholder="show, fadeIn, slideDown"
                        id="showMethod"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="hideMethod" className="control-label">
                        Hide Method
                      </label>
                      <input
                        type="text"
                        defaultValue="fadeOut"
                        className="form-control"
                        placeholder="hide, fadeOut, slideUp"
                        id="hideMethod"
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label htmlFor="showDuration" className="control-label">
                        Show Duration
                      </label>
                      <input
                        type="text"
                        defaultValue="300"
                        className="form-control"
                        placeholder="ms"
                        id="showDuration"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="hideDuration" className="control-label">
                        Hide Duration
                      </label>
                      <input
                        type="text"
                        defaultValue="1000"
                        className="form-control"
                        placeholder="ms"
                        id="hideDuration"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeOut" className="control-label">
                        Time out
                      </label>
                      <input
                        type="text"
                        defaultValue="5000"
                        className="form-control"
                        placeholder="ms"
                        id="timeOut"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeOut" className="control-label">
                        Extended time out
                      </label>
                      <input
                        type="text"
                        defaultValue="1000"
                        className="form-control"
                        placeholder="ms"
                        id="extendedTimeOut"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-sm-12">
                    <button
                      id="showtoast"
                      className="btn btn-primary"
                      type="button"
                    >
                      Show Toast
                    </button>
                    <button
                      id="cleartoasts"
                      className="btn btn-outline-danger"
                      type="button"
                    >
                      Clear Toasts
                    </button>
                    <button
                      id="clearlasttoast"
                      className="btn btn-outline-danger"
                      type="button"
                    >
                      Clear Last Toast
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <pre id="toastrOptions" className="bg-primary p-5" />
                  </div>
                </div>
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

export default UINotifications;
