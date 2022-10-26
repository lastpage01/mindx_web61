/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Shop_Header from "./shop.header";
import Shop_Section from "./shop.section";
class Shop extends Component {
  render() {
    return (
      <>
        <Shop_Header />
        <Shop_Section/>
      </>
    );
  }
}
export default Shop;
