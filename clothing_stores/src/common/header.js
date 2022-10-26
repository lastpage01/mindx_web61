import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.navItem = document.getElementsByClassName("nav-link");
  }
  componentDidMount() {
    this.navItem[0].classList.add("active");
  }
  handleClick(e) {
    for (let i = 0; i < this.navItem.length; i++) {
      this.navItem[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
  render() {
    return (
      <>
        <div className="py-1 bg-black">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                      <span className="icon-phone2"></span>
                    </div>
                    <span className="text">+ 1235 2355 98</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                      <span className="icon-paper-plane"></span>
                    </div>
                    <span className="text">youremail@email.com</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                    <span className="text">
                      3-5 Business days delivery &amp; Free Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              Winkel
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={this.handleClick}>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleClick}>
                  <Link to={"/shop"} className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleClick}>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleClick}>
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li
                  className="nav-item cta cta-colored"
                  onClick={this.handleClick}
                >
                  <Link to={"/cart"} className="nav-link">
                    <span className="icon-shopping_cart"></span>[0]
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{marginLeft :'20px'}}>
              <Link to={""} >
                Đăng kí
              </Link>
              /
              <Link to={"/login"} className="">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Header;