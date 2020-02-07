import React, { Component } from "react";
import Footer from "../../layout/Footer/Footer";

class ProfilePage extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <img
                className="card-img"
                src="assets/img/bg-image-1-horizontal.jpg"
                alt="Feature"
              />
              <div className="card-user-profile">
                <div className="profile-page-left">
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <div className="profile-picture profile-picture-lg bg-gradient bg-primary mb-4">
                        <img
                          src="assets/img/profile-pic.jpg"
                          width="144"
                          height="144"
                          alt="Profile"
                        />
                      </div>
                      <a
                        className="btn btn-primary btn-block btn-gradient"
                        to="#!"
                      >
                        <i className="batch-icon batch-icon-user-alt-add-2" />
                        Follow
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="my-0">Followers</h5>
                      <div className="h3 my-0">
                        <a to="#!">682</a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="my-0">Following</h5>
                      <div className="h3 my-0">
                        <a to="#!">341</a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h5>
                    <i className="batch-icon batch-icon-users" />
                    Friends
                  </h5>
                  <div className="profile-page-block-outer clearfix">
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-2.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-3.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-4.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-5.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-secondary">
                        <img
                          src="assets/img/profile-pic-6.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-2.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-3.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-secondary">
                        <img
                          src="assets/img/profile-pic-4.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-5.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-secondary">
                        <img
                          src="assets/img/profile-pic-6.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-secondary">
                        <img
                          src="assets/img/profile-pic-2.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-page-block">
                      <div className="profile-picture bg-gradient bg-primary">
                        <img
                          src="assets/img/profile-pic-3.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <a className="float-right mt-2" to="#!">
                      More
                    </a>
                  </div>
                  <hr />
                  <h5>
                    <i className="batch-icon batch-icon-image" />
                    Album
                  </h5>
                  <a to="#!">
                    <img
                      src="assets/img/album-image.jpg"
                      className="img-fluid img-thumbnail"
                      alt="Album"
                    />
                  </a>
                  <a className="float-right mt-2" to="#!">
                    More
                  </a>
                </div>
                <div className="profile-page-center">
                  <h1 className="card-user-profile-name">Johanna Quinn</h1>
                  <div className="comment-block">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="comment-textarea"
                        rows="2"
                        placeholder="Enter your comment here..."
                      />
                      <div className="media-feed-control clearfix">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm comment-reply float-right"
                        >
                          Post
                        </button>
                        <a to="#!" data-toggle="tooltip" title="Add">
                          <i className="batch-icon batch-icon-image" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <ul className="list-unstyled mt-5">
                    <li className="media">
                      <div className="profile-picture bg-gradient bg-primary mb-4">
                        <img
                          src="assets/img/profile-pic.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-title mt-0 mb-1">
                          <a to="#!">Johanna Quinn</a>{" "}
                          <small> 1 hour ago</small>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio.
                        <div className="media-feed-control">
                          <a to="#!">
                            <i className="batch-icon batch-icon-heart-full" />
                            Like (4)
                          </a>
                          <a to="#!">
                            <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                            Comment (2)
                          </a>
                          <a to="#!">
                            <i className="batch-icon batch-icon-flag" />
                            Report
                          </a>
                        </div>
                        <div className="media-body-reply-block">
                          <ul className="list-unstyled">
                            <li className="media mt-4">
                              <div className="profile-picture bg-gradient bg-primary mb-4">
                                <img
                                  src="assets/img/profile-pic-2.jpg"
                                  width="44"
                                  height="44"
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <div className="media-title mt-0 mb-1">
                                  <a to="#!">Samantha Carter</a>{" "}
                                  <small> 45 mins ago</small>
                                </div>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio.
                                <div className="media-feed-control">
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-heart-full" />
                                    Like
                                  </a>
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                    Comment
                                  </a>
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-flag" />
                                    Report
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="media mt-4">
                              <div className="profile-picture bg-gradient bg-primary mb-4">
                                <img
                                  src="assets/img/profile-pic-3.jpg"
                                  width="44"
                                  height="44"
                                  alt="Profile"
                                />
                              </div>
                              <div className="media-body">
                                <div className="media-title mt-0 mb-1">
                                  <a to="#!">Teal&#39;c Jaffa</a>{" "}
                                  <small> 7 mins ago</small>
                                </div>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio.
                                <div className="media-feed-control">
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-heart-full" />
                                    Like
                                  </a>
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                    Comment
                                  </a>
                                  <a to="#!">
                                    <i className="batch-icon batch-icon-flag" />
                                    Report
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="comment-reply-block mt-4">
                              <div className="form-group clearfix">
                                <textarea
                                  className="form-control comment-reply-textarea"
                                  rows="2"
                                  placeholder="Enter your comment here..."
                                />
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-sm comment-reply float-right"
                                >
                                  Reply
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="profile-picture bg-gradient bg-primary mb-4">
                        <img
                          src="assets/img/profile-pic.jpg"
                          width="44"
                          height="44"
                          alt="Profile"
                        />
                      </div>
                      <div className="media-body">
                        <div className="media-title mt-0 mb-1">
                          <a to="#!">Johanna Quinn</a>{" "}
                          <small> 1 hour ago</small>
                        </div>
                        <a to="#!">
                          <img
                            src="assets/img/album-image.jpg"
                            className="img-fluid img-thumbnail"
                            alt="Album"
                          />
                        </a>
                        <div className="media-feed-control">
                          <a to="#!">
                            <i className="batch-icon batch-icon-heart-full" />
                            Like (57)
                          </a>
                          <a to="#!">
                            <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                            Comment
                          </a>
                          <a to="#!">
                            <i className="batch-icon batch-icon-flag" />
                            Report
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
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

export default ProfilePage;
