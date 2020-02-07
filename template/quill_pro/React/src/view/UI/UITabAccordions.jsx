import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UITabAccordions extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Tabs &amp; Accordions</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <h2>Default</h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          id="disabled-tab"
                          data-toggle="tab"
                          href="#disabled"
                          role="tab"
                          aria-controls="disabled"
                          aria-selected="false"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <p className="text-justify">
                          {
                            "Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <p className="text-justify">
                          {
                            "Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <p className="text-justify">
                          {
                            "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="disabled"
                        role="tabpanel"
                        aria-labelledby="disabled-tab"
                      >
                        <p className="text-justify">
                          {
                            "Disabled tab... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2>Pills</h2>
                    <ul className="nav nav-pills" id="myTab-2" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab-2"
                          data-toggle="tab"
                          href="#home-2"
                          role="tab"
                          aria-controls="home-2"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab-2"
                          data-toggle="tab"
                          href="#profile-2"
                          role="tab"
                          aria-controls="profile-2"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab-2"
                          data-toggle="tab"
                          href="#contact-2"
                          role="tab"
                          aria-controls="contact-2"
                          aria-selected="false"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          id="disabled-tab-2"
                          data-toggle="tab"
                          href="#disabled-2"
                          role="tab"
                          aria-controls="disabled-2"
                          aria-selected="false"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent-2">
                      <div
                        className="tab-pane fade show active"
                        id="home-2"
                        role="tabpanel"
                        aria-labelledby="home-tab-2"
                      >
                        <p className="text-justify">
                          {
                            "Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile-2"
                        role="tabpanel"
                        aria-labelledby="profile-tab-2"
                      >
                        <p className="text-justify">
                          {
                            "Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact-2"
                        role="tabpanel"
                        aria-labelledby="contact-tab-2"
                      >
                        <p className="text-justify">
                          {
                            "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="disabled-2"
                        role="tabpanel"
                        aria-labelledby="disabled-tab-2"
                      >
                        <p className="text-justify">
                          {
                            "Disabled tab... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <h2>Pills with dropdowns</h2>
                    <ul className="nav nav-pills" id="myTab-3" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#tab-3-1"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-3-1"
                          aria-selected="true"
                        >
                          Active
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="#!"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            href="#tab-3-2"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-3-2"
                            aria-selected="false"
                          >
                            Action
                          </a>
                          <a
                            className="dropdown-item"
                            href="#tab-3-3"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-3-3"
                            aria-selected="false"
                          >
                            Another action
                          </a>
                          <a
                            className="dropdown-item"
                            href="#tab-3-4"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-3-4"
                            aria-selected="false"
                          >
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a
                            className="dropdown-item"
                            href="#tab-3-5"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-3-5"
                            aria-selected="false"
                          >
                            Separated link
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#tab-3-6"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-3-6"
                          aria-selected="false"
                        >
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="#tab-3-7"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-3-7"
                          aria-selected="false"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent-3">
                      <div
                        className="tab-pane fade show active"
                        id="tab-3-1"
                        role="tabpanel"
                        aria-labelledby="tab-3-1"
                      >
                        <p className="text-justify">
                          {
                            "Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-2"
                        role="tabpanel"
                        aria-labelledby="tab-3-2"
                      >
                        <p className="text-justify">
                          {
                            "Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-3"
                        role="tabpanel"
                        aria-labelledby="tab-3-3"
                      >
                        <p className="text-justify">
                          {
                            "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-4"
                        role="tabpanel"
                        aria-labelledby="tab-3-4"
                      >
                        <p className="text-justify">
                          {
                            "Tab 4... Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-5"
                        role="tabpanel"
                        aria-labelledby="tab-3-5"
                      >
                        <p className="text-justify">
                          {
                            "Tab 5... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-6"
                        role="tabpanel"
                        aria-labelledby="tab-3-6"
                      >
                        <p className="text-justify">
                          {
                            "Tab 6... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-3-7"
                        role="tabpanel"
                        aria-labelledby="tab-3-7"
                      >
                        <p className="text-justify">
                          {
                            "Disabled tab... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2>Tabs with dropdowns</h2>
                    <ul className="nav nav-pills" id="myTab-4" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#tab-4-1"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-4-1"
                          aria-selected="true"
                        >
                          Active
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="#!"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div className="dropdown-menu">
                          <a
                            className="dropdown-item"
                            href="#tab-4-2"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-4-2"
                            aria-selected="false"
                          >
                            Action
                          </a>
                          <a
                            className="dropdown-item"
                            href="#tab-4-3"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-4-3"
                            aria-selected="false"
                          >
                            Another action
                          </a>
                          <a
                            className="dropdown-item"
                            href="#tab-4-4"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-4-4"
                            aria-selected="false"
                          >
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a
                            className="dropdown-item"
                            href="#tab-4-5"
                            data-toggle="tab"
                            role="tab"
                            aria-controls="tab-4-5"
                            aria-selected="false"
                          >
                            Separated link
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#tab-4-6"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-4-6"
                          aria-selected="false"
                        >
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="#tab-4-7"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="tab-4-7"
                          aria-selected="false"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent-4">
                      <div
                        className="tab-pane fade show active"
                        id="tab-4-1"
                        role="tabpanel"
                        aria-labelledby="tab-4-1"
                      >
                        <p className="text-justify">
                          {
                            "Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-2"
                        role="tabpanel"
                        aria-labelledby="tab-4-2"
                      >
                        <p className="text-justify">
                          {
                            "Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-3"
                        role="tabpanel"
                        aria-labelledby="tab-4-3"
                      >
                        <p className="text-justify">
                          {
                            "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-4"
                        role="tabpanel"
                        aria-labelledby="tab-4-4"
                      >
                        <p className="text-justify">
                          {
                            "Tab 4... Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-5"
                        role="tabpanel"
                        aria-labelledby="tab-4-5"
                      >
                        <p className="text-justify">
                          {
                            "Tab 5... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-6"
                        role="tabpanel"
                        aria-labelledby="tab-4-6"
                      >
                        <p className="text-justify">
                          {
                            "Tab 6... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tab-4-7"
                        role="tabpanel"
                        aria-labelledby="tab-4-7"
                      >
                        <p className="text-justify">
                          {
                            "Disabled tab... Thical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2>Fill and Justify Tabs</h2>
                    <ul
                      className="nav nav-pills nav-justified"
                      id="myTab-3"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab-3"
                          data-toggle="tab"
                          href="#home-3"
                          role="tab"
                          aria-controls="home-3"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab-3"
                          data-toggle="tab"
                          href="#profile-3"
                          role="tab"
                          aria-controls="profile-3"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab-3"
                          data-toggle="tab"
                          href="#contact-3"
                          role="tab"
                          aria-controls="contact-3"
                          aria-selected="false"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          id="disabled-tab-3"
                          data-toggle="tab"
                          href="#disabled-3"
                          role="tab"
                          aria-controls="disabled-3"
                          aria-selected="false"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent-3">
                      <div
                        className="tab-pane fade show active"
                        id="home-3"
                        role="tabpanel"
                        aria-labelledby="home-tab-3"
                      >
                        <p className="text-justify">
                          {
                            "Raw denim you probably haven&#39;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile-3"
                        role="tabpanel"
                        aria-labelledby="profile-tab-3"
                      >
                        <p className="text-justify">
                          {
                            "Food truck fixie locavore, accusamus mcsweeney&#39;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact-3"
                        role="tabpanel"
                        aria-labelledby="contact-tab-3"
                      >
                        <p className="text-justify">
                          {
                            "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#39;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica."
                          }
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="disabled-3"
                        role="tabpanel"
                        aria-labelledby="disabled-tab-3"
                      >
                        <p className="text-justify">
                          Disabled tab... Thical wes anderson tofu before they
                          sold out mcsweeney&#39;s organic lomo retro fanny pack
                          lo-fi farm-to-table readymade. Messenger bag gentrify
                          pitchfork tattooed craft beer, iphone skateboard
                          locavore carles etsy salvia banksy hoodie helvetica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2>Vertical Pills</h2>
                    <div className="row">
                      <div className="col-3">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="v-pills-home-tab"
                            data-toggle="pill"
                            href="#v-pills-home"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-profile-tab"
                            data-toggle="pill"
                            href="#v-pills-profile"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-messages-tab"
                            data-toggle="pill"
                            href="#v-pills-messages"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                          >
                            Messages
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-settings-tab"
                            data-toggle="pill"
                            href="#v-pills-settings"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Settings
                          </a>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                          >
                            <p className="text-justify">
                              Cillum ad ut irure tempor velit nostrud occaecat
                              ullamco aliqua anim Lorem sint. Veniam sint duis
                              incididunt do esse magna mollit excepteur laborum
                              qui. Id id reprehenderit sit est eu aliqua
                              occaecat quis et velit excepteur laborum mollit
                              dolore eiusmod. Ipsum dolor in occaecat commodo et
                              voluptate minim reprehenderit mollit pariatur.
                              Deserunt non laborum enim et cillum eu deserunt
                              excepteur ea incididunt minim occaecat.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                          >
                            <p className="text-justify">
                              Culpa dolor voluptate do laboris laboris irure
                              reprehenderit id incididunt duis pariatur mollit
                              aute magna pariatur consectetur. Eu veniam duis
                              non ut dolor deserunt commodo et minim in quis
                              laboris ipsum velit id veniam. Quis ut consectetur
                              adipisicing officia excepteur non sit. Ut et elit
                              aliquip labore Lorem enim eu. Ullamco mollit
                              occaecat dolore ipsum id officia mollit qui esse
                              anim eiusmod do sint minim consectetur qui.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                          >
                            <p className="text-justify">
                              Fugiat id quis dolor culpa eiusmod anim velit
                              excepteur proident dolor aute qui magna. Ad
                              proident laboris ullamco esse anim Lorem Lorem
                              veniam quis Lorem irure occaecat velit nostrud
                              magna nulla. Velit et et proident Lorem do ea
                              tempor officia dolor. Reprehenderit Lorem aliquip
                              labore est magna commodo est ea veniam
                              consectetur.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            <p className="text-justify">
                              Eu dolore ea ullamco dolore Lorem id cupidatat
                              excepteur reprehenderit consectetur elit id dolor
                              proident in cupidatat officia. Voluptate excepteur
                              commodo labore nisi cillum duis aliqua do. Aliqua
                              amet qui mollit consectetur nulla mollit velit
                              aliqua veniam nisi id do Lorem deserunt amet.
                              Culpa ullamco sit adipisicing labore officia magna
                              elit nisi in aute tempor commodo eiusmod.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2>Vertical Tabs</h2>
                    <div className="row">
                      <div className="col-3">
                        <div
                          className="nav flex-column"
                          id="v-tabs-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="v-tabs-home-tab"
                            data-toggle="pill"
                            href="#v-tabs-home"
                            role="tab"
                            aria-controls="v-tabs-home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                          <a
                            className="nav-link"
                            id="v-tabs-profile-tab"
                            data-toggle="pill"
                            href="#v-tabs-profile"
                            role="tab"
                            aria-controls="v-tabs-profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                          <a
                            className="nav-link"
                            id="v-tabs-messages-tab"
                            data-toggle="pill"
                            href="#v-tabs-messages"
                            role="tab"
                            aria-controls="v-tabs-messages"
                            aria-selected="false"
                          >
                            Messages
                          </a>
                          <a
                            className="nav-link"
                            id="v-tabs-settings-tab"
                            data-toggle="pill"
                            href="#v-tabs-settings"
                            role="tab"
                            aria-controls="v-tabs-settings"
                            aria-selected="false"
                          >
                            Settings
                          </a>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tab-content" id="v-tabs-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-tabs-home"
                            role="tabpanel"
                            aria-labelledby="v-tabs-home-tab"
                          >
                            <p className="text-justify">
                              Cillum ad ut irure tempor velit nostrud occaecat
                              ullamco aliqua anim Lorem sint. Veniam sint duis
                              incididunt do esse magna mollit excepteur laborum
                              qui. Id id reprehenderit sit est eu aliqua
                              occaecat quis et velit excepteur laborum mollit
                              dolore eiusmod. Ipsum dolor in occaecat commodo et
                              voluptate minim reprehenderit mollit pariatur.
                              Deserunt non laborum enim et cillum eu deserunt
                              excepteur ea incididunt minim occaecat.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-tabs-profile"
                            role="tabpanel"
                            aria-labelledby="v-tabs-profile-tab"
                          >
                            <p className="text-justify">
                              Culpa dolor voluptate do laboris laboris irure
                              reprehenderit id incididunt duis pariatur mollit
                              aute magna pariatur consectetur. Eu veniam duis
                              non ut dolor deserunt commodo et minim in quis
                              laboris ipsum velit id veniam. Quis ut consectetur
                              adipisicing officia excepteur non sit. Ut et elit
                              aliquip labore Lorem enim eu. Ullamco mollit
                              occaecat dolore ipsum id officia mollit qui esse
                              anim eiusmod do sint minim consectetur qui.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-tabs-messages"
                            role="tabpanel"
                            aria-labelledby="v-tabs-messages-tab"
                          >
                            <p className="text-justify">
                              Fugiat id quis dolor culpa eiusmod anim velit
                              excepteur proident dolor aute qui magna. Ad
                              proident laboris ullamco esse anim Lorem Lorem
                              veniam quis Lorem irure occaecat velit nostrud
                              magna nulla. Velit et et proident Lorem do ea
                              tempor officia dolor. Reprehenderit Lorem aliquip
                              labore est magna commodo est ea veniam
                              consectetur.
                            </p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-tabs-settings"
                            role="tabpanel"
                            aria-labelledby="v-tabs-settings-tab"
                          >
                            <p className="text-justify">
                              Eu dolore ea ullamco dolore Lorem id cupidatat
                              excepteur reprehenderit consectetur elit id dolor
                              proident in cupidatat officia. Voluptate excepteur
                              commodo labore nisi cillum duis aliqua do. Aliqua
                              amet qui mollit consectetur nulla mollit velit
                              aliqua veniam nisi id do Lorem deserunt amet.
                              Culpa ullamco sit adipisicing labore officia magna
                              elit nisi in aute tempor commodo eiusmod.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Card Tabs</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-header">
                <ul
                  className="nav nav-tabs card-header-tabs"
                  id="myTab-6"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#tab-6-1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-6-1"
                      aria-selected="true"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-6-2"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-6-2"
                      aria-selected="false"
                    >
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#tab-6-3"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-6-3"
                      aria-selected="false"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="myTabContent-6">
                  <div
                    id="tab-6-1"
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="tab-6-1"
                  >
                    <h4 className="card-title">
                      Tab 1 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    id="tab-6-2"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="tab-6-2"
                  >
                    <h4 className="card-title">
                      Tab 2 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    id="tab-6-3"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="tab-6-3"
                  >
                    <h4 className="card-title">
                      Tab 3 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-header">
                <ul
                  className="nav nav-pills card-header-pills"
                  id="myTab-7"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#tab-7-1"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-7-1"
                      aria-selected="true"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-7-2"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-7-2"
                      aria-selected="false"
                    >
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#tab-7-3"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-7-3"
                      aria-selected="false"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="myTabContent-7">
                  <div
                    id="tab-7-1"
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="tab-7-1"
                  >
                    <h4 className="card-title">
                      Pill 1 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    id="tab-7-2"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="tab-7-2"
                  >
                    <h4 className="card-title">
                      Pill 2 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  <div
                    id="tab-7-3"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="tab-7-3"
                  >
                    <h4 className="card-title">
                      Pill 3 - Special title treatment
                    </h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a to="#!" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Accordions</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Button Controlled</h2>
            <p>
              <a
                className="btn btn-primary"
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Link with href
              </a>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Button with data-target
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <h2>Normal Accordion</h2>
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Collapsible Group Item #1
                    </a>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="card-body">
                    {
                      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#39;t heard of them accusamus labore sustainable VHS."
                    }
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Collapsible Group Item #2
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven&#39;t heard of
                    them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </a>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="card-body">
                    {
                      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#39;t heard of them accusamus labore sustainable VHS."
                    }
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

export default UITabAccordions;
