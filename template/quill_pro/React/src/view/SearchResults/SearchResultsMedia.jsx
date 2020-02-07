import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class SearchResultsMedia extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Search Results - Media</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form className="col-md-8 px-0 my-2 my-lg-0 no-waves-effect">
                  <div className="input-group">
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
                        <span className="gradient">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="search-terms lead mb-3">
                  Search Results For Your Keyword:{" "}
                  <strong>
                    <em>Steve Jobs</em>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card-columns">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-5.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Steve Jobs Statue</h4>
                  <p className="card-text">
                    Personas user centered design pair programming hacker
                    entrepreneur{" "}
                    <strong>
                      <em>Steve Jobs</em>
                    </strong>{" "}
                    paradigm experiential long shadow food-truck. strong earned
                    media moleskine...
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-2.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-3.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-4.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-3.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card text-center">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-7.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">'Stay Hungry. Stay Foolish'</h4>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-8.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-9.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-10.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-1.jpg"
                  alt="Card image cap"
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">Who was Steve Jobs?</h4>
                  <p className="card-text">
                    Personas user centered design pair programming hacker
                    entrepreneur paradigm experiential long shadow food-truck.
                    Steve Jobs earned media moleskine intuitive fund cortado
                    responsive intuitive ship it actionable insight SpaceTeam.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-3.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-2.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-1.jpg"
                  alt="Card image cap"
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">Who was Steve Jobs?</h4>
                  <p className="card-text">
                    Personas user centered design pair programming hacker
                    entrepreneur paradigm experiential long shadow food-truck.
                    Steve Jobs earned media moleskine intuitive fund cortado
                    responsive intuitive ship it actionable insight SpaceTeam.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-6.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <ul className="pagination pagination-lg justify-content-center mt-4">
                <li className="page-item disabled">
                  <a className="page-link waves-effect waves-effect" to="#!">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link waves-effect waves-effect" to="#!">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link waves-effect waves-effect" to="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link waves-effect waves-effect" to="#!">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link waves-effect waves-effect" to="#!">
                    Next
                  </a>
                </li>
              </ul>
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

export default SearchResultsMedia;
