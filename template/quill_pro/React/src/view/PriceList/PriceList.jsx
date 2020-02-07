import React, { Component } from "react";
import "./PriceList.css";
import Footer from "../../layout/Footer/Footer";

class PriceList extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Price List</h1>
          </div>
        </div>
        <div className="row mb-5 pb-5 clearfix">
          <div className="col-md-12">
            <h2>Price List - Type 1</h2>
            <div className="card">
              <div className="card-price-list mt-5">
                <div className="pricing-plan">
                  <img
                    src="assets/img/paper-plane.png"
                    alt="Pricing"
                    className="pricing-img"
                    width="180"
                  />
                  <h2 className="pricing-header">Personal</h2>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Custom domains</li>
                    <li className="pricing-features-item">
                      Sleeps after 30 mins of inactivity
                    </li>
                  </ul>
                  <span className="pricing-price">Free</span>
                  <a href="#!" className="btn btn-outline-primary">
                    Sign up
                  </a>
                </div>
                <div className="pricing-plan">
                  <img
                    src="assets/img/plane.png"
                    alt="Pricing"
                    className="pricing-img"
                    width="180"
                  />
                  <h2 className="pricing-header">Small team</h2>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Never sleeps</li>
                    <li className="pricing-features-item">
                      Multiple workers for more powerful apps
                    </li>
                  </ul>
                  <span className="pricing-price">$150</span>
                  <a href="#!" className="btn btn-primary">
                    Free trial
                  </a>
                </div>
                <div className="pricing-plan">
                  <img
                    src="assets/img/space-ship.png"
                    alt="Pricing"
                    className="pricing-img"
                    width="180"
                  />
                  <h2 className="pricing-header">Enterprise</h2>
                  <ul className="pricing-features">
                    <li className="pricing-features-item">Dedicated</li>
                    <li className="pricing-features-item">
                      Simple horizontal scalability
                    </li>
                  </ul>
                  <span className="pricing-price">$400</span>
                  <a href="#!" className="btn btn-outline-primary">
                    Free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 pt-5 clearfix">
          <div className="col-md-12">
            <h2>Price List - Type 2</h2>
            <div className="price-list-type-2 clearfix">
              <div className="plan">
                <h3 className="plan-title">Starter</h3>
                <div className="plan-cost">
                  <span className="plan-price">$19</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-features">
                  <li>
                    <i className="ion-checkmark" />
                    5GB Linux Web Space
                  </li>
                  <li>
                    <i className="ion-checkmark" />5 MySQL Databases
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Unlimited Email
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    250Gb Monthly Transfer
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    24/7 Tech Support
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Daily Backups
                  </li>
                </ul>
                <div className="plan-select">
                  <a href="#!" className="btn btn-primary">
                    Select Plan
                  </a>
                </div>
              </div>
              <div className="plan">
                <h3 className="plan-title">Basic</h3>
                <div className="plan-cost">
                  <span className="plan-price">$29</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-features">
                  <li>
                    <i className="ion-checkmark" />
                    10GB Linux Web Space
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    10 MySQL Databases
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Unlimited Email
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    500Gb Monthly Transfer
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    24/7 Tech Support
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Daily Backups
                  </li>
                </ul>
                <div className="plan-select">
                  <a href="#!" className="btn btn-primary">
                    Select Plan
                  </a>
                </div>
              </div>
              <div className="plan featured bg-primary">
                <h3 className="plan-title">Pro</h3>
                <div className="plan-cost">
                  <span className="plan-price">$49</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-features">
                  <li>
                    <i className="ion-checkmark" />
                    25GB Linux Web Space
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    25 MySQL Databases
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Unlimited Email
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    2000Gb Monthly Transfer
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    24/7 Tech Support
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Daily Backups
                  </li>
                </ul>
                <div className="plan-select">
                  <a href="#!" className="btn btn-secondary btn-lg">
                    Select Plan
                  </a>
                </div>
              </div>
              <div className="plan">
                <h3 className="plan-title">Ultra</h3>
                <div className="plan-cost">
                  <span className="plan-price">$99</span>
                  <span className="plan-type">/ Monthly</span>
                </div>
                <ul className="plan-features">
                  <li>
                    <i className="ion-checkmark" />
                    100GB Linux Web Space
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Unlimited MySQL Databases
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Unlimited Email
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    10000Gb Monthly Transfer
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    24/7 Tech Support
                  </li>
                  <li>
                    <i className="ion-checkmark" />
                    Daily Backups
                  </li>
                </ul>
                <div className="plan-select">
                  <a href="#!" className="btn btn-primary">
                    Select Plan
                  </a>
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

export default PriceList;
