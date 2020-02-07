import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class Gallery extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Gallery</h1>
          </div>
        </div>
        <div className="row mb-5 pb-5 clearfix qp-gallery-one">
          <div className="col-md-12">
            <h2>1. Image</h2>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-1.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-1.jpg"
                  alt="Gallery 1"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-2.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-2.jpg"
                  alt="Gallery 2"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-3.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-3.jpg"
                  alt="Gallery 3"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-4.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-4.jpg"
                  alt="Gallery 4"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-5.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-5.jpg"
                  alt="Gallery 5"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-6.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-6.jpg"
                  alt="Gallery 6"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-7.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-7.jpg"
                  alt="Gallery 7"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-8.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-8.jpg"
                  alt="Gallery 8"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-9.jpg">
                <img
                  className="card-img"
                  src="assets/img/gallery-image-9.jpg"
                  alt="Gallery 9"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-5 clearfix qp-gallery-two">
          <div className="col-md-12">
            <h2>2. Image &amp; Caption (Entire Card)</h2>
          </div>
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-1.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-1.jpg"
                  alt="Gallery 1"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-2.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-2.jpg"
                  alt="Gallery 2"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-3.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-3.jpg"
                  alt="Gallery 3"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-4.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-4.jpg"
                  alt="Gallery 4"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-5.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-5.jpg"
                  alt="Gallery 5"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-6.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-6.jpg"
                  alt="Gallery 6"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-7.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-7.jpg"
                  alt="Gallery 7"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-8.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-8.jpg"
                  alt="Gallery 8"
                />
              </a>
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
          <div className="col-sm-6 col-md-4 mb-5">
            <div className="card lightbox">
              <a href="assets/img/gallery-image-9.jpg">
                <img
                  className="card-img-top"
                  src="assets/img/gallery-image-9.jpg"
                  alt="Gallery 9"
                />
              </a>
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

export default Gallery;
