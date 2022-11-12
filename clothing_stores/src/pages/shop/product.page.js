/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import { retrieveProducts } from "../../actions/products";
import { handleSetStylePage } from "../../common/handleCommon";
class Product_page extends Component {
  constructor(props) {
    super(props);
    this.span = document.getElementsByClassName("page");
    this.handlePage = this.handlePage.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePage = (e) => {
    handleSetStylePage(Number(e.target.innerHTML), false);
    localStorage.setItem("page", e.target.innerHTML);
    this.props.retrieveProducts();
  };
  handleNext = () => {
    let count = Number(localStorage.getItem("page"));
    if (count < this.span.length) {
      localStorage.setItem("page", `${count + 1}`);
      handleSetStylePage(count, true);
    }
    this.props.retrieveProducts();
  };

  handleBack = () => {
    let count = Number(localStorage.getItem("page"));
    if (count > 1) {
      localStorage.setItem("page", `${count - 1}`);
      count = count - 1;
      handleSetStylePage(count, false);
    }
    this.props.retrieveProducts();
  };
  render() {
    const { products } = this.props;
    const list = [];
    for (let i = 0; i < products.length / 3; i++) {
      if (i === 0) {
        list.push(
          <li key={i}>
            <span
              className="page"
              style={{
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}
              onClick={this.handlePage}
            >
              {i + 1}
            </span>
          </li>
        );
      } else {
        list.push(
          <li key={i}>
            <span
              className="page"
              style={{ cursor: "pointer" }}
              onClick={this.handlePage}
            >
              {i + 1}
            </span>
          </li>
        );
      }
    }
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              {products.length / 3 > 1 ? (
                <>
                  <li>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={this.handleBack}
                    >
                      &lt;
                    </span>
                  </li>
                  {list}
                  <li>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={this.handleNext}
                    >
                      &gt;
                    </span>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { retrieveProducts })(Product_page);
