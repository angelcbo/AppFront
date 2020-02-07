import React, { Component } from "react";
import {
  qpMapChart,
  qpLineChart,
  qpDoughnutPieChart,
  qpBarChart
} from "../../utils/charts";
import Footer from "../../layout/Footer/Footer";
import { qpAddScrollbar } from "../../utils/misc";

class EcommerceDashboard extends Component {
  componentDidMount() {
    qpMapChart("#most-active-salesforce");
    qpBarChart("#profit-loss");
    qpBarChart("#average-order-value", "bar", true);
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="card card-md">
              <div className="card-header">
                AVERAGE ORDER VALUE
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-sales-overview-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-sales-overview-header-button"
                    >
                      <a className="dropdown-item" href="today">
                        Today
                      </a>
                      <a className="dropdown-item active" href="week">
                        This Week
                      </a>
                      <a className="dropdown-item" href="month">
                        This Month
                      </a>
                      <a className="dropdown-item" href="year">
                        This Year
                      </a>
                    </div>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div
                  className="card-chart"
                  data-chart-color-1="#07a7e3"
                  data-chart-color-2="#32dac3"
                  data-chart-legend-1="Sales ($)"
                  data-chart-legend-2="Order"
                >
                  <canvas id="average-order-value" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-5">
            <div className="row">
              <div className="col-sm-12 mb-4">
                <div className="card card-sm bg-secondary bg-gradient text-center">
                  <div className="card-body">
                    <h6 className="mt-1 mb-3">
                      Avg. Number of Orders per Customer (last 30 days)
                    </h6>
                    <div className="display-4">3.20</div>
                    <p>vs. 2.00 prev. month</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card card-sm bg-secondary bg-gradient text-center">
                  <div className="card-body">
                    <h6 className="mt-1 mb-4">Average Product Price</h6>
                    <div className="display-4 mb-4">$1,952</div>
                    <p>Last 100 Subscriptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-5">
            <div className="card card-md bg-primary bg-gradient text-center">
              <div className="card-body">
                <h6 className="mt-5 mb-4">
                  Average Order Value
                  <br />
                  <small>vs past year</small>
                </h6>
                <i className="batch-icon batch-icon-arrow-up batch-icon-xxl" />
                <div className="display-4 mt-3">$3,499</div>
                <p>Your average order value has increased!</p>
                <a className="btn btn-secondary">See Detailed View</a>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Most Active Salesforce Accounts by State
              </div>
              <div className="card-body">
                <div className="card-chart" data-chart-color-selected="#07a7e3">
                  <div id="most-active-salesforce" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="card card-sm bg-secondary bg-gradient text-center">
              <div className="card-body">
                <div
                  className="card-chart"
                  data-chart-color-1="#FFFFFF"
                  data-chart-color-2="#FFFFFF"
                >
                  <canvas id="profit-loss" />
                </div>
                <h6>Sales Overview (18 Months)</h6>
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

export default EcommerceDashboard;
