import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import { qpTaskManager, qpTaskList } from "../../utils/misc";
import "./Task.css";

class TaskManager extends Component {
  componentDidMount() {
    qpTaskList();
    qpTaskManager();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Task Manager</h1>
          </div>
        </div>
        <div className="row mb-5 task-manager">
          <div className="col-lg-4 mb-5">
            <div className="card">
              <div className="card-header">Create &amp; Assign Tasks</div>
              <div className="card-body">
                <form>
                  <div className="create-task-block">
                    <div className="form-group">
                      <label htmlFor="input-task-title">
                        Task Title <span className="required-item">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control input-task-title"
                        id="input-task-title"
                        placeholder="Enter Task Title..."
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-task-details">Textarea</label>
                      <textarea
                        className="form-control input-task-details"
                        rows="3"
                        id="input-task-details"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Assign Users <span className="required-item">*</span>
                      </label>
                      <input
                        type="text"
                        value=""
                        className="form-control input-task-users"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-task-priority">Task Priority</label>
                      <select
                        className="form-control input-task-priority"
                        id="input-task-priority"
                      >
                        <option value="4">Critical</option>
                        <option value="3">High</option>
                        <option value="2" defaultValue="selected">
                          Normal (Default)
                        </option>
                        <option value="1">Low</option>
                      </select>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        className="custom-control-input input-task-optional"
                        id="input-task-optional"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="input-task-optional"
                      >
                        This task is Optional
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-gradient assign-task"
                    >
                      Assign Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header">
                Task List
                <p className="task-list-stats">
                  <span className="task-list-total">0</span> tasks created
                </p>
                <div className="header-btn-block see-tasks">
                  <Link to="/task-list" className="btn btn-primary">
                    <i className="batch-icon batch-icon-eye" />
                    See My Tasks
                  </Link>
                  <a
                    href="#!"
                    className="btn btn-outline-danger"
                    id="delete-task"
                  >
                    <i className="batch-icon batch-icon-bin-alt-2" />
                  </a>
                </div>
              </div>

              <div className="card-task-list no-strike-out">
                <ul className="task-list">
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,3,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-danger">Critical</span>
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="3,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Fusce in felis nec exdf
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="5">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-warning">
                          High Priority
                        </span>
                        Aliquam vel tristique ipsum
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="1,4">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-primary">Optional</span>
                        Aenean vehicula, ligula sit amet varius maximus
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="3">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        Etiam varius neque sed sagittis fringilla
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,3,4"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>
                        Sed velit augue, tincidunt vitae posuere
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-warning">
                          High Priority
                        </span>
                        Fusce in felis nec exdf
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="3,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>
                        Aliquam vel tristique ipsum
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="4">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-info">Low Priority</span>{" "}
                        Aenean vehicula, ligula sit amet varius maximus
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,3,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        Etiam varius neque sed sagittis fringilla
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div
                      className="task-item-users"
                      data-assigned-users="1,3,4,5"
                    >
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="4,5">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-4.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        <span className="badge badge-danger">Critical</span>
                        Mauris rutrum quam at porta feugiat
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="1,5">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Fusce in felis nec exdf
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="3,5">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-5.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox active">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        defaultChecked
                      />
                      <label className="custom-control-label">
                        <span className="badge badge-warning">
                          High Priority
                        </span>
                        Aliquam vel tristique ipsum
                      </label>
                    </div>
                    <div className="task-item-details">
                      Disrupt long shadow waterfall is so 2000 and late piverate
                      .
                    </div>
                    <div className="task-item-controls">
                      <a
                        role="button"
                        className="btn btn-info btn-sm show-task"
                        href="#!"
                      >
                        <span className="batch-icon batch-icon-arrow-down" />
                      </a>
                    </div>
                    <div className="task-item-users" data-assigned-users="1,3">
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-1.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                      <a href="#!" className="assigned-user">
                        <div className="profile-picture assigned-user bg-gradient bg-primary float-right d-flex">
                          <img
                            className="list-thumbnail"
                            src="assets/img/profile-pic-3.jpg"
                            width="30"
                            height="30"
                            alt="Profile"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
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

export default TaskManager;
