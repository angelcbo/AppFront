import React, { Component } from "react";
import { Link } from "react-router-dom";
import { qpMailboxMessageCompose } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";

class MailMessage extends Component {
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
            <h1>Mail - Message</h1>
          </div>
        </div>
        <div className="row mb-5">
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
                          className="list-group-item list-group-item-action active"
                          to="#!"
                        >
                          Inbox
                          <span className="badge badge-pill badge-secondary float-right">
                            192
                          </span>
                        </a>
                        <a
                          className="list-group-item list-group-item-action"
                          to="#!"
                        >
                          Important
                          <span className="badge badge-pill badge-primary float-right">
                            6
                          </span>
                        </a>
                        <a
                          className="list-group-item list-group-item-action"
                          to="#!"
                        >
                          Sent Mail
                          <span className="badge badge-pill badge-primary float-right">
                            6
                          </span>
                        </a>
                        <a
                          className="list-group-item list-group-item-action"
                          to="#!"
                        >
                          Drafts
                          <span className="badge badge-pill badge-primary float-right">
                            1
                          </span>
                        </a>
                        <a
                          className="list-group-item list-group-item-action"
                          to="#!"
                        >
                          Trash
                          <span className="badge badge-pill badge-primary float-right">
                            13
                          </span>
                        </a>
                        <a
                          className="list-group-item list-group-item-action"
                          to="#!"
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
                    <div
                      className="mailbox-container mailbox-message-view"
                      data-email-id="1"
                    >
                      <div className="mailbox-controls clearfix">
                        <div className="email-pager-top">
                          <div className="email-pager-container">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Previous or Next Page"
                            >
                              <button
                                type="button"
                                className="btn btn-primary email-list-previous"
                                data-toggle="tooltip"
                                title="Previous"
                              >
                                <i className="batch-icon batch-icon-arrow-left" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary email-list-next"
                                data-toggle="tooltip"
                                title="Next"
                              >
                                <i className="batch-icon batch-icon-arrow-right" />
                              </button>
                            </div>
                          </div>
                          <div className="email-pager-count hidden-xs hidden-sm">
                            1-30 of 1284
                          </div>
                        </div>
                      </div>
                      <div className="message-subject h2">
                        Dude! Check out my pics from Bali!
                        <span className="email-extra-icons">
                          <i
                            className="batch-icon batch-icon-spam"
                            data-toggle="tooltip"
                            title="Warning: Junk Mail"
                          />
                          <i
                            className="batch-icon batch-icon-attachment-alt"
                            data-toggle="tooltip"
                            title="Has Attachment(s)"
                          />
                        </span>
                      </div>
                      <div className="message-general-info-container">
                        <div className="message-controls">
                          <div className="btn-group">
                            <Link
                              to="/mail-compose"
                              className="btn btn-secondary"
                            >
                              <i className="batch-icon batch-icon-reply" />
                              Reply
                            </Link>
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-flip="false"
                            >
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="reply-mail-dropdown"
                            >
                              <a className="dropdown-item" href="#!">
                                <i className="batch-icon batch-icon-reply-all" />
                                Reply All
                              </a>
                              <a className="dropdown-item" href="#!">
                                <i className="batch-icon batch-icon-options" />
                                Forward Message
                              </a>
                              <a className="dropdown-item" href="#!">
                                <i className="batch-icon batch-icon-envelope" />
                                Mark as Unread
                              </a>
                              <a className="dropdown-item" href="#!">
                                <i className="batch-icon batch-icon-bin-alt-2" />
                                Delete Message
                              </a>
                              <a className="dropdown-item" href="#!">
                                <i className="batch-icon batch-icon-spam" />
                                This is Junk Mail
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="message-general-info">
                          <div className="message-sender-image">
                            <a href="#!">
                              <div className="profile-picture bg-gradient bg-primary float-right d-flex mr-3">
                                <img
                                  src="assets/img/profile-pic.jpg"
                                  width="44"
                                  height="44"
                                  alt="Profile"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="message-sender">
                            From:{" "}
                            <span className="sender-name">
                              Teal&#39;c Jafar
                            </span>{" "}
                            <span className="sender-email">
                              (tealc@example.com)
                            </span>
                          </div>
                          <div className="message-recepient">
                            To: <span className="recepient-name">Me</span>{" "}
                            <span className="send-date">
                              at 11:24 AM on 27 Dec 2014
                            </span>{" "}
                            - [{" "}
                            <a href="#!" id="show-others">
                              show other recipients
                            </a>{" "}
                            ]
                          </div>
                          <div className="message-recepient-others">
                            <ul>
                              <li>
                                Cc: <strong>Samantha Carter</strong> -{" "}
                                <a href="#!">samantha@example.com</a>;{" "}
                                <strong>Jack O&#39;neill</strong> -{" "}
                                <a href="#!">jack@example.com</a>;{" "}
                                <strong>Danielle Jackson</strong> -{" "}
                                <a href="#!">danielle@example.com</a>
                              </li>
                              <li>
                                Bcc: <strong>George Hammond</strong> -{" "}
                                <a href="#!">george@example.com</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="message-body-container">
                        <div className="message-body">
                          <p>Hey Ken,</p>
                          <p>
                            Completely synergize resource sucking relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </p>
                          <p>
                            Unleash cross-media information without cross-media
                            value. Quickly maximize timely deliverables for
                            real-time schemas. Dramatically maintain
                            clicks-and-mortar solutions without functional
                            solutions.
                          </p>
                          <p>
                            Whole every miles as tiled at seven or. Wished he
                            entire esteem mr oh by. Possible bed you pleasure
                            civility boy elegance ham. He prevent request by if
                            in pleased. Picture too and concern has was comfort.
                            Ten difficult resembled eagerness nor. Same park
                            bore on be. Warmth his law design say are person.
                            Pronounce suspected in belonging conveying ye
                            repulsive.
                          </p>
                          <p>
                            Same an quit most an. Admitting an mr disposing
                            sportsmen. Tried on cause no spoil arise plate.
                            Longer ladies valley get esteem use led six.
                            Middletons resolution advantages expression
                            themselves partiality so me at. West none hope if
                            sing oh sent tell is.
                          </p>
                          <p>
                            Case read they must it of cold that. Speaking
                            trifling an to unpacked moderate debating learning.
                            An particular contrasted he excellence favourable
                            on. Nay preference dispatched difficulty continuing
                            joy one. Songs it be if ought hoped of. Too carriage
                            attended him entrance desirous the saw. Twenty
                            sister hearts garden limits put has. We hill lady
                            will both sang room by. Desirous men exercise
                            overcame procured speaking her followed.
                          </p>
                          <p>
                            Rooms oh fully taken by worse do. Points afraid but
                            may end law lasted. Was out laughter raptures
                            returned outweigh. Luckily cheered colonel me do we
                            attacks on highest enabled. Tried law yet style
                            child. Bore of true of no be deal. Frequently
                            sufficient in be unaffected. The furnished she
                            concluded depending procuring concealed.
                          </p>
                          <p>
                            Kind Regards,
                            <br />
                            Teal&#39;c Jafar
                          </p>
                        </div>
                        <div className="message-attachment">
                          <div className="h4">Attachments</div>
                          <div className="message-attachment-gallery">
                            <div className="gallery-preview">
                              <div className="gallery-item">
                                <div className="gallery-item-image">
                                  <a href="#!">
                                    <img
                                      src="assets/img/email-attachment.jpg"
                                      alt="Attachment"
                                      width="320"
                                    />
                                  </a>
                                </div>
                                <div className="gallery-item-controls">
                                  <a
                                    href="#!"
                                    data-original-title="Download"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-cloud-download" />
                                  </a>
                                  <a
                                    href="#!"
                                    data-original-title="See Preview"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-zoom-in" />
                                  </a>
                                  <span className="main-text">Sunset.jpg</span>
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="gallery-item-image">
                                  <a href="#!">
                                    <img
                                      src="assets/img/email-attachment.jpg"
                                      alt="Attachment"
                                      width="320"
                                    />
                                  </a>
                                </div>
                                <div className="gallery-item-controls">
                                  <a
                                    href="#!"
                                    data-original-title="Download"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-cloud-download" />
                                  </a>
                                  <a
                                    href="#!"
                                    data-original-title="See Preview"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-zoom-in" />
                                  </a>
                                  <span className="main-text">Baloon.jpg</span>
                                </div>
                              </div>
                              <div className="gallery-item">
                                <div className="gallery-item-image">
                                  <a href="#!">
                                    <img
                                      src="assets/img/email-attachment.jpg"
                                      alt="Attachment"
                                      width="320"
                                    />
                                  </a>
                                </div>
                                <div className="gallery-item-controls">
                                  <a
                                    href="#!"
                                    data-original-title="Download"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-cloud-download" />
                                  </a>
                                  <a
                                    href="#!"
                                    data-original-title="See Preview"
                                    data-toggle="tooltip"
                                  >
                                    <i className="batch-icon batch-icon-zoom-in" />
                                  </a>
                                  <span className="main-text">Ice.jpg</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-attachment-list">
                            <table className="table table-hover">
                              <tbody>
                                <tr>
                                  <td className="attachment-name">
                                    Bali-IMG-001
                                    <span className="badge badge-primary">
                                      jpg
                                    </span>
                                  </td>
                                  <td className="attachment-action">
                                    <a
                                      href="#!"
                                      data-original-title="Download"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-cloud-download" />
                                    </a>
                                    <a
                                      href="#!"
                                      data-original-title="See Preview"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-zoom-in" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="attachment-name">
                                    Bali-IMG-239
                                    <span className="badge badge-primary">
                                      jpg
                                    </span>
                                  </td>
                                  <td className="attachment-action">
                                    <a
                                      href="#!"
                                      data-original-title="Download"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-cloud-download" />
                                    </a>
                                    <a
                                      href="#!"
                                      data-original-title="See Preview"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-zoom-in" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="attachment-name">
                                    Bali-Resert-IMG-017
                                    <span className="badge badge-primary">
                                      jpg
                                    </span>
                                  </td>
                                  <td className="attachment-action">
                                    <a
                                      href="#!"
                                      data-original-title="Download"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-cloud-download" />
                                    </a>
                                    <a
                                      href="#!"
                                      data-original-title="See Preview"
                                      data-toggle="tooltip"
                                    >
                                      <i className="batch-icon batch-icon-zoom-in" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="email-pager-bottom clearfix">
                        <div className="email-pager-count">
                          1-30 of 1284 messages
                        </div>
                        <div className="email-pager-container">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Previous or Next Page"
                          >
                            <button
                              type="button"
                              className="btn btn-primary email-list-previous"
                              data-toggle="tooltip"
                              title="Previous"
                            >
                              <i className="batch-icon batch-icon-arrow-left" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary email-list-next"
                              data-toggle="tooltip"
                              title="Next"
                            >
                              <i className="batch-icon batch-icon-arrow-right" />
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

export default MailMessage;
