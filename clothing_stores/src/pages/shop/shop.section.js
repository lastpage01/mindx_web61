/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Category from "./category";
import Product_page from "./product.page";
import Products from "./products";

class Shop_Section extends Component {
  render() {
    return (
      <>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-10 order-md-last">
                <Products />
                <Product_page />
              </div>

              <Category />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Shop_Section;
