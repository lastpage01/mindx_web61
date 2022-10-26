/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import productServices from "../../services/product.services";
import { createCart, updateCart } from "../../actions/carts";
class Item_Products extends Component {
  constructor(props) {
    super(props);
    this.getProduct = this.getProduct.bind(this);
    this.addCountProduct = this.addCountProduct.bind(this);
    this.subCountProduct = this.subCountProduct.bind(this);
    this.setStateCount = this.setStateCount.bind(this);
    this.addProductCart = this.addProductCart.bind(this);
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
      count: 1,
    };
  }
  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }
  getProduct = (id) => {
    productServices
      .get(id)
      .then((response) => {
        this.setState({
          currentProduct: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  addCountProduct = (e) => {
    const input = document.getElementById("quantity");
    let value = Number(input.value) + 1;
    if (value > 100) value = 100;
    input.value = value;
    this.setState({
      count: value,
    });
  };
  subCountProduct = (e) => {
    const input = document.getElementById("quantity");
    let value = Number(input.value) - 1;
    if (value < 1) value = 1;
    input.value = value;
    this.setState({
      count: value,
    });
  };
  setStateCount = (e) => {
    this.setState({
      count: e.target.value,
    });
  };
  addProductCart = () => {
    const carts = this.props.cartProducts;
    let update = false;
    carts.map((cart) => {
      if (cart.product._id === this.state.currentProduct._id) {
        update = true;
        const newCount = Number(this.state.count) + Number(cart.count);
        this.setState({
          count: newCount,
        });
        this.props.updateCart(this.state.currentProduct, newCount);
      }
    });
    if (update === false){
      this.props.createCart(this.state.currentProduct, this.state.count);
    }
    alert('Successfully...!')

  };
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ">
              <a href="images/menu-2.jpg" className="image-popup">
                <img
                  className="img-fluid"
                  src={`../../img/${this.state.currentProduct.Img}`}
                  alt={`${this.state.currentProduct.Img}`}
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ">
              <h3>{this.state.currentProduct.Name}</h3>
              <div className="rating d-flex">
                <p className="text-left mr-4">
                  <a href="#" className="mr-2">
                    5.0
                  </a>
                  <a href="#">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="#">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="#">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="#">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                  <a href="#">
                    <span className="ion-ios-star-outline"></span>
                  </a>
                </p>
                <p className="text-left mr-4">
                  <a href="#" className="mr-2" style={{ color: "#000" }}>
                    100 <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a href="#" className="mr-2" style={{ color: "#000" }}>
                    500 <span style={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p className="price">
                <span
                  className="mr-2 price-dc"
                  style={{
                    color: "lightGray",
                    textDecorationLine: "line-through",
                  }}
                >
                  {this.state.currentProduct.Price}đ
                </span>
                <span className="price-sale">
                  {this.state.currentProduct.Price -
                    (this.state.currentProduct.Price *
                      this.state.currentProduct.Promotion) /
                      100}
                  đ
                </span>
              </p>
              <div className="row mt-4">
                {/* <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      style={{ fontSize: "20px" }}
                      onClick={this.subCountProduct}
                    >
                      -
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                    min="1"
                    max="100"
                    onChange={this.setStateCount}
                  />
                  <span className="input-group-btn ml-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      onClick={this.addCountProduct}
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
              <div>
                <p
                  className="btn btn-primary"
                  id="add-cart"
                  onClick={this.addProductCart}
                >
                  Add to Cart +
                </p>
                <hr />
                <Link
                  to={"/shop"}
                  className="btn btn-success"
                  style={{ width: "125px" }}
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.carts,
  };
};

export default connect(mapStateToProps, { createCart, updateCart })(
  Item_Products
);
