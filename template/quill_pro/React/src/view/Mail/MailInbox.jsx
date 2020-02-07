import React, { Component } from "react";
import { Link } from "react-router-dom";
import { qpMailboxList } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";

class MailInbox extends Component {
  componentDidMount = () => {
    qpMailboxList();
  };

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Mail - Inbox</h1>
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
                            to="mail-compose"
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
                    <div className="mailbox-container mailbox-email-list">
                      <div className="mailbox-controls clearfix">
                        <div className="checkbox email-select-all">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label className="custom-control-label">
                              Select All
                              <span className="sr-only">Select All</span>
                            </label>
                          </div>
                        </div>
                        <a
                          href="#!"
                          className="btn btn-primary email-refresh"
                          data-toggle="tooltip"
                          title="Refresh"
                        >
                          <i className="batch-icon batch-icon-refresh" />
                        </a>

                        <div
                          className="btn-group mailbox-control-group"
                          role="group"
                          aria-label="Mark as Read, Important, Junk or Delete"
                        >
                          <button
                            type="button"
                            className="btn btn-primary disabled email-mark-read"
                            data-toggle="tooltip"
                            title="Mark as Read"
                          >
                            <i className="batch-icon batch-icon-tick" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary disabled email-mark-important"
                            data-toggle="tooltip"
                            title="Mark as Important"
                          >
                            <i className="batch-icon batch-icon-star-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary disabled email-mark-junk"
                            data-toggle="tooltip"
                            title="Mark as Junk"
                          >
                            <i className="batch-icon batch-icon-spam" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary disabled email-delete"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            <i className="batch-icon batch-icon-bin-alt-2" />
                          </button>
                        </div>
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
                      <div className="mailbox-mail-list table-responsive">
                        <table className="table table-hover">
                          <tbody>
                            <tr
                              className="email-status-unread"
                              data-email-id="1"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Teal&#39;c Jafar</td>
                              <td className="email-subject">
                                <span className="email-extra-icons">
                                  <i
                                    className="batch-icon batch-icon-image"
                                    data-toggle="tooltip"
                                    title="Image Attached"
                                  />
                                </span>
                                <span className="badge badge-success">New</span>
                                Dude! Check out my pics from Bali!
                              </td>
                              <td className="email-datetime">Just Now</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="2"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
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
                                Interesting Blog Post
                              </td>
                              <td className="email-datetime">
                                Today, 12:31 PM
                              </td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="3"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
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
                                Interesting Blog Post
                              </td>
                              <td className="email-datetime">
                                Yesterday, 12:30 PM
                              </td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="4"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Google</td>
                              <td className="email-subject">
                                Google Account Recovery phone number changed
                              </td>
                              <td className="email-datetime">
                                Yesterday, 11:00 AM
                              </td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="5"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Skype</td>
                              <td className="email-subject">
                                <span className="badge badge-primary">
                                  Update
                                </span>
                                Introducing Skype for Android 5.0
                              </td>
                              <td className="email-datetime">Dec 25</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="6"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                MailChimp System Alerts
                              </td>
                              <td className="email-subject">
                                <span className="badge badge-warning">
                                  Automated
                                </span>
                                New Email Subscribers
                              </td>
                              <td className="email-datetime">Dec 25</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="7"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                Base5Builder Support
                              </td>
                              <td className="email-subject">
                                RE: Ticket #JU-I87621-PL
                              </td>
                              <td className="email-datetime">Dec 24</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="8"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Dropbox</td>
                              <td className="email-subject">
                                <span className="email-extra-icons">
                                  <span
                                    title="Has Attachment"
                                    className="glyphicon glyphicon-paperclip"
                                  />
                                </span>
                                Your Vouchers Used has increase (10GB extra)
                              </td>
                              <td className="email-datetime">Dec 23</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="9"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Prof. Abraham</td>
                              <td className="email-subject">
                                <span className="badge badge-danger">
                                  Urgent
                                </span>
                                RE: Thesis Submission
                              </td>
                              <td className="email-datetime">Dec 23</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="10"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">System Admin</td>
                              <td className="email-subject">
                                <span className="badge badge-warning">
                                  Automated
                                </span>
                                Weekly Status Report
                              </td>
                              <td className="email-datetime">Dec 22</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="11"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Facebook</td>
                              <td className="email-subject">
                                Teal&#39;c just sent you a message
                              </td>
                              <td className="email-datetime">Dec 22</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="12"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
                                Wanna hangout tomorrow?
                              </td>
                              <td className="email-datetime">Dec 21</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="13"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
                                <span className="email-extra-icons">
                                  <i
                                    className="batch-icon batch-icon-spam"
                                    data-toggle="tooltip"
                                    title="Warning: Junk Mail"
                                  />
                                </span>
                                Interesting Blog Post
                              </td>
                              <td className="email-datetime">Dec 21</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="14"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Google</td>
                              <td className="email-subject">
                                Google Account Recovery phone number changed
                              </td>
                              <td className="email-datetime">Dec 21</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="15"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Skype</td>
                              <td className="email-subject">
                                Introducing Skype for Android 5.0
                              </td>
                              <td className="email-datetime">Dec 21</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="16"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                MailChimp System Alerts
                              </td>
                              <td className="email-subject">
                                New Email Subscribers
                              </td>
                              <td className="email-datetime">Dec 19</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="17"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                Base5Builder Support
                              </td>
                              <td className="email-subject">
                                RE: Ticket #JU-I87621-PL
                              </td>
                              <td className="email-datetime">Dec 18</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="18"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Dropbox</td>
                              <td className="email-subject">
                                Your Vouchers Used has increase (10GB extra)
                              </td>
                              <td className="email-datetime">Dec 18</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="19"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Prof. Abraham</td>
                              <td className="email-subject">
                                <span className="badge badge-danger">
                                  Urgent
                                </span>
                                RE: Thesis Submission
                              </td>
                              <td className="email-datetime">Dec 18</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="20"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">System Admin</td>
                              <td className="email-subject">
                                <span className="badge badge-warning">
                                  Automated
                                </span>
                                Weekly Status Report
                              </td>
                              <td className="email-datetime">Dec 15</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="21"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Teal&#39;c Jafar</td>
                              <td className="email-subject">
                                <span className="email-extra-icons">
                                  <i
                                    className="batch-icon batch-icon-image"
                                    data-toggle="tooltip"
                                    title="Image Attached"
                                  />
                                </span>
                                <span className="badge badge-success">New</span>
                                Dude! Check out my pics from Bali!
                              </td>
                              <td className="email-datetime">Dec 15</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="22"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
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
                                Interesting Blog Post
                              </td>
                              <td className="email-datetime">Dec 15</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="23"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Samantha Carter</td>
                              <td className="email-subject">
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
                                Interesting Blog Post
                              </td>
                              <td className="email-datetime">Dec 14</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="24"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Google</td>
                              <td className="email-subject">
                                Google Account Recovery phone number changed
                              </td>
                              <td className="email-datetime">Dec 14</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="25"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status checked">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Skype</td>
                              <td className="email-subject">
                                Introducing Skype for Android 5.0
                              </td>
                              <td className="email-datetime">Dec 13</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="26"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                MailChimp System Alerts
                              </td>
                              <td className="email-subject">
                                <span className="badge badge-warning">
                                  Automated
                                </span>
                                New Email Subscribers
                              </td>
                              <td className="email-datetime">Dec 13</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="27"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">
                                Base5Builder Support
                              </td>
                              <td className="email-subject">
                                RE: Ticket #JU-I87621-PL
                              </td>
                              <td className="email-datetime">Dec 12</td>
                            </tr>
                            <tr
                              className="email-status-unread"
                              data-email-id="28"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Dropbox</td>
                              <td className="email-subject">
                                Your Vouchers Used has increase (10GB extra)
                              </td>
                              <td className="email-datetime">Dec 12</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="29"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">Prof. Abraham</td>
                              <td className="email-subject">
                                <span className="badge badge-danger">
                                  Urgent
                                </span>
                                RE: Thesis Submission
                              </td>
                              <td className="email-datetime">Dec 11</td>
                            </tr>
                            <tr
                              className=""
                              data-email-id="30"
                              data-email-url="mail-message"
                            >
                              <td className="email-checkbox">
                                <div className="custom-control custom-checkbox email-item-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    <span className="sr-only">(checkbox)</span>
                                  </label>
                                </div>
                              </td>
                              <td className="email-star">
                                <span className="email-star-status">
                                  <i
                                    className="batch-icon batch-icon-star-alt email-important"
                                    data-toggle="tooltip"
                                    title="Important Mail"
                                  />
                                </span>
                              </td>
                              <td className="email-sender">System Admin</td>
                              <td className="email-subject">
                                <span className="badge badge-warning">
                                  Automated
                                </span>
                                Weekly Status Report
                              </td>
                              <td className="email-datetime">Dec 22</td>
                            </tr>
                            <tr className="empty-list">
                              <td colSpan="5">You currently have no emails.</td>
                            </tr>
                          </tbody>
                        </table>
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

export default MailInbox;
