/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import { updateCart, deleteCart } from "../../actions/carts";

class Section_Product extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteProductCart = this.handleDeleteProductCart.bind(this);
    this.handleUpdateCountCart = this.handleUpdateCountCart.bind(this);
    this.findByIdOnCarts = this.findByIdOnCarts.bind(this);
    this.state = {
      currentProduct: {
        _id: null,
        Name: "",
        Id_Category: "",
        Price: null,
        Promotion: null,
        Favourite: null,
        Img: "",
      },
      count: null,
    };
  }
  handleDeleteProductCart = (e) => {
    const id = e.target.getAttribute("data");
    const product = this.findByIdOnCarts(id);
    this.props.deleteCart(product)
  };

  handleUpdateCountCart = (e) => {
    this.setState({
      count: Number(e.target.value),
    });
    const id = e.target.getAttribute("data");
    const product = this.findByIdOnCarts(id);
    this.props.updateCart(product, Number(e.target.value));
  };

  findByIdOnCarts = (id) => {
    const carts = this.props.cartProducts;
    let product;
    carts.map((cart) => {
      if (cart.product._id === id) {
        this.setState({
          currentProduct: cart.product,
        });
        product = cart.product;
      }
    });
    return product;
  };
  render() {
    const carts = this.props.cartProducts;
    // console.log(carts);
    return (
      <>{carts.length > 0 ?         <div className="row">
      <div className="col-md-12 ">
        <div className="cart-list">
          <table className="table">
            <thead className="thead-primary">
              <tr className="text-center">
                <th>Remove</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts &&
                carts.map((cart, index) => {
                  return (
                    <tr className="text-center" key={index}>
                      <td className="product-remove">
                        <span
                          className="ion-ios-close"
                          style={{ cursor: "pointer" }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "gray";
                          }}
                          onMouseMove={(e) => {
                            e.target.style.color = "red";
                          }}
                          onClick={this.handleDeleteProductCart}
                          data={cart.product._id}
                        ></span>
                      </td>

                      <td className="image-prod">
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(img/${cart.product.Img})`,
                          }}
                        ></div>
                      </td>

                      <td className="product-name">
                        <h3>{cart.product.Name}</h3>
                      </td>

                      <td className="price">
                        {cart.product.Price -
                          (cart.product.Price * cart.product.Promotion) /
                            100}
                      </td>

                      <td className="quantity">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            className="quantity form-control input-number"
                            defaultValue={cart.count}
                            min="1"
                            max="100"
                            onChange={this.handleUpdateCountCart}
                            data={cart.product._id}
                          />
                        </div>
                      </td>

                      <td className="total">
                        {(cart.product.Price -
                          (cart.product.Price * cart.product.Promotion) /
                            100) *
                          cart.count}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div> : "Please select a product to purchase"}

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.carts,
  };
};
export default connect(mapStateToProps, { updateCart, deleteCart })(
  Section_Product
);
