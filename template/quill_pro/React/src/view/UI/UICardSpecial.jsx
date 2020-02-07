import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpTaskList, qpAddScrollbar } from "../../utils/misc";
import { qpLineChart, qpBarChart } from "../../utils/charts";

class UICardSpecial extends Component {
  componentDidMount() {
    qpTaskList();
    qpLineChart("#database-load");
    qpBarChart("#profit-loss");
    qpAddScrollbar(".card-media-list", "dark");
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Special Cards</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>1. Mini Cards</h2>
          </div>
        </div>
        <div className="row mb-5">
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
            <div className="card card-tile card-xs bg-success bg-gradient text-center">
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
            <div className="card card-tile card-xs bg-danger bg-gradient text-center">
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
            <div className="card card-tile card-xs bg-warning bg-gradient text-center">
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
            <div className="card card-tile card-xs bg-info bg-gradient text-center">
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
            <div className="card card-tile card-xs bg-secondary text-center">
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
            <div className="card card-tile card-xs bg-primary text-center">
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
            <div className="card card-tile card-xs bg-success text-center">
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
            <div className="card card-tile card-xs bg-danger text-center">
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
            <div className="card card-tile card-xs bg-warning text-center">
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
            <div className="card card-tile card-xs bg-info text-center">
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
          <div className="col-md-12">
            <h2>2. Mini Chart Cards</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-xl-4 mb-4">
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
          <div className="col-xl-4 mb-4">
            <div className="card card-sm bg-secondary bg-gradient text-center">
              <div className="card-body">
                <div
                  className="card-chart"
                  data-chart-color-1="#FFFFFF"
                  data-chart-color-2="#FFFFFF"
                >
                  <canvas id="profit-loss" />
                </div>
                <h6>Profit/Loss</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>3. Custom Data Cards</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-md bg-primary bg-gradient text-center">
              <div className="card-body">
                <div className="profile-picture profile-picture-lg bg-gradient bg-primary mt-5">
                  <img
                    src="assets/img/profile-pic.jpg"
                    width="44"
                    height="44"
                    alt="Profile"
                  />
                </div>
                <h6 className="mt-5 mb-4">Samanatha Carter</h6>
                <p>'Feeling like a million bucks!'</p>
                <a href="#!" className="btn btn-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-md bg-danger text-center">
              <div className="card-body">
                <h6 className="mt-5 mb-4">Goal Reached</h6>
                <i className="batch-icon batch-icon-bullhorn batch-icon-xxl" />
                <div className="display-4 mt-3">4,294</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <a href="#!" className="btn btn-warning">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-md bg-success text-center">
              <div className="card-body">
                <div className="profile-picture profile-picture-lg bg-gradient bg-primary mt-5">
                  <img
                    src="assets/img/profile-pic.jpg"
                    width="44"
                    height="44"
                    alt="Profile"
                  />
                </div>
                <h6 className="mt-5 mb-4">Samanatha Carter</h6>
                <p>'Feeling like a million bucks!'</p>
                <a href="#!" className="btn btn-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center">
              <div className="card-body">
                <h6 className="mt-5 mb-4">Goal Reached</h6>
                <i className="batch-icon batch-icon-bullhorn batch-icon-xxl" />
                <div className="display-4 mt-3">4,294</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <a href="#!" className="btn btn-warning">
                  See Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>4. App Cards</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card card-md">
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card card-md">
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
          <div className="col-xl-5 mb-4">
            <div className="card card-md">
              <div className="card-header">Activity</div>
              <div className="card-media-list">
                <div className="media clickable" data-qp-link="task-list">
                  <div className="profile-picture bg-gradient bg-primary has-message float-right d-flex mr-3">
                    <img
                      src="assets/img/profile-pic.jpg"
                      width="44"
                      height="44"
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
                      alt="Profile"
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
        <div className="row mb-4">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default UICardSpecial;
