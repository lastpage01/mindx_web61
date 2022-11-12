import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { validateEmpty, validatePhone } from "./validateForm";
import userServices from "../../services/user.services";

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.state = {
      user: {
        _id: null,
        User: "",
        Password: "",
        FullName: "",
        Phone: "",
        Admin: false,
      },
    };
  }
  componentDidMount() {
    userServices.getUser(window.location.search.split("=")[2]).then((res) => {
      this.setState({
        user: res.data[0],
      });
    });
  }
  handleCreate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      userServices
        .update(this.state.user._id, this.state.user)
        .then((data) => {
          alert("Update successfully...!");
          window.location = "/admin/quanlytaikhoan";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  onChangeUser = (e) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          User: e.target.value,
        },
      };
    });
  };
  onChangePassword = (e) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          Password: e.target.value,
        },
      };
    });
  };
  onChangeFullName = (e) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          FullName: e.target.value,
        },
      };
    });
  };
  onChangePhone = (e) => {
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          Phone: e.target.value,
        },
      };
    });
  };
  onChangeCheckbox = (e) => {
    const checked = e.target.checked === true ? true : false;
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          Admin: checked,
        },
      };
    });
  };
  render() {
    const user = this.state.user;
    // console.log(user[0]);
    return (
      <>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Update Users</h1>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <Link
                type="button"
                to={"/admin/quanlytaikhoan"}
                className="btn btn-success"
              >
                Back
              </Link>
            </div>
            <div className="card-body">
              <Form
                onSubmit={this.handleCreate}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="mb-3">
                  <label className="form-label">User</label>
                  <Input
                    type="text"
                    className="form-control"
                    value={user.User}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    value={user.Password}
                    onChange={this.onChangePassword}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">FullName</label>
                  <Input
                    type="text"
                    className="form-control"
                    value={user.FullName}
                    onChange={this.onChangeFullName}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <Input
                    type="text"
                    className="form-control"
                    value={user.Phone}
                    onChange={this.onChangePhone}
                    validations={[validateEmpty, validatePhone]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Is Admin</label>
                  {user.Admin === true ? (
                    <Input
                      type="checkbox"
                      className=""
                      onClick={this.onChangeCheckbox}
                      checked
                    />
                  ) : (
                    <Input
                      type="checkbox"
                      className=""
                      onClick={this.onChangeCheckbox}
                    />
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Create);
