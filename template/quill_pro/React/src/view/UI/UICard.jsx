import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UICard extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Cards</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>1. Basic Card Layouts</h2>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Special title treatment</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="#!"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <div className="card-header">Quote</div>
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="#!"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-right">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>2. With Images</h2>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/bg-image-1.jpg"
                alt="Card"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <img
                className="card-img-bottom"
                src="assets/img/bg-image-2.jpg"
                alt="Card pic cap"
              />
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="assets/img/bg-image-3.jpg"
                alt="Card pic cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&#39;s content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="#!" className="card-link">
                  Card link
                </a>
                <a href="#!" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card">
              <img
                className="card-img"
                src="assets/img/media-search-5.jpg"
                alt="Background Card"
              />
              <div className="card-img-overlay">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>3. Tabs &amp; Nav Pills</h2>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card text-center">
              <div className="card-header">
                <ul
                  className="nav nav-tabs card-header-tabs"
                  id="myTab-1"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#tab-1-1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-1-1"
                      aria-selected="true"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-1-2"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-1-2"
                      aria-selected="false"
                    >
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#tab-1-4"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-1-4"
                      aria-selected="false"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="myTabContent-1">
                  <div
                    className="tab-pane fade show active"
                    id="tab-1-1"
                    role="tabpanel"
                    aria-labelledby="tab-1-1"
                  >
                    <h4 className="card-title">1. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-1-2"
                    role="tabpanel"
                    aria-labelledby="tab-1-2"
                  >
                    <h4 className="card-title">2. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-secondary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-1-4"
                    role="tabpanel"
                    aria-labelledby="tab-1-4"
                  >
                    <h4 className="card-title">3. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card text-center">
              <div className="card-header">
                <ul
                  className="nav nav-pills card-header-pills"
                  id="myTab-2"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#tab-2-1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-2-1"
                      aria-selected="true"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-2-2"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-2-2"
                      aria-selected="false"
                    >
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#tab-2-3"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-2-3"
                      aria-selected="false"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="myTabContent-2">
                  <div
                    className="tab-pane fade show active"
                    id="tab-2-1"
                    role="tabpanel"
                    aria-labelledby="tab-2-1"
                  >
                    <h4 className="card-title">1. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-2-2"
                    role="tabpanel"
                    aria-labelledby="tab-2-2"
                  >
                    <h4 className="card-title">2. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-secondary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-2-4"
                    role="tabpanel"
                    aria-labelledby="tab-2-4"
                  >
                    <h4 className="card-title">3. Special title treatment</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#!" className="btn btn-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>4. Background Color &amp; Gradient</h2>
            <h3>Background Gradient</h3>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-primary mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-secondary mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-success mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-info mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-warning mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-danger mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <h3>Background Gradient</h3>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-primary bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-secondary bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-success bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-info bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-warning bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-danger bg-gradient mb-3 text-center">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>5. Card Group</h2>
          </div>
          <div className="col-md-12">
            <div className="card-group">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/album-image.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/media-search-1.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/bg-image-4.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>6. Card Deck</h2>
          </div>
          <div className="col-md-12">
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/album-image.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/bg-image-1.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/bg-image-4.jpg"
                  alt="Card pic cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>6. Card Columns</h2>
          </div>
          <div className="col-md-12">
            <div className="card-columns">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-7.jpg"
                  data-holder-rendered="true"
                  alt="Card img"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Card title that wraps to a new line
                  </h4>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <div className="card p-3">
                <blockquote className="card-body blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-8.jpg"
                  data-holder-rendered="true"
                  alt="Card img"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card card-dark card-primary p-3 text-center">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat.
                  </p>
                  <footer>
                    <small>
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card text-center">
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="assets/img/media-search-11.jpg"
                  data-holder-rendered="true"
                  alt="Card img"
                />
              </div>
              <div className="card p-3 text-right">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>8. Fixed Height</h2>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card card-xs">
              <div className="card-body">
                Card with the <code>.card-xs</code> className added to the{" "}
                <code>.card</code> cart.
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card card-sm">
              <div className="card-body">
                Card with the <code>.card-sm</code> className added to the{" "}
                <code>.card</code> cart.
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card card-md">
              <div className="card-body">
                Card with the <code>.card-md</code> className added to the{" "}
                <code>.card</code> cart.
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="card card-lg">
              <div className="card-body">
                Card with the <code>.card-lg</code> className added to the{" "}
                <code>.card</code> cart.
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

export default UICard;
