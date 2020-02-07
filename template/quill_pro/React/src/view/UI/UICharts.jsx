import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import {
  qpLineChart,
  qpBarChart,
  qpDoughnutPieChart,
  qpDialChart
} from "../../utils/charts";

class UICharts extends Component {
  componentDidMount() {
    qpDialChart("#epc-demo-1");
    qpDialChart("#epc-demo-2");
    qpDialChart("#epc-demo-3");
    qpDialChart("#epc-demo-4");
    qpDialChart("#epc-demo-5");
    qpDialChart("#epc-demo-6");

    qpLineChart("#demo-line-chart");

    qpBarChart("#demo-bar-chart");
    qpBarChart("#demo-stacked-chart");
    qpBarChart("#demo-horizontal-chart", "horizontalBar", true);

    qpDoughnutPieChart("#demo-doughnut-chart");
    qpDoughnutPieChart("#demo-pie-chart", "pie");
    qpDoughnutPieChart("#demo-radar-chart", "polarArea");
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Charts</h1>
            <h2>1. ChartJS</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Line Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
                  data-chart-legend-2="Orders"
                >
                  <canvas id="demo-line-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Bar Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
                  data-chart-legend-2="Orders"
                >
                  <canvas id="demo-bar-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Stacked Bar Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
                  data-chart-legend-2="Orders"
                >
                  <canvas id="demo-stacked-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Horizontal Bar Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
                  data-chart-legend-2="Orders"
                >
                  <canvas id="demo-horizontal-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Pie Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
              <div className="card-body text-center">
                <div
                  className="card-chart"
                  data-chart-color-1="#07a7e3"
                  data-chart-color-2="#32dac3"
                  data-chart-color-3="#4f5b60"
                  data-chart-color-4="#FCCF31"
                  data-chart-color-5="#f43a59"
                >
                  <canvas id="demo-pie-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Doughnut Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
              <div className="card-body text-center">
                <div
                  className="card-chart"
                  data-chart-color-1="#07a7e3"
                  data-chart-color-2="#32dac3"
                  data-chart-color-3="#4f5b60"
                  data-chart-color-4="#FCCF31"
                  data-chart-color-5="#f43a59"
                >
                  <canvas id="demo-doughnut-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Radar Chart
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      to="#!"
                      className="btn btn-primary dropdown-toggle"
                      id="navbar-dropdown-traffic-sources-header-button"
                      data-toggle="dropdown"
                      data-flip="false"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="batch-icon batch-icon-calendar" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbar-dropdown-traffic-sources-header-button"
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
              <div className="card-body text-center">
                <div
                  className="card-chart"
                  data-chart-color-1="#07a7e3"
                  data-chart-color-2="#32dac3"
                  data-chart-color-3="#4f5b60"
                  data-chart-color-4="#FCCF31"
                  data-chart-color-5="#f43a59"
                >
                  <canvas id="demo-radar-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2>2. Easy Pie Charts</h2>
            <div className="card">
              <div className="card-header">Try A Demo</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 mb-4">
                    <h3>1. Dynamic Color</h3>
                    <div
                      id="epc-demo-1"
                      className="chart chart-epc"
                      data-percent="89"
                      data-chart-color-1="#07a7e3"
                      data-chart-color-2="#0ad251"
                      data-chart-color-3="#fce418"
                      data-chart-color-4="#f43a59"
                    >
                      <span className="percent">89</span>
                    </div>
                    <div className="chart-controls mb-2">
                      <a
                        id="update-dial-chart"
                        className="btn btn-outline-primary"
                        data-qp-for="chart-demo-1"
                        to="#!"
                      >
                        Update Chart
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <h3>2. Static Color Sample</h3>
                    <div
                      id="epc-demo-2"
                      className="chart chart-epc"
                      data-percent="34"
                      data-chart-color-1="#f43a59"
                    >
                      <span className="percent">34</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <h3>3. Static Color Sample</h3>
                    <div
                      id="epc-demo-3"
                      className="chart chart-epc"
                      data-percent="60"
                      data-chart-color-1="#0ad251"
                    >
                      <span className="percent">60</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <h3>4. Static Color Sample</h3>
                    <div
                      id="epc-demo-4"
                      className="chart chart-epc"
                      data-percent="7"
                      data-chart-color-1="#07a7e3"
                    >
                      <span className="percent">7</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <h3>5. Static Color Sample</h3>
                    <div
                      id="epc-demo-5"
                      className="chart chart-epc"
                      data-percent="49"
                      data-chart-color-1="#fce418"
                    >
                      <span className="percent">49</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-4">
                    <h3>6. Static Color Sample</h3>
                    <div
                      id="epc-demo-6"
                      className="chart chart-epc"
                      data-percent="25"
                      data-chart-color-1="#9708CC"
                    >
                      <span className="percent">25</span>
                    </div>
                  </div>
                </div>
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

export default UICharts;
