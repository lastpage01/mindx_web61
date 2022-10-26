/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveCategory } from "../../actions/categories";
import categoryServices from "../../services/category.services";
import {
  findProductsByIdCategory,
  retrieveProducts,
} from "../../actions/products";

class Category extends Component {
  constructor(props) {
    super(props);
    this.handleGetProduct = this.handleGetProduct.bind(this);
    this.getCategoryType = this.getCategoryType.bind(this);
    this.getProductIdCategory = this.getProductIdCategory.bind(this);
    this.handleGetAllProduct = this.handleGetAllProduct.bind(this);

    this.state = {
      category: {
        _id: null,
        Id: "",
        Type: "",
      },
    };
  }
  componentDidMount() {
    console.log("list did mount");
    this.props.retrieveCategory();
  }
  handleGetProduct = (e) => {
    const type = e.target.text;
    this.getCategoryType(type);
    this.getProductIdCategory(this.state.category.Id);
  };
  getProductIdCategory = (Id_Category) => {
    this.props.findProductsByIdCategory(Id_Category);
  };
  getCategoryType = (type) => {
    categoryServices
      .findByType(type)
      .then((response) => {
        this.setState({
          category: response.data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleGetAllProduct = () => {
    this.props.retrieveProducts();
  };
  render() {
    const { categories } = this.props;
    return (
      <div className="col-md-4 col-lg-2 sidebar">
        <div className="sidebar-box-2">
          <h2 className="heading mb-4">
            <div style={{ cursor: "pointer" }} onClick = {this.handleGetAllProduct}>Clothing</div>
          </h2>
          <ul>
            {categories &&
              categories.map((category, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={"/shop?" + category.Type}
                      onMouseDown={this.handleGetProduct}
                      onMouseUp={this.handleGetProduct}
                    >
                      {category.Type}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {
  retrieveCategory,
  findProductsByIdCategory,
  retrieveProducts,
})(Category);
