import React, { Component } from "react";
import { Link } from "react-router-dom";
import { qpMailboxMessageCompose } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";

class MailCompose extends Component {
  state = {
    emailRecipentMain: "",
    emailRecipentCC: "",
    emailRecipentBCC: "",
    emailSubject: ""
  };

  componentDidMount() {
    /* CKEditor */
    const placeholder = ".load-ckeditor";
    if ($(placeholder).length) {
      $(placeholder).ckeditor();
    }

    qpMailboxMessageCompose();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const editorDefaultContent = `<p></p><p></p>
      <blockquote>
      <p>Hey Ken,</p>
      <p>Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.<p>

      <p>Unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>

      <p>Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive.</p>

      <p>Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six. Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is.</p>

      <p>Case read they must it of cold that. Speaking trifling an to unpacked moderate debating learning. An particular contrasted he excellence favourable on. Nay preference dispatched difficulty continuing joy one. Songs it be if ought hoped of. Too carriage attended him entrance desirous the saw. Twenty sister hearts garden limits put has. We hill lady will both sang room by. Desirous men exercise overcame procured speaking her followed.</p>

      <p>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal. Frequently sufficient in be unaffected. The furnished she concluded depending procuring concealed.</p>
      <p>
      Kind Regards,<br>
      Teal&#39;c Jafar</p>
      </blockquote>`;

    const {
      emailRecipentBCC,
      emailRecipentMain,
      emailRecipentCC,
      emailSubject
    } = this.state;

    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Mail - Compose</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-mailbox">
                <div className="row mx-0">
                  <div className="col-lg-3 pt-5">
                    <div className="mailbox-menu">
                      <div className="mailbox-compose-outer">
                        <div className="compose-message">
                          <Link
                            to="/mail-compose"
                            className="btn btn-primary btn-gradient btn-block"
                            role="button"
                          >
                            <i className="batch-icon batch-icon-compose" />
                            Compose
                          </Link>
                        </div>
                        <div className="mailbox-mobile-menu-control d-lg-none">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-block dropdown-toggle"
                              type="button"
                              id="mailbox-mobile-menu"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-flip="false"
                            >
                              Mailbox Menu
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="mailbox-mobile-menu"
                            >
                              <a className="dropdown-item" href="#!">
                                Inbox
                                <span className="badge badge-pill badge-secondary float-right">
                                  192
                                </span>
                              </a>
                              <a className="dropdown-item" href="#!">
                                Important
                                <span className="badge badge-pill badge-primary float-right">
                                  6
                                </span>
                              </a>
                              <a className="dropdown-item" href="#!">
                                Sent Mail
                                <span className="badge badge-pill badge-primary float-right">
                                  6
                                </span>
                              </a>
                              <a className="dropdown-item" href="#!">
                                Drafts
                                <span className="badge badge-pill badge-primary float-right">
                                  1
                                </span>
                              </a>
                              <a className="dropdown-item" href="#!">
                                Trash
                                <span className="badge badge-pill badge-primary float-right">
                                  13
                                </span>
                              </a>
                              <a className="dropdown-item" href="#!">
                                Junk Mail
                                <span className="badge badge-pill badge-danger float-right">
                                  35
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group mailbox-menu-actual d-lg-block">
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action active"
                        >
                          Inbox
                          <span className="badge badge-pill badge-secondary float-right">
                            192
                          </span>
                        </a>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action"
                        >
                          Important
                          <span className="badge badge-pill badge-primary float-right">
                            6
                          </span>
                        </a>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action"
                        >
                          Sent Mail
                          <span className="badge badge-pill badge-primary float-right">
                            6
                          </span>
                        </a>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action"
                        >
                          Drafts
                          <span className="badge badge-pill badge-primary float-right">
                            1
                          </span>
                        </a>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action"
                        >
                          Trash
                          <span className="badge badge-pill badge-primary float-right">
                            13
                          </span>
                        </a>
                        <a
                          href="#!"
                          className="list-group-item list-group-item-action"
                        >
                          Junk Mail
                          <span className="badge badge-pill badge-danger float-right">
                            35
                          </span>
                        </a>
                      </div>
                      <div className="mailbox-tags">
                        <h5>Tags</h5>
                        <a href="#!">
                          <span className="badge badge-success">New</span>
                        </a>
                        <a href="#!">
                          <span className="badge badge-primary">Update</span>
                        </a>
                        <a href="#!">
                          <span className="badge badge-warning">Automated</span>
                        </a>
                        <a href="#!">
                          <span className="badge badge-danger">Urgent</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="mailbox-container mailbox-message-compose">
                      <div className="mailbox-controls clearfix">
                        <div className="email-pager-top">
                          <div className="email-pager-container">
                            <a
                              href="#!"
                              className="btn btn-primary"
                              id="send-email"
                              data-toggle="tooltip"
                              title="Send Message"
                            >
                              <i className="batch-icon batch-icon-mail" />
                              Send Message
                            </a>
                          </div>
                        </div>
                        <div
                          className="btn-group mailbox-control-group"
                          role="group"
                          aria-label="Add Attachement or Save Draft"
                        >
                          <button
                            type="button"
                            className="btn btn-primary email-mark-read attach-file"
                            data-toggle="tooltip"
                            title="Add Attachement(s)"
                          >
                            <i className="batch-icon batch-icon-attachment-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary email-mark-important save-email"
                            data-toggle="tooltip"
                            title="Save as Draft"
                          >
                            <i className="batch-icon batch-icon-safe" />
                          </button>
                        </div>
                        <a
                          href="#!"
                          className="btn btn-danger discard-email"
                          data-toggle="tooltip"
                          title="Discard Message"
                        >
                          <i className="batch-icon batch-icon-bin-alt-2" />
                        </a>
                      </div>

                      <form id="message-compose">
                        <div className="form-group email-recepient-main-container">
                          <label htmlFor="email-recepient-main">To: </label>
                          <span className="float-right text-right">
                            <a href="#!" id="add-cc" className="">
                              Add Cc
                            </a>
                            <a href="#!" id="add-bcc" className="">
                              Add Bcc
                            </a>
                          </span>
                          <span className="text-muted">
                            Type the person&#39;s name or enter a new to add to
                            the Address Book (eg: Samantha or demo@example.com)
                          </span>
                          <input
                            onChange={this.handleChange}
                            name="emailRecipentMain"
                            id="email-recepient-main"
                            type="text"
                            value={emailRecipentMain}
                            className="form-control email-recepient email-recepient-main"
                          />
                        </div>
                        <div className="form-group email-recepient-cc-container">
                          <label htmlFor="email-recepient-cc">Cc: </label>{" "}
                          <a href="#!" id="remove-cc" className="float-right">
                            Remove Cc
                          </a>
                          <input
                            onChange={this.handleChange}
                            name="emailRecipentCC"
                            id="email-recepient-cc"
                            type="text"
                            value={emailRecipentCC}
                            className="form-control email-recepient email-recepient-cc"
                          />
                        </div>
                        <div className="form-group email-recepient-bcc-container">
                          <label htmlFor="email-recepient-bcc">Bcc: </label>{" "}
                          <a href="#!" id="remove-bcc" className="float-right">
                            Remove Bcc
                          </a>
                          <input
                            onChange={this.handleChange}
                            name="emailRecipentBCC"
                            id="email-recepient-bcc"
                            type="text"
                            value={emailRecipentBCC}
                            className="form-control email-recepient email-recepient-bcc"
                          />
                        </div>
                        <div className="form-group email-subject-container">
                          <label htmlFor="email-subject">Subject</label>
                          <input
                            onChange={this.handleChange}
                            name="emailSubject"
                            id="email-subject"
                            type="text"
                            defaultValue="Re: Dude! Check out my pics from Bali!"
                            className="form-control email-subject"
                          />
                        </div>
                        <div className="form-group email-body-container">
                          <textarea
                            defaultValue={editorDefaultContent}
                            id="email-body"
                            className="form-control email-body load-ckeditor"
                            rows="30"
                          />
                        </div>
                        <div className="message-attachment">
                          <div className="h3">Attachments</div>
                          <div className="message-attachment-list">
                            <table className="table table-hover">
                              <tbody>
                                <tr>
                                  <td className="attachment-name">
                                    Chilly-Christmas-2014-IMG-001
                                    <span className="badge badge-primary">
                                      jpg
                                    </span>
                                  </td>
                                  <td className="attachment-action">
                                    <a
                                      href="#!"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-delete text-danger" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="attachment-name">
                                    Chilly-Christmas-2014-IMG-239
                                    <span className="badge badge-primary">
                                      jpg
                                    </span>
                                  </td>
                                  <td className="attachment-action">
                                    <a
                                      href="#!"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-delete text-danger" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="mailbox-controls clearfix">
                          <div
                            className="btn-group mailbox-control-group"
                            role="group"
                            aria-label="Add Attachement or Save Draft"
                          >
                            <button
                              type="button"
                              className="btn btn-primary email-mark-read attach-file"
                              data-toggle="tooltip"
                              title="Add Attachement(s"
                            >
                              <i className="batch-icon batch-icon-attachment-alt" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary email-mark-important save-email"
                              data-toggle="tooltip"
                              title="Save as Draft"
                            >
                              <i className="batch-icon batch-icon-safe" />
                            </button>
                          </div>
                        </div>
                      </form>
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

export default MailCompose;
