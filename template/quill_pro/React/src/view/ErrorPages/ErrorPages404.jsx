import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class ErrorPages404 extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12 my-5 text-center">
            <div className="text-danger">
              <i className="batch-icon batch-icon-link-alt batch-icon-xxl" />
              <i className="batch-icon batch-icon-search batch-icon-xxl" />
              <i className="batch-icon batch-icon-link-alt batch-icon-xxl" />
            </div>
            <h1 className="display-1">404</h1>
            <div className="display-4 mb-3">Page Not Found</div>
            <div className="lead">
              We can&#39;t find the page you are looking for.
            </div>
            <div className="lead">
              Try searching for it using the search field below or you can go{" "}
              <a href="/">back to our homepage</a>.
            </div>
          </div>
        </div>
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6">
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
                    className="btn btn-primary btn-gradient waves-effect waves-light"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-4 text-center">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default ErrorPages404;
