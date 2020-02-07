import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class EcommerceProductPage extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Ecommerce - Product Page</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body product-page">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide mb-5"
                      data-ride="carousel"
                      data-interval="false"
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
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/ecommerce/product-1-image-1.jpg"
                            alt="Product Image 1"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/ecommerce/product-1-image-2.jpg"
                            alt="Product Image 2"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block img-fluid"
                            src="assets/img/ecommerce/product-1-image-3.jpg"
                            alt="Product Image 3"
                          />
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
                  <div className="col-md-6">
                    <h1>Yellow Long Sleeve Blouse</h1>
                    <div className="price-block mb-2">
                      <div className="price-new">$274</div>
                      <div className="price-old">$749</div>
                      <div className="price-discount">
                        64% discount just for you.
                      </div>
                    </div>
                    <div className="ratings">
                      <i className="batch-icon batch-icon-star-alt rating-highlighted" />
                      <i className="batch-icon batch-icon-star-alt rating-highlighted" />
                      <i className="batch-icon batch-icon-star-alt rating-highlighted" />
                      <i className="batch-icon batch-icon-star-alt rating-highlighted" />
                      <i className="batch-icon batch-icon-star-alt" />
                    </div>
                    <h3>Description</h3>
                    <p className="lead">
                      Long shadow innovate sticky note 360 campaign actionable
                      insight hacker minimum viable product SpaceTeam
                      affordances waterfall is so 2000 and late sticky note
                      entrepreneur pivot ship it.
                    </p>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div
                          className="custom-control custom-radio custom-color-control"
                          data-qp-color="#fce418"
                        >
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="radio1"
                            name="radio-stacked"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="radio1"
                          >
                            <span className="sr-only">Yellow</span>
                          </label>
                        </div>
                        <div
                          className="custom-control custom-radio custom-color-control"
                          data-qp-color="#f43a59"
                        >
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="radio2"
                            name="radio-stacked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="radio2"
                          >
                            <span className="sr-only">Red</span>
                          </label>
                        </div>
                        <div
                          className="custom-control custom-radio custom-color-control"
                          data-qp-color="#0ad251"
                        >
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="radio3"
                            name="radio-stacked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="radio3"
                          >
                            <span className="sr-only">Green</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="size">Size</label>
                          <select className="form-control" id="size">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label htmlFor="quantity">Quantity</label>
                          <input
                            type="text"
                            className="form-control"
                            id="quantity"
                            placeholder="Quantity"
                            defaultValue="1"
                          />
                        </div>
                      </div>
                    </div>
                    <a
                      className="btn btn-primary btn-gradient btn-block btn-lg"
                      to="#!"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-5">
                    <h3>Quantitative Vs. Qualitative Viral</h3>
                    <p className="mb-5">
                      Waterfall is so 2000 and late convergence viral paradigm
                      actionable insight food-truck fund agile engaging user
                      story workflow co-working. Responsive thought leader
                      venture capital physical computing long shadow engaging
                      ideate thinker-maker-doer intuitive quantitative vs.
                      qualitative food-truck. Cortado prototype food-truck
                      entrepreneur sticky note engaging quantitative vs.
                      qualitative ship it minimum viable product affordances.
                      Experiential viral unicorn thinker-maker-doer waterfall is
                      so 2000 and late long shadow intuitive paradigm
                      entrepreneur earned media personas SpaceTeam.
                    </p>
                    <h3>Thinker-Maker-Doer Earned Media</h3>
                    <p className="mb-5">
                      Long shadow innovate sticky note 360 campaign actionable
                      insight hacker minimum viable product SpaceTeam
                      affordances waterfall is so 2000 and late sticky note
                      entrepreneur pivot ship it. Iterate co-working Steve Jobs
                      quantitative vs. qualitative pitch deck quantitative vs.
                      qualitative engaging unicorn SpaceTeam parallax 360
                      campaign bootstrapping hacker. Long shadow minimum viable
                      product waterfall is so 2000 and late integrate integrate
                      waterfall is so 2000 and late thinker-maker-doer earned
                      media. Prototype physical computing ship it earned media
                      unicorn 360 campaign actionable insight experiential
                      responsive convergence responsive fund prototype hacker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-12 ">
            <h3>Related Products</h3>
            <div className="row">
              <div className="col-sm-6 col-lg-3 mb-5">
                <div className="card text-center">
                  <a to="#!">
                    <img
                      className="card-img-top"
                      src="assets/img/ecommerce/product-3-image-1.jpg"
                      alt="Related Product 1"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a to="#!">Related Product 1</a>
                    </h5>
                    <a className="btn btn-primary" to="#!">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-5">
                <div className="card text-center">
                  <a to="#!">
                    <img
                      className="card-img-top"
                      src="assets/img/ecommerce/product-4-image-1.jpg"
                      alt="Related Product 2"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a to="#!">Related Product 2</a>
                    </h5>
                    <a className="btn btn-primary" to="#!">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-5">
                <div className="card text-center">
                  <a to="#!">
                    <img
                      className="card-img-top"
                      src="assets/img/ecommerce/product-image-5.jpg"
                      alt="Related Product 3"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a to="#!">Related Product 3</a>
                    </h5>
                    <a className="btn btn-primary" to="#!">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-5">
                <div className="card text-center">
                  <a to="#!">
                    <img
                      className="card-img-top"
                      src="assets/img/ecommerce/product-image-1.jpg"
                      alt="Related Product 4"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a to="#!">Related Product 4</a>
                    </h5>
                    <a className="btn btn-primary" to="#!">
                      View Product
                    </a>
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

export default EcommerceProductPage;
