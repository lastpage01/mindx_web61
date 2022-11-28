/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import imgLogout from "../../images/undraw_profile.svg";
import "./style.css";
import { logout } from "../../actions/users";
import { connect } from "react-redux";
class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.logout = this.logout.bind(this);
    this.check = true;
  }
  handleLogout(e) {
    const logout = document.getElementsByClassName("dropdown-menu")[0];
    if (this.check === true) {
      this.check = false;
      logout.style.display = "block";
    } else {
      logout.style.display = "none";
      this.check = true;
    }
  }
  logout = ()=>{
    this.props.logout();
  }
  render() {
    const { isLoggedIn } = this.props;
    if(!isLoggedIn) return <Redirect to={'/login'}/>
    return (
      <nav className="navbar navbar-expand  mb-4 shadow">
        <Link to={"/admin"} className="sidebar-heading">Quản lý sản phẩm</Link>
        <Link to={"/admin/quanlyhoadon"} className="sidebar-heading">Quản lý hóa đơn</Link>
        <Link to={'/admin/quanlytaikhoan'} className="sidebar-heading">Quản lý tài khoản</Link>
        <Link to={'/admin/quanlydanhmuc'} className="sidebar-heading">Quản lý danh mục</Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <div className="dropdown-toggle" onClick={this.handleLogout}>
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <img
                className="img-profile rounded-circle"
                src={`${imgLogout}`}
                width={"25px"}
              />
            </div>
            <div className="dropdown-menu dropdown-menu-right shadow">
              <Link to={'/login'} className="dropdown-item" onClick={this.logout}>
                <i className="material-icons" style={{ marginTop: "2px" }}>
                  &#xe879;
                </i>
                <div style={{ margin: "0 0 0 10px" }}>Logout</div>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.users;
  const { message } = state.message;
  const cartProducts = state.carts;
  return {
    isLoggedIn,
    message,
    cartProducts,
  };
}
export default connect(mapStateToProps, {logout})(AdminSearch);
