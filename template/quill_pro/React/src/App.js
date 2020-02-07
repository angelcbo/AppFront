import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SideBar from "./layout/SideBar/SideBar";
import NavigationBar from "./layout/NavBar/NavBar";
import { SidebarHorizontal } from "./layout/SideBar/SidebarHorizontal";
import { NavbarHorizontal } from "./layout/NavBar/NavbarHorizontal";

import Invoice from "./view/Invoice/Invoice";
import Home from "./view/Home/Home";
import "./App.css";
import LayoutTopMenu from "./view/Layout/LayoutTopMenu";
import LayoutLeftMenu from "./view/Layout/LayoutLeftMenu";
import PriceList from "./view/PriceList/PriceList";
import { MailInbox, MailCompose, MailMessage } from "./view/Mail/Mail";
import TaskList from "./view/Task/TaskList";
import TaskManager from "./view/Task/TaskManager";

import EcommerceDashboard from "./view/Ecommerce/EcommerceDashboard";
import EcommerceProductPage from "./view/Ecommerce/EcommerceProductPage";
import EcommerceCategoryPage from "./view/Ecommerce/EcommerceCategoryPage";
import EcommerceCart from "./view/Ecommerce/EcommerceCart";
import EcommerceCheckoutPage from "./view/Ecommerce/EcommerceCheckoutPage";
import SearchResultsNormal from "./view/SearchResults/SearchResultsNormal";
import SearchResultsMedia from "./view/SearchResults/SearchResultsMedia";
import Timeline from "./view/Timeline/Timeline";
import Gallery from "./view/Gallery/Gallery";
import ErrorPages404 from "./view/ErrorPages/ErrorPages404";
import ErrorPages500 from "./view/ErrorPages/ErrorPages500";
import ProfilePage from "./view/ProfilePage/ProfilePage";
import Tables from "./view/Tables/Tables";

import UICard from "./view/UI/UICard";
import UICardSpecial from "./view/UI/UICardSpecial";
import UICharts from "./view/UI/UICharts";
import UIIconsBatchIcons from "./view/UI/UIIconsBatchIcons";
import UIButtons from "./view/UI/UIButtons";
import UITabAccordions from "./view/UI/UITabAccordions";
import UITypography from "./view/UI/UITypography";
import UIOtherBootstrapElements from "./view/UI/UIOtherBootstrapElements";
import UITooltipsPopovers from "./view/UI/UITooltipsPopovers";
import UIModalBoxes from "./view/UI/UIModalBoxes";

import FormDefault from "./view/Forms/FormDefault";
import FormExtras from "./view/Forms/FormExtras";
import FormWizard from "./view/Forms/FormWizard";
import FormValidation from "./view/Forms/FormValidation";
import SiSuSignIn from "./view/SiSu/SiSuSignIn";
import SiSuSignIn2 from "./view/SiSu/SiSuSignIn2";
import SiSuSignUp from "./view/SiSu/SiSuSignUp";
import SiSuSignUp2 from "./view/SiSu/SiSuSignUp2";
import SiSuForgotPassword from "./view/SiSu/SiSuForgotPassword";
import SiSuForgotPassword2 from "./view/SiSu/SiSuForgotPassword2";
import SiSuLockScreen from "./view/SiSu/SiSuLockScreen";
import SiSuLockScreen2 from "./view/SiSu/SiSuLockScreen2";

