import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class FormDefault extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Forms</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Example select
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">
                          Example multiple select
                        </label>
                        <select
                          multiple
                          className="form-control"
                          id="exampleFormControlSelect2"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Example textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        />
                      </div>
                    </form>

                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Example file input
                        </label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                        />
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Sizing</h3>
                    <form>
                      <div className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder=".form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder=".form-control-sm"
                        />
                      </div>
                      <div className="form-group">
                        <select className="form-control form-control-lg">
                          <option>Large select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select className="form-control">
                          <option>Default select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select className="form-control form-control-sm">
                          <option>Small select</option>
                        </select>
                      </div>
                      <h4>Readonly</h4>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Readonly input here…"
                          readOnly
                        />
                      </div>
                    </form>

                    <form>
                      <blockquote>
                        If you want to have <code>&lt;input readOnly&gt;</code>{" "}
                        elements in your form styled as plain text, use the{" "}
                        <code>.form-control-plaintext</code> class to remove the
                        default form field styling and preserve the correct
                        margin and padding.
                      </blockquote>
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            readOnly=""
                            className="form-control-plaintext"
                            id="staticEmail"
                            value="email@example.com"
                            type="text"
                          />
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Checkboxes (Stacked)</h3>
                    <form>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          Default checkbox
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Disabled checkbox
                        </label>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Checkboxes (Inline)</h3>
                    <form>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox3"
                        >
                          3 (disabled)
                        </label>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Radios (Stacked)</h3>
                    <form>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Second default radio
                        </label>
                      </div>
                      <div className="form-check disabled">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios3"
                        >
                          Disabled radio
                        </label>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Radios (Inline)</h3>
                    <form>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio3"
                        >
                          3 (disabled)
                        </label>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Checkboxes &amp; Radio (Without labels)</h3>
                    <form>
                      <div className="form-check">
                        <input
                          className="form-check-input position-static"
                          type="checkbox"
                          id="blankCheckbox"
                          value="option1"
                          aria-label="..."
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Layouts - Default</h3>
                    <form>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">
                          Example label
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Example input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">
                          Another label
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Another input"
                        />
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Layouts - Grid</h3>
                    <h4>Type 1</h4>
                    <form>
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </form>
                    <br />
                    <h4>Type 2</h4>
                    <form>
                      <div className="form-row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Layouts - Horizontal Form</h3>
                    <form>
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail3"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="inputPassword3"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <fieldset className="form-group">
                        <div className="row">
                          <legend className="col-form-label col-sm-2 pt-0">
                            Radios
                          </legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridRadios1"
                              >
                                First radio
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridRadios2"
                              >
                                Second radio
                              </label>
                            </div>
                            <div className="form-check disabled">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios3"
                                value="option3"
                                disabled
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridRadios3"
                              >
                                Third disabled radio
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-group row">
                        <div className="col-sm-2">Checkbox</div>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridCheck1"
                            >
                              Example checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Layouts - Horizontal Form (Sizing)</h3>
                    <p>
                      Be sure to use <code>.col-form-label-sm</code> or{" "}
                      <code>.col-form-label-lg</code> to your{" "}
                      <code>&lt;label&gt;</code>s or <code>&lt;legend&gt;</code>
                      s to correctly follow the size of{" "}
                      <code>.form-control-lg</code> and{" "}
                      <code>.form-control-sm</code>.
                    </p>
                    <form>
                      <div className="form-group row">
                        <label
                          htmlFor="colFormLabelSm"
                          className="col-sm-2 col-form-label col-form-label-sm"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            id="colFormLabelSm"
                            placeholder="col-form-label-sm"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="colFormLabel"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="col-form-label"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="colFormLabelLg"
                          className="col-sm-2 col-form-label col-form-label-lg"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="colFormLabelLg"
                            placeholder="col-form-label-lg"
                          />
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Layouts - Horizontal Form (Auto-sizing)</h3>
                    <form>
                      <div className="form-row align-items-center">
                        <div className="col-auto">
                          <label className="sr-only" htmlFor="inlineFormInput">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div className="col-auto">
                          <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroup"
                          >
                            Username
                          </label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">@</div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="autoSizingCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="autoSizingCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary mb-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Inline</h3>
                    <form className="form-inline">
                      <label className="sr-only" htmlFor="inlineFormInputName2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Jane Doe"
                      />

                      <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroupUsername2"
                      >
                        Username
                      </label>
                      <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroupUsername2"
                          placeholder="Username"
                        />
                      </div>

                      <div className="form-check mb-2 mr-sm-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineFormCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineFormCheck"
                        >
                          Remember me
                        </label>
                      </div>

                      <button type="submit" className="btn btn-primary mb-2">
                        Submit
                      </button>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Help Text</h3>
                    <label htmlFor="inputPassword5">Password</label>
                    <input
                      type="password"
                      id="inputPassword5"
                      className="form-control"
                      aria-describedby="passwordHelpBlock"
                    />
                    <small
                      id="passwordHelpBlock"
                      className="form-text text-muted"
                    >
                      Your password must be 8-20 characters long, contain
                      letters and numbers, and must not contain spaces, special
                      characters, or emoji.
                    </small>
                    <br />
                    <br />
                    <form className="form-inline">
                      <div className="form-group">
                        <label htmlFor="inputPassword6">Password</label>
                        <input
                          type="password"
                          id="inputPassword6"
                          className="form-control mx-sm-3"
                          aria-describedby="passwordHelpInline"
                        />
                        <small id="passwordHelpInline" className="text-muted">
                          Must be 8-20 characters long.
                        </small>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Disabled</h3>
                    <form>
                      <fieldset disabled>
                        <div className="form-group">
                          <label htmlFor="disabledTextInput">
                            Disabled input
                          </label>
                          <input
                            type="text"
                            id="disabledTextInput"
                            className="form-control"
                            placeholder="Disabled input"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="disabledSelect">
                            Disabled select menu
                          </label>
                          <select id="disabledSelect" className="form-control">
                            <option>Disabled select</option>
                          </select>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            disabled
                          />
                          <label
                            className="form-check-label"
                            htmlFor="disabledFieldsetCheck"
                          >
                            Can&#39;t check this
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </fieldset>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Validation</h3>
                    <h4>Type 1</h4>
                    <div className="form-group has-success">
                      <label
                        className="form-control-label text-success"
                        htmlFor="inputSuccess1"
                      >
                        Input with success
                      </label>
                      <input
                        type="text"
                        className="form-control border border-success"
                        id="inputSuccess1"
                      />
                      <div className="form-control-feedback text-success">
                        Success! You&#39;ve done it.
                      </div>
                      <small className="form-text text-muted">
                        Example help text that remains unchanged.
                      </small>
                    </div>
                    <br />
                    <div className="form-group has-warning">
                      <label
                        className="form-control-label text-warning"
                        htmlFor="inputWarning1"
                      >
                        Input with warning
                      </label>
                      <input
                        type="text"
                        className="form-control border-warning"
                        id="inputWarning1"
                      />
                      <div className="form-control-feedback text-warning">
                        Shucks, check the formatting of that and try again.
                      </div>
                      <small className="form-text text-muted">
                        Example help text that remains unchanged.
                      </small>
                    </div>
                    <br />
                    <div className="form-group has-danger">
                      <label
                        className="form-control-label text-danger"
                        htmlFor="inputDanger1"
                      >
                        Input with danger
                      </label>
                      <input
                        type="text"
                        className="form-control border-danger"
                        id="inputDanger1"
                      />
                      <div className="form-control-feedback text-danger">
                        Sorry, that username&#39;s taken. Try another?
                      </div>
                      <small className="form-text text-muted">
                        Example help text that remains unchanged.
                      </small>
                    </div>
                    <br />
                    <br />
                    <h4>Type 2</h4>
                    <p>
                      Requires a <code>form</code> container with class{" "}
                      <code>needs-validation</code> and{" "}
                      <code>was-validated</code>. See code for more.
                    </p>
                    <form className="needs-validation" noValidate>
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom01">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="First name"
                            value="Mark"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom02">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="Last name"
                            value="Otto"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustomUsername">
                            Username
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustomUsername"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <div className="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationCustom03">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="City"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationCustom04">State</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom04"
                            placeholder="State"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationCustom05">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom05"
                            placeholder="Zip"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            Agree to terms and conditions
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Submit form
                      </button>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Custom (Checkbox)</h3>
                    <form>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlValidation1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation1"
                        >
                          Custom Checkbox
                        </label>
                      </div>
                    </form>
                    <form className="was-validated">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlValidation1a"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation1a"
                        >
                          Custom Checkbox with Error Handling
                        </label>
                        <div className="invalid-feedback">
                          Example invalid feedback text
                        </div>
                      </div>
                    </form>
                    <br />

                    <h3>Forms - Custom (Radio)</h3>
                    <form>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customControlValidation2a"
                          name="radio-stacked"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation2a"
                        >
                          Toggle this custom radio
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customControlValidation3a"
                          name="radio-stacked"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation3a"
                        >
                          Or toggle this other custom radio
                        </label>
                        <div className="invalid-feedback">
                          More example invalid feedback text
                        </div>
                      </div>
                    </form>
                    <form className="was-validated">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customControlValidation2"
                          name="radio-stacked"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation2"
                        >
                          Toggle this custom radio
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customControlValidation3"
                          name="radio-stacked"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlValidation3"
                        >
                          Or toggle this other custom radio
                        </label>
                        <div className="invalid-feedback">
                          More example invalid feedback text
                        </div>
                      </div>
                    </form>
                    <br />
                    <h3>Forms - Custom (Others)</h3>
                    <form className="was-validated">
                      <div className="form-group">
                        <select className="custom-select" required>
                          <option value="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="invalid-feedback">
                          Example invalid custom select feedback
                        </div>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                        <div className="invalid-feedback">
                          Example invalid custom file feedback
                        </div>
                      </div>
                    </form>
                    <br />
                    <br />

                    <h3>Forms - Input group</h3>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          @
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <br />
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient&#39;s username"
                        aria-label="Recipient&#39;s username"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                          @example.com
                        </span>
                      </div>
                    </div>

                    <br />
                    <label htmlFor="basic-url">Your vanity URL</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">
                          https://example.com/users/
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                    </div>

                    <br />
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>

                    <br />

                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">With textarea</span>
                      </div>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                      />
                    </div>

                    <br />
                    <br />

                    <h3>Forms - Input group (Multiple addons)</h3>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>

                    <br />
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                      </div>
                    </div>

                    <br />
                    <br />

                    <h3>Forms - Input group (Sizing)</h3>

                    <div className="input-group input-group-sm mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Small
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-default"
                        >
                          Default
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>

                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-lg"
                        >
                          Large
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Checkboxes and radio addons)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with checkbox"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <input
                                type="radio"
                                aria-label="Radio button for following text input"
                              />
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with radio button"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Multiple Inputs)</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="">
                              First and Last Name
                            </span>
                          </div>
                          <input type="text" className="form-control" />
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Button addons)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary" type="button">
                              Go!
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Go!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-offset-3 col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary" type="button">
                              Hate it
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your comment"
                            aria-label="Your comment"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Love it
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your comment"
                            aria-label="Search for..."
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Hate it
                            </button>
                            <button className="btn btn-primary" type="button">
                              Love it
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary" type="button">
                              <i className="batch-icon batch-icon-arrow-down" />
                            </button>
                            <button className="btn btn-primary" type="button">
                              <i className="batch-icon batch-icon-tilde" />
                            </button>
                            <button className="btn btn-primary" type="button">
                              <i className="batch-icon batch-icon-arrow-up" />
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your comment"
                            aria-label="Your comment"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Buttons with dropdowns)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
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
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <a className="dropdown-item" to="#!">
                                Separated link
                              </a>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
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
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <a className="dropdown-item" to="#!">
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Segmented buttons)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button type="button" className="btn btn-primary">
                              Action
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
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <a className="dropdown-item" to="#!">
                                Separated link
                              </a>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with segmented dropdown button"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with segmented dropdown button"
                          />
                          <div className="input-group-append">
                            <button type="button" className="btn btn-primary">
                              Action
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
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <a className="dropdown-item" to="#!">
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Custom select)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelect01"
                            >
                              Options
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <select
                            className="custom-select"
                            id="inputGroupSelect02"
                          >
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div className="input-group-append">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelect02"
                            >
                              Options
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary" type="button">
                              Button
                            </button>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect03"
                          >
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <select
                            className="custom-select"
                            id="inputGroupSelect04"
                          >
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Button
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />

                    <h3>Forms - Input group (Custom select)</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile02"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile02"
                            >
                              Choose file
                            </label>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text" id="">
                              Upload
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-primary" type="button">
                              Button
                            </button>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile03"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile03"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile04"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile04"
                            >
                              Choose file
                            </label>
                          </div>
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Button
                            </button>
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
        <div className="row mb-5">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default FormDefault;
