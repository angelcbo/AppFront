import React, { Component } from "react";
import {
  qpMapChart,
  qpLineChart,
  qpDoughnutPieChart,
  qpBarChart
} from "../../utils/charts";
import "./Home.css";
import Footer from "../../layout/Footer/Footer";
import { qpAddScrollbar, qpTaskList } from "../../utils/misc";

class Home extends Component {
  componentDidMount() {
    qpTaskList();
    qpMapChart("#customer-location");
    qpLineChart("#sales-overview");
    qpLineChart("#database-load");
    qpDoughnutPieChart("#traffic-source");
    qpBarChart("#profit-loss");
    qpAddScrollbar(".card-media-list", "dark");
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-user-alt batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">1,359</div>
                  <div className="tile-description">Customers Online</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-tag-alt-2 batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">$7,349.90</div>
                  <div className="tile-description">Today&#39;s Sales</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-list batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">26</div>
                  <div className="tile-description">Open Tickets</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-star batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">476</div>
                  <div className="tile-description">New Orders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-8 mb-5">
            <div className="card">
              <div className="card-header">
                Sales Overview
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      href="#!"
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
                      <a className="dropdown-item" href="week">
                        This Week
                      </a>
                      <a className="dropdown-item" href="month">
                        This Month
                      </a>
                      <a className="dropdown-item active" href="year">
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
                  data-chart-height="281"
                >
                  <canvas id="sales-overview" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Traffic Sources
                <div className="header-btn-block">
                  <span className="data-range dropdown">
                    <a
                      href="#!"
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
                      <a className="dropdown-item" href="week">
                        This Week
                      </a>
                      <a className="dropdown-item" href="month">
                        This Month
                      </a>
                      <a className="dropdown-item active" href="year">
                        This Year
                      </a>
                    </div>
                  </span>
                </div>
              </div>
              <div className="card-body text-center">
                <p className="text-left">Your top 5 traffic sources</p>
                <div
                  className="card-chart"
                  data-chart-color-1="#07a7e3"
                  data-chart-color-2="#32dac3"
                  data-chart-color-3="#4f5b60"
                  data-chart-color-4="#FCCF31"
                  data-chart-color-5="#f43a59"
                >
                  <canvas id="traffic-source" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="card card-sm bg-info">
              <div className="card-body">
                <div className="mb-4 clearfix">
                  <div className="float-left text-warning text-left">
                    <i className="fa fa-twitter batch-icon-xxl" />
                  </div>
                  <div className="float-right text-right">
                    <h6 className="m-0">Twitter Followers</h6>
                  </div>
                </div>
                <div className="text-right clearfix">
                  <div className="display-4">65,452</div>
                  <div className="m-0">+72 Today</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="card card-sm">
              <div className="card-body">
                <div className="mb-4 clearfix">
                  <div className="float-left text-warning text-left">
                    <i className="batch-icon batch-icon-star batch-icon-xxl" />
                  </div>
                  <div className="float-right text-right">
                    <h6 className="m-0">Reviews</h6>
                  </div>
                </div>
                <div className="text-right clearfix">
                  <div className="display-4">7,842</div>
                  <div className="m-0">
                    <a href="#!">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-5">
            <div className="card card-sm bg-danger">
              <div className="card-body">
                <div className="mb-4 clearfix">
                  <div className="float-left text-left">
                    <i className="batch-icon batch-icon-reply batch-icon-xxl" />
                  </div>
                  <div className="float-right text-right">
                    <h6 className="m-0">Products Returned</h6>
                  </div>
                </div>
                <div className="text-right clearfix">
                  <div className="display-4">231</div>
                  <div className="m-0">-4% Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-3 mb-5">
            <div className="card card-md card-team-members">
              <div className="card-header">Team Members</div>
              <div className="card-media-list">
                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Johanna Quinn</div>
                    <div className="subtext">jquinn897</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-3.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Teal&#39;c Jaffa</div>
                    <div className="subtext">tealc</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-secondary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-2.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Samantha Carter</div>
                    <div className="subtext">samanthac</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-secondary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-4.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">General Landry</div>
                    <div className="subtext">glandry</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-6.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Jacklin O&#39;neil</div>
                    <div className="subtext">jakjak</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Johanna Quinn</div>
                    <div className="subtext">jquinn897</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-3.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Teal&#39;c Jaffa</div>
                    <div className="subtext">tealc</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-secondary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-2.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Samantha Carter</div>
                    <div className="subtext">samanthac</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-secondary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-4.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">General Landry</div>
                    <div className="subtext">glandry</div>
                  </div>
                </div>

                <div
                  className="media clickable"
                  data-qp-link="profiles-member-profile"
                >
                  <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-6.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">Jacklin O&#39;neil</div>
                    <div className="subtext">jakjak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-6 mb-5">
            <div className="card card-md card-customer-location">
              <div className="card-header">Customer Location</div>
              <div className="card-body">
                <div className="card-chart" data-chart-color-selected="#07a7e3">
                  <canvas id="customer-location" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xl-3 mb-5">
            <div className="row mb-4">
              <div className="col-sm-12">
                <div className="card card-sm bg-primary bg-gradient text-center">
                  <div className="card-body">
                    <i className="batch-icon batch-icon-database batch-icon-xxl" />
                    <h6 className="mt-1">Database Load</h6>
                    <div
                      className="card-chart"
                      data-chart-color-1="#FFFFFF"
                      data-chart-color-2="#FFFFFF"
                    >
                      <canvas id="database-load" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-sm bg-secondary bg-gradient text-center">
                  <div className="card-body">
                    <div
                      className="card-chart"
                      data-chart-color-1="#FFFFFF"
                      data-chart-color-2="#FFFFFF"
                    >
                      <canvas id="profit-loss" />
                    </div>
                    <h6>Profit/Loss (18 Months)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-4 mb-5">
            <div className="card card-task card-md">
              <div className="card-header">
                Task List
                <p className="task-list-stats">
                  <span className="task-list-completed">0</span> of{" "}
                  <span className="task-list-total">0</span> tasks completed
                </p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-sm bg-gradient"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0%" }}
                  />
                </div>
                <div className="header-btn-block">
                  <a href="task-manager" className="btn btn-primary">
                    <i className="batch-icon batch-icon-add" />
                  </a>
                </div>
              </div>
              <div className="card-task-list">
                <ul className="task-list">
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-danger">Critical</span>
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Fusce in felis nec exdf
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-warning">
                          High Priority
                        </span>
                        Aliquam vel tristique ipsum
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-primary">Optional</span>
                        Aenean vehicula, ligula sit amet varius maximus
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        Etiam varius neque sed sagittis fringilla
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>
                        Sed velit augue, tincidunt vitae posuere
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-warning">
                          High Priority
                        </span>
                        Fusce in felis nec exdf
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>
                        Aliquam vel tristique ipsum
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>{" "}
                        Aenean vehicula, ligula sit amet varius maximus
                      </label>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        Etiam varius neque sed sagittis fringilla
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-5">
            <div className="card card-md bg-primary bg-gradient text-center card-goal-reached">
              <div className="card-body">
                <h6 className="my-5">Goal Reached</h6>
                <i className="batch-icon batch-icon-bullhorn batch-icon-xxl" />
                <div className="display-4 mt-3">4,294</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <a href="#!" className="btn btn-secondary">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mb-5">
            <div className="card card-activity card-md">
              <div className="card-header">Activity</div>
              <div className="card-media-list">
                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      You were assigned a new task.
                    </div>
                    <div className="subtext">by Johanna Quinn</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-3.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      Teal&#39;c Jaffa was added to your team members.
                    </div>
                    <div className="subtext">by George Hammond</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-secondary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-2.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A task was escalated from{" "}
                      <span className="badge badge-info">Low priority</span> to{" "}
                      <span className="badge badge-danger">Urgent</span>.
                    </div>
                    <div className="subtext">by Samantha Carter</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-secondary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-4.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A task was marked as{" "}
                      <span className="badge badge-success">Completed</span>.
                    </div>
                    <div className="subtext">by General Landry</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-6.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A new project was created.
                    </div>
                    <div className="subtext">by Jacklin O&#39;neil</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      You were assigned a new task.
                    </div>
                    <div className="subtext">by Johanna Quinn</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-3.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      Teal&#39;c Jaffa was added to your team members.
                    </div>
                    <div className="subtext">by George Hammond</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-secondary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-2.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A task was escalated from{" "}
                      <span className="badge badge-info">Low priority</span> to{" "}
                      <span className="badge badge-danger">Urgent</span>.
                    </div>
                    <div className="subtext">by Samantha Carter</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-secondary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-4.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A task was marked as{" "}
                      <span className="badge badge-success">Completed</span>.
                    </div>
                    <div className="subtext">by General Landry</div>
                  </div>
                </div>

                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic-6.jpg"
                      width="44"
                      height="44"
                      alt="Profile Piture"
                    />
                  </div>
                  <div className="media-body">
                    <div className="heading mt-1">
                      A new project was created.
                    </div>
                    <div className="subtext">by Jacklin O&#39;neil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">User Management</div>
              <div className="card-table table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="thead-light">
                    <tr>
                      <th>Member</th>
                      <th>Email</th>
                      <th className="text-center">Status</th>
                      <th>Created</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">Johanna Quinn</div>
                            <div className="subtext">jquinn897</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">johanna.quinn@quillpro.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-primary">Approved</span>
                      </td>
                      <td>23rd Feb 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic-3.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">Teal&#39;c Jaffa</div>
                            <div className="subtext">tealc</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">tealc.jaffa@kawoosh.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-success">Reviewing</span>
                      </td>
                      <td>15th Jan 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-secondary float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic-2.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">Samantha Carter</div>
                            <div className="subtext">samanthac</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">samantha.carter@sgc.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-danger">Rejected</span>
                      </td>
                      <td>7th Jan 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-secondary has-message float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic-4.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">General Landry</div>
                            <div className="subtext">glandry</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">g.landry@sgc.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-warning">Pending</span>
                      </td>
                      <td>7th Jan 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic-5.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">Daniella Jackson</div>
                            <div className="subtext">jacksond</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">daniella.jackson@chabaai.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-default">Banned</span>
                      </td>
                      <td>5th Jan 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                            <img
                              src="assets/img/profile-pic-6.jpg"
                              width="44"
                              height="44"
                              alt="Profile Piture"
                            />
                          </div>
                          <div className="media-body">
                            <div className="heading mt-1">
                              Jacklin O&#39;neil
                            </div>
                            <div className="subtext">jakjak</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#!">jack.oneill@ancientgene.com</a>
                      </td>
                      <td className="text-center">
                        <span className="badge badge-info">
                          Action Required
                        </span>
                      </td>
                      <td>1st Jan 2017</td>
                      <td className="text-right">
                        <a href="#!" className="btn btn-primary">
                          <i className="batch-icon batch-icon-eye" />
                        </a>
                        <a href="#!" className="btn btn-success">
                          <i className="batch-icon batch-icon-quill" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Home;
