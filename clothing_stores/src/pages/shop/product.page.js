/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
class Product_page extends Component {
  render() {
    const { products } = this.props;
    const list = [];
    for (let i = 0; i <= products.length / 12; i++) {
      list.push(
        <li>
          <span>{i + 1}</span>
        </li>
      );
    }
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              {products.length / 12 > 1 ? (
                <>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  {list}
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Product_page);
