import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpFormMaskInput, qpTagsInput } from "../../utils/demo";

class FormExtras extends Component {
  componentDidMount() {
    /* CKEditor */
    const placeholder = ".load-ckeditor";
    if ($(placeholder).length) {
      $(placeholder).ckeditor();
    }

    qpFormMaskInput();
    qpTagsInput();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Forms Extras</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h2>1. Input Masking</h2>
                    <p className="lead">
                      Try out the fields below by entering any text, number or
                      character to see them in action.
                    </p>
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="control-label">Date</label>
                      <input
                        type="text"
                        className="date form-control"
                        autoComplete="off"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="hour-field">Hour</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-1"
                          >
                            <i className="batch-icon batch-icon-clock" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="time form-control"
                          id="hour-field"
                          placeholder="HH:mm:SS"
                          aria-describedby="inputGroupPrepend-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">Date &amp; Hour</label>
                      <input
                        type="text"
                        className="date_time form-control"
                        autoComplete="off"
                        placeholder="DD/MM/YYYY HH:mm:SS"
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Zip-Code</label>
                      <input
                        type="text"
                        className="cep form-control"
                        autoComplete="off"
                        placeholder="12345-678"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label" htmlFor="money-field">
                        Money
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-2"
                          >
                            $
                          </span>
                        </div>
                        <input
                          type="text"
                          className="money form-control"
                          autoComplete="off"
                          placeholder="123,456,789.00"
                          aria-describedby="inputGroupPrepend-2"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">
                        Mask placeholder option
                      </label>
                      <input
                        type="text"
                        className="placeholder form-control"
                        placeholder="__/__/____"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label
                        className="control-label"
                        htmlFor="telephone-field"
                      >
                        Telephone
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-3"
                          >
                            <i className="batch-icon batch-icon-headphones" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="phone form-control"
                          autoComplete="off"
                          placeholder="1234-5678"
                          aria-describedby="inputGroupPrepend-3"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label
                        className="control-label"
                        htmlFor="telephone-field-2"
                      >
                        Telephone with Code Area
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-4"
                          >
                            <i className="batch-icon batch-icon-headphones" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="phone_with_ddd form-control"
                          autoComplete="off"
                          placeholder="(01) 1234-5678"
                          aria-describedby="inputGroupPrepend-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label className="control-label">US Telephone</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-5"
                          >
                            <i className="batch-icon batch-icon-headphones" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="phone_us form-control"
                          autoComplete="off"
                          placeholder="(123) 1234-5678"
                          aria-describedby="inputGroupPrepend-5"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">
                        São Paulo Celphones
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend-6"
                          >
                            <i className="batch-icon batch-icon-headphones" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="sp_celphones form-control"
                          autoComplete="off"
                          placeholder="(23) 42342-4323"
                          aria-describedby="inputGroupPrepend-6"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">Mixed Type Mask</label>
                      <input
                        type="text"
                        className="mixed form-control"
                        autoComplete="off"
                        placeholder="Ab3 d5f-g8"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">CPF</label>
                      <input
                        type="text"
                        className="cpf form-control"
                        autoComplete="off"
                        placeholder="123.456.789-01"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">IP Address</label>
                      <input
                        type="text"
                        className="ip_address form-control"
                        autoComplete="off"
                        placeholder="123.456.789.012"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">
                        Mask with Clear If Not Match Option
                      </label>
                      <input
                        type="text"
                        className="clear-if-not-match form-control"
                        autoComplete="off"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label">
                        Mask with a Fallback Digit
                      </label>
                      <input
                        type="text"
                        className="fallback form-control"
                        autoComplete="off"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col-lg-12">
                    <h2>2. Input Tags</h2>
                    <form id="checkbox-form-3">
                      <div className="form-group">
                        <label>Basic (Type a word and press Enter)</label>
                        <select multiple className="form-control input-tags-1">
                          <option value="Amsterdam">Amsterdam</option>
                          <option value="Washington">Washington</option>
                          <option value="Sydney">Sydney</option>
                          <option value="Beijing">Beijing</option>
                          <option value="Cairo">Cairo</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Color-Coded</label>
                        <input
                          type="text"
                          value=""
                          className="form-control input-tags-2"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col-lg-12">
                    <h2>3. CKEditor</h2>
                    <p className="lead">
                      Just add the <code>.load-ckeditor</code> className to your{" "}
                      <code>textarea</code> and it will be automatically
                      converted to CKEditor.
                    </p>
                    <p>
                      Remember to add the CKEditor javascript files to your
                      page.
                    </p>
                    <textarea
                      className="form-control load-ckeditor"
                      rows="30"
                    />
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

export default FormExtras;
