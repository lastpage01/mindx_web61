/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { connect } from "react-redux";
import React, { Component } from "react";
import { retrieveProducts, updateProduct } from "../../actions/products";
import productServices from "../../services/product.services";
import { Link } from "react-router-dom";

class Products extends Component {
  item_pro;
  products = [];
  constructor(props) {
    super(props);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.updateProductFavourite = this.updateProductFavourite.bind(this);
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
    };
  }
  componentDidMount() {
    console.log("list did mount");
    this.props.retrieveProducts();
    localStorage.setItem("page", "1");
  }

  handleFavourite = (e) => {
    e.target.classList.add("favourite");
    const favourite = Number(e.target.getAttribute("data-favourite")) + 1;
    this.updateProductFavourite(e.target.getAttribute("data"), favourite);
  };

  updateProductFavourite = (id, favourite) => {
    productServices.getAllByPage({ Favourite: favourite });
    this.props
      .updateProduct(id, { Favourite: favourite })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    const { products } = this.props;
    let countPage = Number(localStorage.getItem("page"));
    if (countPage === 0) countPage = 1;
    this.products = products.slice(countPage*3-3, countPage * 3);
    return (
      <div className="row">
        {this.products.length > 0
          ? this.products.map((product, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-6 col-lg-4 ">
                  <div className="product">
                    <a href="#" className="img-prod">
                      <img
                        className="img-fluid"
                        src={`img/${product.Img}`}
                        alt={`${product.Img}`}
                      />
                      <span className="status">{product.Promotion}%</span>
                      <div className="overlay"></div>
                    </a>
                    <div className="text py-3 px-3">
                      <h3>
                        <a href="#">{product.Name}</a>
                      </h3>
                      <div className="d-flex">
                        <div className="pricing">
                          <p className="price">
                            <span className="mr-2 price-dc">
                              {product.Price}
                            </span>
                            <span className="price-sale">
                              {product.Price -
                                (product.Price * product.Promotion) / 100}
                            </span>
                          </p>
                        </div>
                        <div className="rating">
                          <p className="text-right">
                            <i
                              className="material-icons"
                              data-favourite={product.Favourite}
                              data={product._id}
                              onClick={this.handleFavourite}
                              style={{ cursor: "pointer" }}
                            >
                              &#xe87d;
                            </i>
                          </p>
                        </div>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link
                          to={`/shop/${product._id}`}
                          className="add-to-cart text-center py-2 mr-1"
                          data={product._id}
                        >
                          Add to cart +
                        </Link>
                        {/* <a href="#" className="buy-now text-center py-2">
                          Buy now
                          <span>
                            <i className="ion-ios-cart ml-1"></i>
                          </span>
                        </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : "Not found any item"}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { retrieveProducts, updateProduct })(
  Products
);
