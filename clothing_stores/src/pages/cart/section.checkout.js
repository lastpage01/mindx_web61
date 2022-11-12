/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Section_CheckOut extends Component {
  render() {
    const carts = this.props.cartProducts;
    const { isLoggedIn } = this.props;
    let url;
    let total = 0;
    carts.map((cart) => {
      total =
        total +
        (cart.product.Price -
          (cart.product.Price * cart.product.Promotion) / 100) *
          cart.count;
    });
    if (!isLoggedIn || carts.length < 1) url = "#";
    else url = "/checkout";
    return (
      <>
        {carts.length > 0 ? (
          <div className="row justify-content-center">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>{total}</span>
                </p>
              </div>
              <p className="text-center">
                <Link
                  to={`${url}`}
                  className="btn btn-primary py-3 px-4"
                  onClick={() => {
                    if (!isLoggedIn) alert("Please sign in to buy products");
                    else if (carts.length < 1)
                      alert("Please add product to cart");
                    else localStorage.setItem("total", total);
                  }}
                >
                  Proceed to Checkout
                </Link>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.users.isLoggedIn,
    cartProducts: state.carts,
  };
};

export default connect(mapStateToProps)(Section_CheckOut);
