import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { qpRequiredMisc, qpLayoutControls } from "../../utils/misc";

export class SidebarHorizontal extends Component {
  componentDidMount() {
    qpRequiredMisc();

    /* Demo Only */
    qpLayoutControls();
  }

  render() {
    return (
      <nav className="sidebar-horizontal navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="navbar-collapse" id="navbar-header-menu-outer">
          <ul className="navbar-nav navbar-header-menu mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                <i className="batch-icon batch-icon-browser-alt" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-dashboard-link"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
                to="#!"
              >
                <i className="batch-icon batch-icon-layout-content-left" />
                Layout <span className="sr-only">(current)</span>
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbar-dropdown-dashboard-link"
              >
                <li>
                  <NavLink
                    id="layout-left-menu-hidden"
                    className="dropdown-item"
                    to="/layout-left-menu-hidden"
                  >
                    Left Menu - Hidden
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="layout-left-menu-normal"
                    className="dropdown-item"
                    to="/layout-left-menu-normal"
                  >
                    Left Menu - Normal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="layout-top-menu-fixed"
                    activeClassName="active"
                    className="dropdown-item"
                    to="/layout-top-menu-fixed"
                  >
                    Top Menu - Fixed
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="layout-top-menu-normal"
                    className="dropdown-item"
                    to="/layout-top-menu-normal"
                  >
                    Top Menu - Normal
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-ecommerce-link"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
                to="#!"
              >
                <i className="batch-icon batch-icon-store" />
                eCommerce
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbar-dropdown-ecommerce-link"
              >
                <li>
                  <NavLink className="dropdown-item" to="/ecommerce-dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ecommerce-product-page">
                    Product Page
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ecommerce-category-page">
                    Category Page
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ecommerce-cart">
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ecommerce-checkout-page">
                    Checkout Page
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-apps-link"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
                to="#!"
              >
                <i className="batch-icon batch-icon-at" />
                Apps
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbar-dropdown-apps-link"
              >
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Search Results
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/search-results-normal">
                        Normal Search
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/search-results-media">
                        Media Search
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Mail
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/mail-inbox">
                        Inbox
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/mail-message">
                        Message
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/mail-compose">
                        Compose
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to="/task-list"
                  >
                    Task List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to="/task-manager"
                  >
                    Task Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/timeline">
                    Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active  "
                    className="dropdown-item"
                    to="/price-list"
                  >
                    Price List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    className="dropdown-item"
                    to="/invoice"
                  >
                    Invoice
                  </NavLink>
                </li>
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Error Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/error-pages-404">
                        404 Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/error-pages-500">
                        500 Page
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Sign In &amp; Sign Up
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-signin">
                        Sign In
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-signin-2">
                        Sign In 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-signup">
                        Sign Up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-signup-2">
                        Sign Up 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-forgot-password">
                        Forgot Password
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/sisu-forgot-password-2"
                      >
                        Forgot Password 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/sisu-lock-screen">
                        Lock Screen
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        to="/sisu-lock-screen-2"
                        activeClassName="active"
                        className="dropdown-item"
                      >
                        Lock Screen 2
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profiles-member-profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#!"
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-components-link"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-unite" />
                Components
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbar-dropdown-apps-link"
              >
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Forms
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/forms">
                        Form Elements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        activeClassName="active"
                        className="dropdown-item"
                        to="/forms-extras"
                      >
                        Form Extras
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/forms-validation">
                        Form Validation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/forms-wizard">
                        Form Wizard
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/tables">
                    Tables
                  </NavLink>
                </li>
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    UI Kit <span className="badge badge-danger">New *</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <Link to="#!" className="dropdown-item dropdown-toggle">
                        Icons
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/ui-icons-batch-icons"
                          >
                            Batch Icons
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link to="#!" className="dropdown-item dropdown-toggle">
                    Menu Levels
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="#!" className="dropdown-item">
                        Level 1 - Item 1
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link to="#!" className="dropdown-item dropdown-toggle">
                        Level 1 - Item 2
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="#!" className="dropdown-item">
                            Level 2 - Item 1
                          </Link>
                        </li>
                        <li className="dropdown-submenu">
                          <Link
                            to="#!"
                            className="dropdown-item dropdown-toggle"
                          >
                            Level 2 - Item 3
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="#!" className="dropdown-item">
                                Level 3 - Item 1
                              </Link>
                            </li>
                            <li>
                              <Link to="#!" className="dropdown-item">
                                Level 3 - Item 2
                              </Link>
                            </li>
                            <li>
                              <Link to="#!" className="dropdown-item">
                                Level 3 - Item 3
                              </Link>
                            </li>
                            <li>
                              <Link to="#!" className="dropdown-item">
                                Level 3 - Item 4
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#!" className="dropdown-item">
                            Level 2 - Item 3
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="dropdown-item">
                            Level 2 - Item 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#!" className="dropdown-item">
                        Level 1 - Item 3
                      </Link>
                    </li>
                    <li>
                      <Link to="#!" className="dropdown-item">
                        Level 1 - Item 4
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SidebarHorizontal;
