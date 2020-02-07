import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class Invoice extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Invoice</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="sender-logo">
                      <img
                        src="assets/img/logo-dark.png"
                        width="250"
                        alt="Logo"
                      />
                    </div>
                    <div className="sender-details">
                      <address>
                        <strong>Base5Builder, Inc.</strong>
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        Tel: (123) 456-7890
                      </address>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="display-3 text-right">Invoice</div>
                    <div className="invoice-date text-right">
                      <strong>Invoice #:</strong> #90239 <br />
                      <strong>Issued Date:</strong> 23/10/2017
                      <br />
                      <strong>Due Date: </strong> 30/10/2017
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4">
                    <h3>Bill To:</h3>
                    <address>
                      <strong>Massive Dynamic, Inc.</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      Tel: (123) 456-7890
                    </address>
                  </div>
                  <div className="col-sm-4">
                    <h3>Ship To:</h3>
                    <address>
                      <strong>Massive Dynamic, Inc.</strong>
                      <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                      Tel: (123) 456-7890
                    </address>
                  </div>
                  <div className="col-sm-4">
                    <h3>Payment Details:</h3>
                    <strong>Account Name:</strong>
                    Base5Builder, Inc.
                    <br />
                    <strong>Account Number:</strong>
                    098 0981 2348
                    <br />
                  </div>
                </div>
              </div>
              <div className="card-table table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Description</th>
                      <th className="text-right">Unit Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Apple Cinema 30'</td>
                      <td>Cum sociis natoque penatibus et magnis </td>
                      <td className="text-right">$100</td>
                      <td className="text-center">1</td>
                      <td className="text-right">$100</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Canon EOS 5D</td>
                      <td>
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        nibh
                      </td>
                      <td className="text-right">$600</td>
                      <td className="text-center">3</td>
                      <td className="text-right">$1,800</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>HP LP3065</td>
                      <td>Eriam porta sem</td>
                      <td className="text-right">$200</td>
                      <td className="text-center">3</td>
                      <td className="text-right">$600</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>HTC Touch HD</td>
                      <td>Lorem ipsum dolor sit ame</td>
                      <td className="text-right">$1,200</td>
                      <td className="text-center">2</td>
                      <td className="text-right">$2,400</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right">
                        <strong>Sub-Total</strong>
                      </td>
                      <td className="table-secondary text-right">
                        <strong>$4,900.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right">
                        <strong>Shipping</strong>
                      </td>
                      <td className="table-secondary text-right">
                        <strong>$50.00</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right">
                        <strong>Tax</strong>
                      </td>
                      <td className="table-secondary text-right">
                        <strong>5.00%</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right">
                        <strong>Grand Total</strong>
                      </td>
                      <td className="table-secondary text-right">
                        <strong>$5,197.50</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Invoice;
