/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

class CheckOut_Section extends Component {
  render() {
    const carts = this.props.cartProducts;
    let total = 0;
    carts.map((cart) => {
      total =
        total +
        (cart.product.Price -
          (cart.product.Price * cart.product.Promotion) / 100) *
          cart.count;
    });
    return (
      <>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 ">
                <form action="#" className="billing-form">
                  <h3 className="mb-4 billing-heading">Billing Details</h3>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstname">Firt Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="country">State / Country</label>
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">France</option>
                            <option value="">Italy</option>
                            <option value="">Philippines</option>
                            <option value="">South Korea</option>
                            <option value="">Hongkong</option>
                            <option value="">Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="streetaddress">Street Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="House number and street name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appartment, suite, unit etc: (optional)"
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="towncity">Town / City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="postcodezip">Postcode / ZIP *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="emailaddress">Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                  </div>
                </form>

                <div className="row mt-5 pt-3 d-flex">
                  <div className="col-md-6 d-flex">
                    <div className="cart-detail cart-total bg-light p-3 p-md-4">
                      <h3 className="billing-heading mb-4">Cart Total</h3>
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
                  </div>
                  <div className="col-md-6">
                    <div className="cart-detail bg-light p-3 p-md-4">
                      <h3 className="billing-heading mb-4">Payment Method</h3>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                className="mr-2"
                              />{" "}
                              Direct Bank Tranfer
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                className="mr-2"
                              />{" "}
                              Check Payment
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="optradio"
                                className="mr-2"
                              />{" "}
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                value=""
                                className="mr-2"
                              />{" "}
                              I have read and accept the terms and conditions
                            </label>
                          </div>
                        </div>
                      </div>
                      <p>
                        <a href="#" className="btn btn-primary py-3 px-4">
                          Place an order
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.carts,
  };
};
export default connect(mapStateToProps)(CheckOut_Section);
