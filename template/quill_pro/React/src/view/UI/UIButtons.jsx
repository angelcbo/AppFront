import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class UIButtons extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Buttons</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2>1. Default Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>

                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>

                    <button type="button" className="btn btn-success">
                      Success
                    </button>

                    <button type="button" className="btn btn-info">
                      Info
                    </button>

                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>

                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>

                    <button type="button" className="btn btn-link">
                      Link
                    </button>

                    <button type="button" className="btn btn-light">
                      Light
                    </button>

                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                  </div>
                </div>
                <h2>2. Outline Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <p className="lead">
                      To make outline buttons, replace the default Bootstrap{" "}
                      <code>.btn-*</code> with <code>.btn-outline-*</code>. For
                      example: <code>.btn-outline-danger</code> for the danger
                      button
                    </p>
                    <button type="button" className="btn btn-outline-primary">
                      Primary
                    </button>

                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>

                    <button type="button" className="btn btn-outline-success">
                      Success
                    </button>

                    <button type="button" className="btn btn-outline-info">
                      Info
                    </button>

                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>

                    <button type="button" className="btn btn-outline-danger">
                      Danger
                    </button>

                    <button type="button" className="btn btn-outline-light">
                      Light
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-dark waves-effect waves-dark"
                    >
                      Dark
                    </button>
                  </div>
                </div>
                <h2>3. Gradient Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <p className="lead">
                      {
                        "In addition to Bootstrap&#39;s buttton classes, you can have gradient buttons by adding <code>.btn-gradient</code> to the button."
                      }
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-gradient"
                    >
                      Primary
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary btn-gradient"
                    >
                      Secondary
                    </button>

                    <button
                      type="button"
                      className="btn btn-green btn-gradient"
                    >
                      Green Primary
                    </button>

                    <button
                      type="button"
                      className="btn btn-yellow btn-gradient"
                    >
                      Yellow Primary
                    </button>

                    <button type="button" className="btn btn-blue btn-gradient">
                      Blue Primary
                    </button>

                    <button type="button" className="btn btn-red btn-gradient">
                      Red Primary
                    </button>

                    <button
                      type="button"
                      className="btn btn-purple btn-gradient"
                    >
                      Purple Primary
                    </button>

                    <button
                      type="button"
                      className="btn btn-orange btn-gradient"
                    >
                      Orange Primary
                    </button>
                  </div>
                </div>
                <h2>4. Button Sizes</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <button type="button" className="btn btn-primary btn-lg">
                      Large button
                    </button>
                    <button type="button" className="btn btn-secondary btn-lg">
                      Large button
                    </button>
                    <br />

                    <button type="button" className="btn btn-primary btn-sm">
                      Small button
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm">
                      Small button
                    </button>
                    <br />
                  </div>
                </div>
                <h2>5. Block Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Block level button
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg btn-block"
                    >
                      Block level button
                    </button>
                  </div>
                </div>
                <h2>6. Active State Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <a className="btn btn-primary active" to="#!">
                      Primary
                    </a>

                    <a className="btn btn-secondary active" to="#!">
                      Secondary
                    </a>

                    <a className="btn btn-success active" to="#!">
                      Success
                    </a>

                    <a className="btn btn-info active" to="#!">
                      Info
                    </a>

                    <a className="btn btn-warning active" to="#!">
                      Warning
                    </a>

                    <a className="btn btn-danger active" to="#!">
                      Danger
                    </a>

                    <a className="btn btn-link active" to="#!">
                      Link
                    </a>
                  </div>
                </div>
                <h2>7. Disabled State Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <h3>Buttons</h3>
                    <button type="button" className="btn btn-primary" disabled>
                      Primary
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled
                    >
                      Secondary
                    </button>

                    <button type="button" className="btn btn-success" disabled>
                      Success
                    </button>

                    <button type="button" className="btn btn-info" disabled>
                      Info
                    </button>

                    <button type="button" className="btn btn-warning" disabled>
                      Warning
                    </button>

                    <button type="button" className="btn btn-danger" disabled>
                      Danger
                    </button>

                    <button type="button" className="btn btn-link" disabled>
                      Link
                    </button>
                  </div>
                  <div className="col-md-12">
                    <h3>Links</h3>
                    <a className="btn btn-primary disabled" to="#!">
                      Primary
                    </a>
                    <a className="btn btn-secondary disabled" to="#!">
                      Secondary
                    </a>
                    <a className="btn btn-success disabled" to="#!">
                      Success
                    </a>
                    <a className="btn btn-info disabled" to="#!">
                      Info
                    </a>
                    <a className="btn btn-warning disabled" to="#!">
                      Warning
                    </a>
                    <a className="btn btn-danger disabled" to="#!">
                      Danger
                    </a>
                    <a className="btn btn-link disabled" to="#!">
                      Link
                    </a>
                  </div>
                </div>
                <h2>8. Checkbox Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <h3>Default</h3>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-primary active">
                        <input
                          type="checkbox"
                          defaultChecked
                          autoComplete="off"
                        />{" "}
                        Checkbox 1 (pre-checked)
                      </label>
                      <label className="btn btn-primary">
                        <input type="checkbox" autoComplete="off" /> Checkbox 2
                      </label>
                      <label className="btn btn-primary">
                        <input type="checkbox" autoComplete="off" /> Checkbox 3
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <h3>Custom</h3>
                    <p>
                      Add <code>.btn-group-custom-checkbox</code> to the{" "}
                      <code>.btn-group</code> class
                    </p>
                    <div
                      className="btn-group btn-group-toggle btn-group-custom-checkbox"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-primary active">
                        <input
                          type="checkbox"
                          defaultChecked
                          autoComplete="off"
                        />{" "}
                        Checkbox 1 (pre-checked)
                      </label>
                      <label className="btn btn-primary">
                        <input type="checkbox" autoComplete="off" /> Checkbox 2
                      </label>
                      <label className="btn btn-primary">
                        <input type="checkbox" autoComplete="off" /> Checkbox 3
                      </label>
                    </div>
                  </div>
                </div>
                <h2>9. Radio Buttons</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <h3>Default</h3>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-primary active">
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          autoComplete="off"
                          defaultChecked
                        />{" "}
                        Radio 1 (preselected)
                      </label>
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          autoComplete="off"
                        />{" "}
                        Radio 2
                      </label>
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          name="options"
                          id="option3"
                          autoComplete="off"
                        />{" "}
                        Radio 3
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <h3>Custom</h3>
                    <p>
                      Add <code>.btn-group-custom-radio</code> to the{" "}
                      <code>.btn-group</code> class
                    </p>
                    <div
                      className="btn-group btn-group-toggle btn-group-custom-radio"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-primary active">
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          autoComplete="off"
                          defaultChecked
                        />{" "}
                        Radio 1 (preselected)
                      </label>
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          name="options"
                          id="option2"
                          autoComplete="off"
                        />{" "}
                        Radio 2
                      </label>
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          name="options"
                          id="option3"
                          autoComplete="off"
                        />{" "}
                        Radio 3
                      </label>
                    </div>
                  </div>
                </div>
                <h2>10. Button Group &amp; Toolbars</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button type="button" className="btn btn-primary">
                          1
                        </button>
                        <button type="button" className="btn btn-primary">
                          2
                        </button>
                        <button type="button" className="btn btn-primary">
                          3
                        </button>
                        <button type="button" className="btn btn-primary">
                          4
                        </button>
                      </div>
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <button type="button" className="btn btn-primary">
                          5
                        </button>
                        <button type="button" className="btn btn-primary">
                          6
                        </button>
                        <button type="button" className="btn btn-primary">
                          7
                        </button>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Third group"
                      >
                        <button type="button" className="btn btn-primary">
                          8
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div
                      className="btn-toolbar mb-3"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group mr-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button type="button" className="btn btn-primary">
                          1
                        </button>
                        <button type="button" className="btn btn-primary">
                          2
                        </button>
                        <button type="button" className="btn btn-primary">
                          3
                        </button>
                        <button type="button" className="btn btn-primary">
                          4
                        </button>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text" id="btnGroupAddon">
                            @
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Input group example"
                          aria-label="Input group example"
                          aria-describedby="btnGroupAddon"
                        />
                      </div>
                    </div>

                    <div
                      className="btn-toolbar justify-content-between"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="First group"
                      >
                        <button type="button" className="btn btn-primary">
                          1
                        </button>
                        <button type="button" className="btn btn-primary">
                          2
                        </button>
                        <button type="button" className="btn btn-primary">
                          3
                        </button>
                        <button type="button" className="btn btn-primary">
                          4
                        </button>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text" id="btnGroupAddon2">
                            @
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Input group example"
                          aria-label="Input group example"
                          aria-describedby="btnGroupAddon2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h2>11. Button Group Sizes</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div
                      className="btn-group btn-group-lg"
                      role="group"
                      aria-label="Large button group"
                    >
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                    <br />
                    <br />
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Default button group"
                    >
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                    <br />
                    <br />
                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Small button group"
                    >
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                </div>
                <h2>12. Button Group Dropdown</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Button group with nested dropdown"
                    >
                      <button type="button" className="btn btn-primary">
                        1
                      </button>
                      <button type="button" className="btn btn-primary">
                        2
                      </button>

                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupDrop1"
                        >
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <button type="button" className="btn btn-primary">
                        Button
                      </button>
                      <button type="button" className="btn btn-primary">
                        Button
                      </button>
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupVerticalDrop1"
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupVerticalDrop1"
                        >
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary">
                        Button
                      </button>
                      <button type="button" className="btn btn-primary">
                        Button
                      </button>
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupVerticalDrop2"
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupVerticalDrop2"
                        >
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupVerticalDrop3"
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupVerticalDrop3"
                        >
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupVerticalDrop4"
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupVerticalDrop4"
                        >
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                          <a className="dropdown-item" to="#!">
                            Dropdown link
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
                <h2>13. Dropdown Button</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <h3>Normal</h3>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Primary
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Secondary
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Success
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-info dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Info
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-warning dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Warning
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-danger dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Danger
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                  <div className="col-md-12 mb-3">
                    <h3>Outline</h3>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Primary
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Secondary
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-success dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Success
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-info dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Info
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-warning dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Warning
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupVerticalDrop2"
                        type="button"
                        className="btn btn-outline-danger dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Danger
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupVerticalDrop2"
                      >
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                        <a className="dropdown-item" to="#!">
                          Dropdown link
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                  <div className="col-md-12 mb-3">
                    <h3>Split</h3>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary">
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success">
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-info">
                        Info
                      </button>
                      <button
                        type="button"
                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-warning">
                        Warning
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger">
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>14. Dropdown Button Sizes</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div className="btn-toolbar" role="toolbar">
                      <div className="btn-group">
                        <button
                          className="btn btn-primary btn-lg dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Large button
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" to="#!">
                            Action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Another action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" to="#!">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group ml-2">
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                        >
                          Large split button
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" to="#!">
                            Action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Another action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" to="#!">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="btn-toolbar" role="toolbar">
                      <div className="btn-group">
                        <button
                          className="btn btn-primary btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Small button
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" to="#!">
                            Action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Another action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" to="#!">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <div className="btn-group ml-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Small split button
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" to="#!">
                            Action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Another action
                          </a>
                          <a className="dropdown-item" to="#!">
                            Something else here
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" to="#!">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>15. Dropups</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div className="btn-group dropup">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropup
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <div className="btn-group dropup">
                      <button type="button" className="btn btn-primary">
                        Split dropup
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>16. Dropdown - Align Right</h2>
                <div className="row mb-5">
                  <div className="col-md-12 mb-3">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {"This dropdown&#39;s menu is right-aligned"}
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" to="#!">
                          Action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Another action
                        </a>
                        <a className="dropdown-item" to="#!">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" to="#!">
                          Separated link
                        </a>
                      </div>
                    </div>
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

export default UIButtons;
