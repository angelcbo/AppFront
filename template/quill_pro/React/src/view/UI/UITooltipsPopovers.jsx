import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";
import { qpTooltipPopover } from "../../utils/misc";

class UITooltipsPopovers extends Component {
  componentDidMount() {
    qpTooltipPopover();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Tooltips &amp; Popovers</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Tooltips Link In Text</div>
              <div className="card-body">
                <p className="muted">
                  Tight pants next level keffiyeh{" "}
                  <a
                    to="#!"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Default tooltip"
                  >
                    you probably
                  </a>{" "}
                  haven&#39;t heard of them. Photo booth beard raw denim
                  letterpress vegan messenger bag stumptown. Farm-to-table
                  seitan, mcsweeney&#39;s fixie sustainable quinoa 8-bit
                  american apparel{" "}
                  <a to="#!" data-toggle="tooltip" title="Another tooltip">
                    have a
                  </a>{" "}
                  terry richardson vinyl chambray. Beard stumptown, cardigans
                  banh mi lomo thundercats. Tofu biodiesel williamsburg marfa,
                  four loko mcsweeney&#39;s cleanse vegan chambray. A really
                  ironic artisan{" "}
                  <a to="#!" data-toggle="tooltip" title="Another one here too">
                    whatever keytar
                  </a>
                  , scenester farm-to-table banksy Austin{" "}
                  <a to="#!" data-toggle="tooltip" title="The last tip!">
                    twitter handle
                  </a>{" "}
                  freegan cred raw denim single-origin coffee viral.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Tooltips Buttons</div>
              <div className="card-body text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                >
                  Tooltip on top
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Tooltip on right"
                >
                  Tooltip on right
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Tooltip on bottom"
                >
                  Tooltip on bottom
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Tooltip on left"
                >
                  Tooltip on left
                </button>
                <br />
                <button
                  type="button"
                  className="btn btn-danger"
                  data-toggle="tooltip"
                  data-html="true"
                  title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                >
                  Tooltip with HTML
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Popover</div>
              <div className="card-body text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on top
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on right
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on bottom
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="left"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on left
                </button>
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

export default UITooltipsPopovers;
