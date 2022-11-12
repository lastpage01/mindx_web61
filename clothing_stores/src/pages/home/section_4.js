/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveProducts } from "../../actions/products";

class Section_4 extends Component {
  constructor(props) {
    super(props);
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
    console.log("list did mount products home");
    this.props.retrieveProducts();
  }
  render() {
    const { products } = this.props;
    let list = [];
    if (products.length < 4) list = products;
    else {
      for (let i = 0; i < 4; i++) {
        list.push(products[i]);
      }
    }
    return (
      <>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-3 pb-3">
              <div className="col-md-12 heading-section text-center ">
                <h2 className="mb-4">Products</h2>
                <p>Most loved products</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {list &&
                list.map((product, index) => {
                  return (
                    <div key={index} className="col-sm col-md-6 col-lg ">
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
                              to={"/shop/" + product._id}
                              className="add-to-cart text-center py-2 mr-1"
                            >
                              Add to cart +
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { retrieveProducts })(Section_4);
