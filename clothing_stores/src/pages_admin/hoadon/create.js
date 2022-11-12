import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { validateEmpty } from "./validateForm";
import { retrieveCategory } from "../../actions/categories";
import { createProduct } from "../../actions/products";

class Create extends Component {
  constructor(props) {
    super(props);
    this.handleGetValue = this.handleGetValue.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFavourite = this.onChangeFavourite.bind(this);
    this.onChangePromotion = this.onChangePromotion.bind(this);
    this.handleGetImage = this.handleGetImage.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.state = {
      Name: "",
      Id_Category: "",
      Price: null,
      Promotion: null,
      Favourite: null,
      Img: "",
    };
  }
  componentDidMount() {
    this.props.retrieveCategory().then((data) => {
      this.setState({
        Id_Category: data[0].Id,
      });
    });
  }

  handleCreate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .createProduct(this.state)
        .then((data) => {
          alert("Add successfully...!");
          window.location = '/admin';
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleGetValue = (e) => {
    this.setState({
      Id_Category: e.target.value,
    });
  };
  onChangeName = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };
  onChangePrice = (e) => {
    this.setState({
      Price: e.target.value,
    });
  };
  onChangeFavourite = (e) => {
    this.setState({
      Favourite: e.target.value,
    });
  };
  onChangePromotion = (e) => {
    this.setState({
      Promotion: e.target.value,
    });
  };
  handleGetImage = (e) => {
    const img = e.target.value.split("\\");
    this.setState({
      Img: img[img.length - 1],
    });
  };
  render() {
    const categories = this.props.categories;
    return (
      <>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Add Product</h1>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <Link type="button" to={"/admin"} className="btn btn-success">
                Back
              </Link>
            </div>
            <div className="card-body">
              <Form
                onSubmit={this.handleCreate}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.onChangeName}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    onClick={this.handleGetValue}
                  >
                    {categories &&
                      categories.map((category, index) => {
                        return (
                          <option value={category.Id} key={index}>
                            {category.Type}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <Input
                    type="Number"
                    required
                    className="form-control"
                    min="0"
                    onChange={this.onChangePrice}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Promotion</label>
                  <Input
                    type="Number"
                    required
                    className="form-control"
                    min="0"
                    onChange={this.onChangePromotion}
                    validations={[validateEmpty]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Favourite</label>
                  <Input
                    type="Number"
                    className="form-control"
                    min="0"
                    onChange={this.onChangeFavourite}
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
                  Create
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
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
  };
};
export default connect(mapStateToProps, { retrieveCategory, createProduct })(
  Create
);
