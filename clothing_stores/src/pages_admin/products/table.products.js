/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import {
  retrieveProducts,
  deleteProduct,
  findProductsByName,
} from "../../actions/products";
import { retrieveCategory } from "../../actions/categories";
import { Link } from "react-router-dom";

class AdminProduct extends Component {
  constructor(props) {
    super(props);
    this.handleGetCategory = this.handleGetCategory.bind(this);
    this.onGetNameSearch = this.onGetNameSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCreateProduct = this.handleCreateProduct.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.state = {
      search: "",
    };
  }
  componentDidMount() {
    this.props.retrieveProducts();
    this.props.retrieveCategory();
  }
  handleGetCategory(id) {
    const { categories } = this.props;
    let type;
    categories.map((cate) => {
      if (cate.Id === id) type = cate.Type;
    });
    return type;
  }
  handleCreateProduct() {}
  handleDeleteProduct(product) {
    if (
      window.confirm(
        `Do you want to delete products with id ${JSON.stringify(product._id)} ?`
      ) === true
    ) {
      this.props.deleteProduct(product._id);
    }
  }
  onGetNameSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  handleSearch() {
    this.props.findProductsByName(this.state.search);
  }
  render() {
    const { products } = this.props;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
        <p className="mb-4"></p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Products Table
            </h6>
            <Link
              type="button"
              className="btn btn-success"
              style={{paddingTop:"12px"}}
              to={"/admin?page=create"}
            >
              Add Product
            </Link>
            <form className=" navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control  border-0 small"
                  placeholder="Search for..."
                  onChange={this.onGetNameSearch}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
                    <i className="material-icons" style={{ margin: "5px" }}>
                      &#xe8b6;
                    </i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Promotion</th>
                      <th>Favourite</th>
                      <th>Img</th>
                      <th style={{ width: "150px" }}>delete / update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td>{product.Name}</td>
                            <td>
                              {this.handleGetCategory(product.Id_Category)}
                            </td>
                            <td>{product.Price}</td>
                            <td>{product.Promotion}</td>
                            <td>{product.Favourite}</td>
                            <td>
                              <img
                                src={`./img/${product.Img}`}
                                alt={`${product.Img}`}
                                width={"100px"}
                                height={" 100px"}
                              />
                            </td>
                            <td>
                              <Link to={`/admin?page=update&&Id=${product._id}`} style={{ cursor: "pointer" }}>
                                <i className="material-icons">&#xe3c9;</i>
                              </Link>
                              <hr />
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.handleDeleteProduct(
                                    product
                                  );
                                }}
                              >
                                <i className="material-icons">&#xe92b;</i>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
  };
};
export default connect(mapStateToProps, {
  retrieveProducts,
  deleteProduct,
  retrieveCategory,
  findProductsByName,
})(AdminProduct);
