import React, { Component } from "react";

export class NavbarHorizontal extends Component {
  render() {
    return (
      <nav className="navbar-sidebar-horizontal navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <a className="navbar-brand" href="#!">
          <img
            src="assets/img/logo-dark.png"
            width="145"
            height="32.3"
            alt="QuillPro"
          />
        </a>
        <button
          className="hamburger hamburger--slider"
          type="button"
          data-target=".sidebar-horizontal"
          aria-controls="sidebar-horizontal"
          aria-expanded="false"
          aria-label="Toggle Main Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <ul className="navbar-nav ml-auto mobile-only-control d-block d-sm-block d-md-block d-lg-none">
          <li className="nav-item dropdown">
            <a
              href="#!"
              className="nav-link dropdown-toggle"
              id="navbar-notification-search-mobile"
              data-toggle="dropdown"
              data-flip="false"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="batch-icon batch-icon-search" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-fullscreen"
              aria-labelledby="navbar-notification-search-mobile"
            >
              <li>
                <form className="form-inline my-2 my-lg-0 no-waves-effect">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                      aria-label="Search for..."
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary btn-gradient waves-effect waves-light"
                        type="button"
                      >
                        <i className="batch-icon batch-icon-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="navbar-header-content">
          <ul className="navbar-nav navbar-language-translation mr-auto">
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-menu-link"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-book-alt-" />
                English
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbar-dropdown-menu-link"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Deutsche
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Español
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav navbar-notifications float-right">
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle"
                id="navbar-notification-search"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-search" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-fullscreen"
                aria-labelledby="navbar-notification-search"
              >
                <li>
                  <form className="form-inline my-2 my-lg-0 no-waves-effect">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                        aria-label="Search for..."
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-gradient waves-effect waves-light"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle no-waves-effect"
                id="navbar-notification-calendar"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-calendar" />
                <span className="notification-number">6</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right dropdown-menu-md"
                aria-labelledby="navbar-notification-calendar"
              >
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Meeting with Project Manager
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Right now</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Sales Call
                      </h6>
                      <div className="notification-text">
                        Nibh amet cras sit libero
                      </div>
                      <span className="notification-time">
                        One hour from now
                      </span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Email CEO new expansion proposal
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">In 3 days</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Team building exercise
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">In one week</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle no-waves-effect"
                id="navbar-notification-misc"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-bell" />
                <span className="notification-number">4</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right dropdown-menu-md"
                aria-labelledby="navbar-notification-misc"
              >
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-bell batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        General Notification
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Just now</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-cloud-download batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Your Download Is Ready
                      </h6>
                      <div className="notification-text">
                        Nibh amet cras sit libero
                      </div>
                      <span className="notification-time">5 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-tag-alt-2 batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        New Order
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Yesterday</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-pull batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Pull Request
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">3 day ago</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-5 navbar-profile">
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-navbar-profile"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="profile-name">Johanna Quinn</div>
                <div className="profile-picture bg-gradient bg-primary has-message float-right">
                  <img
                    src="assets/img/profile-pic.jpg"
                    width="44"
                    height="44"
                    alt="Profile Pic"
                  />
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbar-dropdown-navbar-profile"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="profiles-member-profile.html"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="mail-inbox.html">
                    Messages
                    <span className="badge badge-danger badge-pill float-right">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="profiles-member-profile.html"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="sisu-lock-screen.html">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarHorizontal;
