import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message";
import { register } from "../../actions/users";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.HandleCancel = this.HandleCancel.bind(this);

    this.state = {
      User: "",
      Password: "",
      Admin: false,
      FullName: "",
      Phone: null,
    };
  }
  componentDidMount() {
    this.props.clearMessage();
  }
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.register(this.state).then(() => {
      alert("Sign Up Success ...!");
      this.props.history.push("/login");
      window.location.reload();
    });
  };
  onChangeFullName = (e) => {
    this.setState({
      FullName: e.target.value,
    });
  };
  onChangePhone = (e) => {
    this.setState({
      Phone: Number(e.target.value),
    });
  };
  onChangeUsername = (e) => {
    this.setState({
      User: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  HandleCancel = (e) => {
    
    this.props.history.push("/login")
  };
  render() {
    const { message } = this.props;
    return (
      <>
        <div className="container container-login">
          <div className="login-box animated fadeInUp">
            <div className="box-header">
              <h2>Sign Up</h2>
            </div>
            <Form
              onSubmit={this.handleSignUp}
              ref={(c) => {
                this.form = c;
              }}
            >
              <label htmlFor="fullName">Full Name</label>
              <Input
                type="text"
                id="fullName"
                onChange={this.onChangeFullName}
                required
              />
              <label htmlFor="phone">Phone</label>
              <Input
                type="text"
                id="phone"
                onChange={this.onChangePhone}
                required
              />
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                id="username"
                onChange={this.onChangeUsername}
                required
              />
              {message && <p style={{ color: "red" }}>{message}</p>}
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                onChange={this.onChangePassword}
                required
              />
              <br />
              <button
                type="button"
                className="btn btn-danger"
                style={{ backgroundColor: "red", marginRight: "10px" }}
                onClick={this.HandleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                style={{ backgroundColor: "green" }}
              >
                Sign Up
              </button>

              {/* {message && <p style={{ color: "red" }}>{message}</p>} */}

              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
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
export default connect(mapStateToProps, { register, clearMessage })(Register);
