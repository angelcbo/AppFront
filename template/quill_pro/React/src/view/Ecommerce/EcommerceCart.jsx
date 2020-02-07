import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class EcommerceCart extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Ecommerce - Cart</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-8 mb-5">
            <div className="card">
              <div className="card-header">Your Shopping Cart Items</div>
              <div className="card-table table-responsive">
                <table className="table table-hover table-sm align-middle">
                  <thead>
                    <tr>
                      <th />
                      <th>Product Name</th>
                      <th className="text-center">Actions</th>
                      <th className="text-right">Unit Price</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary d-flex mr-3">
                            <img
                              src="assets/img/ecommerce/product-image-red-shoes-thumb.jpg"
                              width="44"
                              height="44"
                              alt="Product"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <a to="#!">Converse Allstar Sneakers</a>
                        <div>
                          <small className="boldness-light">
                            Color: Red; Size: 9;
                          </small>
                        </div>
                      </td>
                      <td className="text-center">
                        <form className="my-2 no-waves-effect">
                          <div className="input-group short-input-field">
                            <input
                              type="text"
                              className="form-control text-right"
                              placeholder="Update Quantity"
                              aria-label="Update Quantity"
                              aria-describedby="update-quantity"
                              defaultValue="3"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-secondary waves-effect waves-light"
                                type="button"
                                data-toggle="tooltip"
                                data-original-title="Update Item"
                              >
                                <i className="batch-icon batch-icon-refresh" />
                              </button>
                              <button
                                className="btn btn-secondary waves-effect waves-light"
                                type="button"
                                data-toggle="tooltip"
                                data-original-title="Delete Item"
                              >
                                <i className="batch-icon batch-icon-bin-alt-2" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </td>
                      <td className="text-right">$99</td>
                      <td className="text-right">$297</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary d-flex mr-3">
                            <img
                              src="assets/img/ecommerce/product-image-yellow-top-thumb.jpg"
                              width="44"
                              height="44"
                              alt="Product"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <a to="#!">Yellow Top - Women</a>
                        <div>
                          <small className="boldness-light">
                            Color: Yellow; Size: Small;
                          </small>
                        </div>
                      </td>
                      <td className="text-center">
                        <form className="my-2 no-waves-effect">
                          <div className="input-group short-input-field">
                            <input
                              type="text"
                              className="form-control text-right"
                              placeholder="Update Quantity"
                              aria-label="Update Quantity"
                              aria-describedby="update-quantity"
                              defaultValue="3"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-secondary waves-effect waves-light"
                                type="button"
                                data-toggle="tooltip"
                                data-original-title="Update Item"
                              >
                                <i className="batch-icon batch-icon-refresh" />
                              </button>
                              <button
                                className="btn btn-secondary waves-effect waves-light"
                                type="button"
                                data-toggle="tooltip"
                                data-original-title="Delete Item"
                              >
                                <i className="batch-icon batch-icon-bin-alt-2" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </td>
                      <td className="text-right">$274</td>
                      <td className="text-right">$274</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body pt-0">
                <div className="float-left">
                  <a className="btn btn-link" to="#!">
                    <i className="batch-icon batch-icon-arrow-left" />
                    Continue Shopping
                  </a>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#coupon-code-block"
                    aria-expanded="false"
                    aria-controls="coupon-code-block"
                  >
                    Add Coupon
                  </button>
                  <div className="collapse" id="coupon-code-block">
                    <div className="my-2 no-waves-effect">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control text-right"
                          placeholder="Enter Your Coupon Code..."
                          aria-label="Enter Your Coupon Code..."
                          aria-describedby="add-coupon"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-secondary waves-effect waves-light"
                            type="button"
                            data-toggle="tooltip"
                            data-original-title="Delete Item"
                          >
                            <i className="batch-icon batch-icon-add" />
                            Add Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="float-right" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Your Total</div>
              <div className="card-table table-responsive">
                <table className="table table-hover align-middle">
                  <tbody>
                    <tr>
                      <td className="text-right">
                        <strong>Sub-Total:</strong>
                      </td>
                      <td className="text-right">$571</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Sales Tax (5%):</strong>
                      </td>
                      <td className="text-right">$28.55</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Total:</strong>
                      </td>
                      <td className="text-right">
                        <strong>$599.55</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body pt-0">
                <a
                  className="btn btn-primary btn-gradient btn-lg btn-block float-right"
                  href="ecommerce-checkout-page"
                >
                  Checkout
                  <i className="batch-icon batch-icon-arrow-right" />
                </a>
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

export default EcommerceCart;
