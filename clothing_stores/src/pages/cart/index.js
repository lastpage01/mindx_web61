/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Cart_Header from "./cart.header";
import Cart_Section from "./cart.section";

class Cart extends Component {
  render() {
    return (
      <>
        <Cart_Header />
        <Cart_Section />
      </>
    );
  }
}

export default Cart;
