/* eslint-disable array-callback-return */
import React from "react";
import { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

import { validateEmpty } from "./validateForm";
import { retrieveCategory } from "../../actions/categories";
import { retrieveProducts, updateProduct } from "../../actions/products";
import { connect } from "react-redux";

class Update extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleGetValue = this.handleGetValue.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFavourite = this.onChangeFavourite.bind(this);
    this.onChangePromotion = this.onChangePromotion.bind(this);
    this.handleGetImage = this.handleGetImage.bind(this);
    this.state = {
      product: {
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
    this.props.products.map((pro) => {
      if (pro._id === window.location.search.split("=")[2])
        this.setState({
          product: pro,
        });
    });
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .updateProduct(this.state.product._id,this.state.product)
        .then((data) => {
          alert("Update successfully...!");
          window.location = '/admin'
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleGetValue = (e) => {
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Id_Category: e.target.value,
        },
      };
    });
  };
  onChangeName = (e) => {
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Name: e.target.value,
        },
      };
    });
  };
  onChangePrice = (e) => {
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Price: e.target.value,
        },
      };
    });
  };
  onChangeFavourite = (e) => {
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Favourite: e.target.value,
        },
      };
    });
  };
  onChangePromotion = (e) => {
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Promotion: e.target.value,
        },
      };
    });
  };
  handleGetImage = (e) => {
    const img = e.target.value.split("\\");
    this.setState((prevState) => {
      return {
        product: {
          ...prevState.product,
          Img: img[img.length - 1],
        },
      };
    });
  };
  render() {
    const categories = this.props.categories;
    const product = this.state.product;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Update Product</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <Link type="button" to={"/admin"} className="btn btn-success">
              Back
            </Link>
          </div>
          <div className="card-body">
            <Form
              onSubmit={this.handleUpdate}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeName}
                  value={product.Name}
                  validations={[validateEmpty]}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-control" onClick={this.handleGetValue}>
                  {categories &&
                    categories.map((category, index) => {
                      const item =
                        product.Id_Category === category.Id ? (
                          <option value={category.Id} key={index} selected>
                            {category.Type}
                          </option>
                        ) : (
                          <option value={category.Id} key={index}>
                            {category.Type}
                          </option>
                        );
                      return item;
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <Input
                  type="Number"
                  className="form-control"
                  min="0"
                  onChange={this.onChangePrice}
                  validations={[validateEmpty]}
                  value={product.Price}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Promotion</label>
                <Input
                  type="Number"
                  className="form-control"
                  min="0"
                  onChange={this.onChangePromotion}
                  validations={[validateEmpty]}
                  value={product.Promotion}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Favourite</label>
                <Input
                  type="Number"
                  className="form-control"
                  min="0"
                  onChange={this.onChangeFavourite}
                  value={product.Favourite}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <Input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={this.handleGetImage}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
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
  retrieveCategory,
  retrieveProducts,
  updateProduct,
})(Update);
