import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class EcommerceCheckoutPage extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Ecommerce - Checkout Page</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 mb-5">
            <div className="card">
              <div className="card-header">1. Enter Your Billing Address</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="first-name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="full-name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address-1">Address 1</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address-1"
                      placeholder="Address 1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address-2">Address 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address-2"
                      placeholder="Address 2"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" id="country">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Spain</option>
                      <option>China</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="state">State</label>
                      <select className="form-control" id="state">
                        <option>California</option>
                        <option>Texas</option>
                        <option>Florida</option>
                        <option>Hawaii</option>
                        <option>Alaska</option>
                      </select>
                    </div>
                    <div className="col-md-6 pr-5">
                      <label htmlFor="zip-code">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip-code"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="card">
                  <div className="card-header">2. Review Your Order</div>
                  <div className="card-table table-responsive">
                    <table className="table table-hover table-sm align-middle">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th className="text-right">Unit Price</th>
                          <th className="text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Converse Allstar Sneakers
                            <div>
                              <small className="boldness-light">
                                Color: Red; Size: 9;
                              </small>
                            </div>
                          </td>
                          <td className="text-right">$99</td>
                          <td className="text-right">$297</td>
                        </tr>
                        <tr>
                          <td>
                            Yellow Top - Women
                            <div>
                              <small className="boldness-light">
                                Color: Yellow; Size: Small;
                              </small>
                            </div>
                          </td>
                          <td className="text-right">$274</td>
                          <td className="text-right">$274</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="text-right">
                            <strong>Sub-Total:</strong>
                          </td>
                          <td className="text-right">$571</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="text-right">
                            <strong>Sales Tax (5%):</strong>
                          </td>
                          <td className="text-right">$28.55</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="text-right">
                            <strong>Total:</strong>
                          </td>
                          <td className="text-right">
                            <strong>$599.55</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="card">
                  <div className="card-header">3. Enter Your Credit Card</div>
                  <div className="card-body">
                    <form className="mb-3">
                      <div className="form-group">
                        <label htmlFor="name-on-card">Name On Card</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name-on-card"
                          placeholder="Name On Card"
                        />
                      </div>
                      <img
                        className="img-fluid"
                        src="assets/img/ecommerce/payment-logo.jpg"
                        alt="Payment Logo"
                      />
                      <div className="row">
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="credit-card">
                              Credit Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="credit-card"
                              placeholder="0000-0000-0000-0000"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input
                              type="password"
                              className="form-control"
                              id="cvv"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="exp-month">Expiry Month</label>
                            <select className="form-control" id="exp-month">
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                              <option>07</option>
                              <option>08</option>
                              <option>09</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="exp-year">Expiry Year</label>
                            <select className="form-control" id="exp-year">
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <a
                            className="btn btn-primary btn-gradient btn-block btn-lg float-right"
                            href="ecommerce-checkout-page"
                          >
                            <i className="batch-icon batch-icon-tag-alt-2" />
                            Pay For Your Order
                          </a>
                        </div>
                      </div>
                    </form>
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

export default EcommerceCheckoutPage;
