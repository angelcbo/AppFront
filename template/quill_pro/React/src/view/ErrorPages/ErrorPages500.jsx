import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class ErrorPages500 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="right-column">
            <main className="main-content p-5" role="main">
              <div className="row">
                <div className="col-md-12 my-5 text-center">
                  <div className="text-danger">
                    <i className="batch-icon batch-icon-browser-close batch-icon-xxl" />
                    <i className="batch-icon batch-icon-browser-close batch-icon-xxl" />
                    <i className="batch-icon batch-icon-browser-close batch-icon-xxl" />
                  </div>
                  <h1 className="display-1">500</h1>
                  <div className="display-4 mb-3">Server Error</div>
                  <div className="lead">
                    You are seeing this page because there is an error with our
                    server.
                  </div>
                  <div className="lead">
                    Don&#39;t panic, just wait a bit then refresh.
                  </div>
                  <div className="lead">
                    If you&#39;ve already done that and this error still shows
                    up, please email us at{" "}
                    <a href="mailto:email@example.com">email@example.com</a>.
                  </div>
                  <div className="lead mt-5">
                    <a href="error-pages-404">
                      <i className="batch-icon batch-icon-arrow-left" /> Click
                      here to check out the 404 page.
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mb-4 text-center">
                <div className="col-md-12">
                  <Footer />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPages500;
