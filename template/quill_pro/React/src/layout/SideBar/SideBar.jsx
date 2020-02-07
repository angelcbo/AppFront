import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";
import { qpRequiredMisc, qpLayoutControls } from "../../utils/misc";

class SideBar extends Component {
  componentDidMount() {
    qpRequiredMisc();

    /* Demo Only */
    qpLayoutControls();
  }

  render() {
    const currentPath = window.location.hash;
    const mailPaths = ["#/mail-inbox", "#/mail-compose", "#/mail-message"];
    const layoutPaths = [
      "#/layout-left-menu-hidden",
      "#/layout-left-menu-normal",
      "#/layout-top-menu-fixed",
      "#/layout-top-menu-normal"
    ];
    const taskPaths = ["#/task-list", "#/task-manager"];
    const ecommercePaths = [
      "#/ecommerce-dashboard",
      "#/ecommerce-product-page",
      "#/ecommerce-category-page",
      "#/ecommerce-cart",
      "#/ecommerce-checkout-page"
    ];
    const searchResultsPaths = [
      "#/search-results-normal",
      "#/search-results-media"
    ];
    const uiPaths = [
      "#/ui-cards",
      "#/ui-cards-special",
      "#/ui-icons-batch-icons",
      "#/ui-typography",
      "#/ui-charts",
      "#/ui-buttons",
      "#/ui-tabs-accordions",
      "#/ui-other-bootstrap-elements",
      "#/ui-tooltips-popovers",
      "#/ui-modal-boxes"
    ];
    const formPaths = [
      "#/forms",
      "#/forms-validation",
      "#/forms-extras",
      "#/forms-wizard"
    ];
    const errorPagesPaths = ["#/error-pages-404", "#/error-pages-500"];

    return (
      <nav id="sidebar" className="px-0 bg-dark bg-gradient sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="logo-nav-item">
            <Link className="navbar-brand" to="/">
              <img
                src="assets/img/logo-white.png"
                width="145"
                height="32.3"
                alt="QuillPro"
              />
            </Link>
          </li>
          <li>
            <h6 className="nav-header">General</h6>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              <i className="batch-icon batch-icon-browser-alt" />
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${layoutPaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-layout-content-left" />
              Layout
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  id="layout-left-menu-hidden"
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/layout-left-menu-hidden"
                >
                  Left Menu - Hidden
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="layout-left-menu-normal"
                  activeClassName="active"
                  className="nav-link"
                  to="/layout-left-menu-normal"
                >
                  Left Menu - Normal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="layout-top-menu-fixed"
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/layout-top-menu-fixed"
                >
                  Top Menu - Fixed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="layout-top-menu-normal"
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/layout-top-menu-normal"
                >
                  Top Menu - Normal
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column">
          <li>
            <h6 className="nav-header">Apps</h6>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${ecommercePaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-store" />
              eCommerce
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ecommerce-dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ecommerce-product-page"
                >
                  Product Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ecommerce-category-page"
                >
                  Category Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ecommerce-cart"
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ecommerce-checkout-page"
                >
                  Checkout Page
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${searchResultsPaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-search" />
              Search Results
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/search-results-normal"
                >
                  Normal Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/search-results-media"
                >
                  Media Search
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              to="#!"
              className={`nav-link nav-parent ${mailPaths.includes(
                currentPath
              ) && "active"}`}
            >
              <i className="batch-icon batch-icon-mail" />
              Mail
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/mail-inbox"
                  activeClassName="active"
                  className="nav-link"
                >
                  Inbox
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/mail-message"
                  activeClassName="active"
                  className="nav-link"
                >
                  Message
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/mail-compose"
                  activeClassName="active"
                  className="nav-link"
                >
                  Compose
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${taskPaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-list" />
              Tasks
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/task-list"
                >
                  Task List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/task-manager"
                >
                  Task Manager
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/timeline"
            >
              <i className="batch-icon batch-icon-timeline" />
              Timeline
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/gallery"
            >
              <i className="batch-icon batch-icon-image" />
              Gallery <span className="badge badge-danger">New *</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/price-list"
            >
              <i className="batch-icon batch-icon-tag-alt-2" />
              Price List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/invoice"
              activeClassName="active"
              className="nav-link"
            >
              <i className="batch-icon batch-icon-list-alt" />
              Invoice
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${errorPagesPaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-browser-alt-close" />
              Error Pages
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/error-pages-404"
                >
                  404 Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/error-pages-500"
                >
                  500 Page
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-parent" to="#!">
              <i className="batch-icon batch-icon-locked" />
              Sign In &amp; Sign Up
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-signin"
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-signin-2"
                >
                  Sign In 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-signup-2"
                >
                  Sign Up 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-forgot-password"
                >
                  Forgot Password
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-forgot-password-2"
                >
                  Forgot Password 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-lock-screen"
                >
                  Lock Screen
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/sisu-lock-screen-2"
                >
                  Lock Screen 2
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/profiles-member-profile"
            >
              <i className="batch-icon batch-icon-users" />
              Profile
            </NavLink>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column">
          <li>
            <h6 className="nav-header">Components</h6>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${uiPaths.includes(currentPath) &&
                "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-unite" />
              UI Kit <span className="badge badge-danger">New *</span>
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-cards"
                >
                  Cards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-cards-special"
                >
                  Special Cards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-charts"
                >
                  Charts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-buttons"
                >
                  Buttons
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-typography"
                >
                  Typography
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-tabs-accordions"
                >
                  Tabs &amp; Accordions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-tooltips-popovers"
                >
                  Tooltips &amp; Popovers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-modal-boxes"
                >
                  Modal Boxes
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-parent" to="#!">
                  Icons
                </Link>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/ui-icons-batch-icons"
                    >
                      Batch Icons
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/ui-other-bootstrap-elements"
                >
                  Other Bootstrap 4 Elements
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-parent ${formPaths.includes(
                currentPath
              ) && "active"}`}
              to="#!"
            >
              <i className="batch-icon batch-icon-compose-alt-2" />
              Forms
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/forms"
                >
                  Form Elements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/forms-extras"
                >
                  Form Extras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/forms-validation"
                >
                  Form Validation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/forms-wizard"
                >
                  Form Wizard
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/tables">
              <i className="batch-icon batch-icon-layout-center-column" />
              Tables
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              to="#!"
              className={`nav-link nav-parent ${taskPaths.includes(
                currentPath
              ) && "active"}`}
            >
              <i className="batch-icon batch-icon-menu" />
              Menu Levels
            </Link>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="#!">
                  Level 1 - Item 1
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-parent" to="#!">
                  Level 1 - Item 2
                </Link>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="#!"
                    >
                      Level 2 - Item 1
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="#!"
                    >
                      Level 2 - Item 2
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-parent" to="#!">
                      Level 2 - Item 3
                    </Link>
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="#!"
                        >
                          Level 3 - Item 1
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="#!"
                        >
                          Level 3 - Item 2
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="#!"
                        >
                          Level 3 - Item 3
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active"
                          className="nav-link"
                          to="#!"
                        >
                          Level 3 - Item 4
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="#!"
                    >
                      Level 2 - Item 4
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="#!">
                  Level 1 - Item 3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="#!">
                  Level 1 - Item 4
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
