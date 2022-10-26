import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg_6 from "../../images/bg_6.jpg";

class Shop_Header extends Component {
  render() {
    return (
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${bg_6})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            {/* <div className="col-md-9 ftco-animate text-center"> */}
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                <Link to={"/"}>Home</Link>

                </span>
                <span>Products</span>
              </p>
              <h1 className="mb-0 bread">Collection Products</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop_Header;
