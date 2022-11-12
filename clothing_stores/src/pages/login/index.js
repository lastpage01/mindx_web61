import React, { Component } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/users";
import { clearMessage } from "../../actions/message";

// import userServices from "../../services/user.services";

import "./style.css";
import "./animate.css";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(clearMessage());
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then((data) => {
          // console.log(data.admin);
          if (data.admin === false) {
            history.push("/");
          } else history.push("/admin");
          // window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    const { message } = this.props;
    return (
      <>
        <div className="container container-login">
          <div className="top">
            <h1 id="title" className="hidden">
              <Link to={"/"} id="logo">
                Clothing Store
              </Link>
            </h1>
          </div>
          <div className="login-box animated fadeInUp">
            <div className="box-header">
              <h2>Log In</h2>
            </div>
            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                id="username"
                onChange={this.onChangeUsername}
                required
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={this.onChangePassword}
                required
              />
              <br />
              <button type="submit">Sign In</button>

              {message && <p style={{ color: "red" }}>{message}</p>}

              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
            <Link to={""}>
              <p className="small">Forgot your password?</p>
            </Link>
            <Link to={"/register"} className="small" style={{ color: "red" }}>
              Đăng kí
            </Link>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.users;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
