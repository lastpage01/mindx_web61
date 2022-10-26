/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Section_CheckOut extends Component {
  render() {
    const carts = this.props.cartProducts;
    let total = 0;
    carts.map((cart) => {
      total = total +
        (cart.product.Price -
          (cart.product.Price * cart.product.Promotion) / 100) *
        cart.count;
    });
    return (
      <>
        <div className="row justify-content-center">
          <div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
            <div className="cart-total mb-3">
              <h3>Cart Totals</h3>
              {/* <p className="d-flex">
                <span>Subtotal</span>
                <span>$20.60</span>
              </p>
              <p className="d-flex">
                <span>Delivery</span>
                <span>$0.00</span>
              </p>
              <p className="d-flex">
                <span>Discount</span>
                <span>$3.00</span>
              </p>
              <hr /> */}
              <p className="d-flex total-price">
                <span>Total</span>
                <span>{total}</span>
              </p>
            </div>
            <p className="text-center">
              <Link to={"/checkout"} className="btn btn-primary py-3 px-4">
                Proceed to Checkout
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.carts,
  };
};
export default connect(mapStateToProps)(Section_CheckOut);
