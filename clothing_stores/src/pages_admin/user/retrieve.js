/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import userServices from "../../services/user.services";

class RetrieveUser extends Component {
  constructor(props) {
    super(props);
    this.onGetAllUser = this.onGetAllUser.bind(this);
    this.onGetNameSearch = this.onGetNameSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.state = {
      users: [],
      search: "",
    };
  }
  componentDidMount() {
    this.onGetAllUser();
  }
  onGetAllUser = () => {
    userServices.getAll().then((res) => {
      this.setState({
        users: res.data.users,
      });
    });
  };
  handleDeleteUser(user) {
    if (
      window.confirm(
        `Do you want to delete with User ${JSON.stringify(user.User)} ?`
      ) === true
    ) {
      userServices.delete(user._id);
      this.onGetAllUser();
      this.render();
    }
  }
  onGetNameSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  handleSearch() {
    userServices.searchUser(this.state.search).then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }
  render() {
    const users = this.state.users;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Quản lý tài khoản</h1>
        <p className="mb-4"></p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users Table</h6>
            <Link
              type="button"
              className="btn btn-success"
              style={{ paddingTop: "12px" }}
              to={"/admin/quanlytaikhoan?page=create"}
            >
              Add User
            </Link>
            <form className=" navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control  border-0 small"
                  placeholder="Search for..."
                  onChange={this.onGetNameSearch}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.handleSearch}
                  >
                    <i className="material-icons" style={{ margin: "5px" }}>
                      &#xe8b6;
                    </i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Password</th>
                      <th>FullName</th>
                      <th>Phone</th>
                      <th>Admin</th>
                      <th style={{ width: "150px" }}>delete / update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{user.User}</td>
                            <td>{user.Password}</td>
                            <td>{user.FullName}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Admin === true ? "true" : "false"}</td>
                            <td>
                              <Link
                                to={`/admin/quanlytaikhoan?page=update&&User=${user.User}`}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="material-icons">&#xe3c9;</i>
                              </Link>
                              <hr />
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.handleDeleteUser(user);
                                }}
                              >
                                <i className="material-icons">&#xe92b;</i>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(RetrieveUser);