class App extends Component {
  render() {
    const currentPath = window.location.href;
    // const qpBaseURL = process.env.PUBLIC_URL;
    // const qpBaseURL = '';

    // const SiSuSignInURL = `${qpBaseURL}/sisu-signin`;
    // const SiSuSignIn2URL = `${qpBaseURL}/sisu-signin-2`;
    // const SiSuSignUpURL = `${qpBaseURL}/sisu-signup`;
    // const SiSuSignUp2URL = `${qpBaseURL}/sisu-signup-2`;
    // const SiSuForgotPasswordURL = `${qpBaseURL}/sisu-forgot-password`;
    // const SiSuForgotPassword2URL = `${qpBaseURL}/sisu-forgot-password-2`;
    // const SiSuLockScreenURL = `${qpBaseURL}/sisu-lock-screen`;
    // const SiSuLockScreen2URL = `${qpBaseURL}/sisu-lock-screen-2`;
    // const ErrorPages500URL = `${qpBaseURL}/error-pages-500`;

    if (currentPath.includes("/sisu-signin")) return <SiSuSignIn />;
    if (currentPath.includes("/sisu-signin-2")) return <SiSuSignIn2 />;
    if (currentPath.includes("/sisu-signup")) return <SiSuSignUp />;
    if (currentPath.includes("/sisu-signup-2")) return <SiSuSignUp2 />;
    if (currentPath.includes("/sisu-forgot-password"))
      return <SiSuForgotPassword />;
    if (currentPath.includes("/sisu-forgot-password-2"))
      return <SiSuForgotPassword2 />;
    if (currentPath.includes("/sisu-lock-screen")) return <SiSuLockScreen />;
    if (currentPath.includes("/sisu-lock-screen-2")) return <SiSuLockScreen2 />;
    if (currentPath.includes("/error-pages-500")) return <ErrorPages500 />;

    return (
      <div className="container-fluid">
        <div className="row">
          {currentPath.includes("layout-top-menu") ? (
            <NavbarHorizontal />
          ) : (
            <SideBar />
          )}
          <div className="right-column">
            {currentPath.includes("layout-top-menu") ? (
              <SidebarHorizontal />
            ) : (
              <NavigationBar />
            )}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/invoice" component={Invoice} />
              <Route
                exact
                path="/layout-top-menu-fixed"
                component={LayoutTopMenu}
              />
              <Route
                exact
                path="/layout-top-menu-normal"
                component={LayoutTopMenu}
              />
              <Route
                exact
                path="/layout-left-menu-hidden"
                component={LayoutLeftMenu}
              />
              <Route
                exact
                path="/layout-left-menu-normal"
                component={LayoutLeftMenu}
              />
              <Route exact path="/price-list" component={PriceList} />
              <Route exact path="/mail-inbox" component={MailInbox} />
              <Route exact path="/mail-compose" component={MailCompose} />
              <Route exact path="/mail-message" component={MailMessage} />
              <Route exact path="/task-list" component={TaskList} />
              <Route exact path="/task-manager" component={TaskManager} />
              <Route
                exact
                path="/ecommerce-dashboard"
                component={EcommerceDashboard}
              />
              <Route
                exact
                path="/ecommerce-product-page"
                component={EcommerceProductPage}
              />
              <Route
                exact
                path="/ecommerce-category-page"
                component={EcommerceCategoryPage}
              />
              <Route exact path="/ecommerce-cart" component={EcommerceCart} />
              <Route
                exact
                path="/ecommerce-checkout-page"
                component={EcommerceCheckoutPage}
              />
              <Route
                exact
                path="/search-results-normal"
                component={SearchResultsNormal}
              />
              <Route
                exact
                path="/search-results-media"
                component={SearchResultsMedia}
              />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/error-pages-404" component={ErrorPages404} />
              <Route exact path="/error-pages-500" component={ErrorPages500} />
              <Route
                exact
                path="/profiles-member-profile"
                component={ProfilePage}
              />
              <Route exact path="/tables" component={Tables} />

              <Route exact path="/ui-cards" component={UICard} />
              <Route exact path="/ui-cards-special" component={UICardSpecial} />
              <Route exact path="/ui-charts" component={UICharts} />
              <Route
                exact
                path="/ui-icons-batch-icons"
                component={UIIconsBatchIcons}
              />
              <Route exact path="/ui-buttons" component={UIButtons} />
              <Route
                exact
                path="/ui-tabs-accordions"
                component={UITabAccordions}
              />
              <Route
                exact
                path="/ui-other-bootstrap-elements"
                component={UIOtherBootstrapElements}
              />
              <Route exact path="/ui-typography" component={UITypography} />
              <Route
                exact
                path="/ui-tooltips-popovers"
                component={UITooltipsPopovers}
              />
              <Route exact path="/ui-modal-boxes" component={UIModalBoxes} />

              <Route exact path="/forms" component={FormDefault} />
              <Route exact path="/forms-extras" component={FormExtras} />
              <Route exact path="/forms-wizard" component={FormWizard} />
              <Route
                exact
                path="/forms-validation"
                component={FormValidation}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
