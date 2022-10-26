/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Checkout_Header from "./checkout.header";
import CheckOut_Section from "./checkout.section";

class CheckOut extends Component {
  render() {
    return (
      <>
        <Checkout_Header />
        <CheckOut_Section />
      </>
    );
  }
}

export default CheckOut;
