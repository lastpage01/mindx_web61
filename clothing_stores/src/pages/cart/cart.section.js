/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import Section_CheckOut from "./section.checkout";
import Section_Product from "./section.product";

class Cart_Section extends Component {
  render() {
    return (
      <>
        <section className="ftco-section ftco-cart">
          <div className="container">
            <Section_Product />
            <Section_CheckOut />
          </div>
        </section>
      </>
    );
  }
}

export default Cart_Section;
