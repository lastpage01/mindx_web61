import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import "./animate.css";

class Login extends Component {
  render() {
    return (
      <>
        <div className="container container-login">
          <div className="top">
            <h1 id="title" className="hidden">
              <Link to={"/"} id="logo">Clothing Store</Link>
            </h1>
          </div>
          <div className="login-box animated fadeInUp">
            <div className="box-header">
              <h2>Log In</h2>
            </div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" />
            <br />
              <button type="submit">Sign In</button>
            <br />
            <Link to={""}>
              <p className="small">Forgot your password?</p>
            </Link>
            <Link to={""} className="small" style={{color: 'red'}}>Đăng kí</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
