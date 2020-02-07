import React, { Component } from "react";
import { Link } from "react-router-dom";
import { qpTaskList } from "../../utils/misc";
import Footer from "../../layout/Footer/Footer";
import "./Task.css";

class TaskList extends Component {
  componentDidMount() {
    qpTaskList();
  }

  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-12">
            <h1>Task List</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Your Tasks
                <p className="task-list-stats">
                  <span className="task-list-completed">0</span> of{" "}
                  <span className="task-list-total">0</span> tasks completed
                </p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-sm bg-gradient"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "0%" }}
                  />
                </div>
                <div className="header-btn-block">
                  <Link to="/task-manager" className="btn btn-primary">
                    <i className="batch-icon batch-icon-add" />
                    Add New Task
                  </Link>
                </div>
              </div>
              <div className="card-task-list">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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
                  </li>
                  <li className="task-list-item">
                    <div className="custom-control custom-checkbox">
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

export default TaskList;
