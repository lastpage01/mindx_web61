import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { validateEmpty, validatePhone } from "./validateForm";
import { register } from "../../actions/users";
import { clearMessage } from "../../actions/message";

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.state = {
      User: "",
      Password: "",
      FullName: "",
      Phone: null,
      Admin: false,
    };
  }
  handleCreate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      this.props.register(this.state).then(() => {
        alert("Sign Up Success ...!");
        window.location = '/admin/quanlytaikhoan'
      });
    }
  };
  onChangeUser = (e) => {
    this.setState({
      User: e.target.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  onChangeFullName = (e) => {
    this.setState({
      FullName: e.target.value,
    });
  };
  onChangePhone = (e) => {
    this.setState({
      Phone: e.target.value,
    });
  };
  onChangeCheckbox = (e) => {
    const checked = e.target.checked === true ? true:false;
    this.setState({
      Admin: checked,
    });
  };
  render() {
    const { message } = this.props;
    return (
      <>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Add Users</h1>

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
                    onChange={this.onChangeUser}
                    validations={[validateEmpty]}
                  />
                </div>
                {message && <p style={{ color: "red" }}>{message}</p>}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    onChange={this.onChangePassword}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">FullName</label>
                  <Input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeFullName}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <Input
                    type="text"
                    className="form-control"
                    onChange={this.onChangePhone}
                    validations={[validateEmpty, validatePhone]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Is Admin</label>
                  <Input
                    type="checkbox"
                    className=""
                    onClick={this.onChangeCheckbox}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create
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
function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps, { register, clearMessage })(Create);
