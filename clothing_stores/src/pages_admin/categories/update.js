/* eslint-disable array-callback-return */
import React from "react";
import { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

import { validateEmpty } from "./validateForm";
import { retrieveCategory,updateCategory } from "../../actions/categories";
import { connect } from "react-redux";

class Update extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onChangeType = this.onChangeType.bind(this)
    this.state = {
      category: {
        _id: null,
        Id: "",
        Type: "",
      },
    };
  }
  componentDidMount() {
    console.log(this.props.categories);
    this.props.categories.map((category) => {
      if (category.Id === window.location.search.split("=")[2])
        this.setState({
          category: category,
        });
    });
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .updateCategory(this.state.category._id,this.state.category)
        .then((data) => {
          alert("Update successfully...!");
          window.location = '/admin/quanlydanhmuc'
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  onChangeType = (e)=>{
    this.setState((prevState) => {
      return {
        category: {
          ...prevState.category,
          Type: e.target.value,
        },
      };
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Update Category</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <Link type="button" to={"/admin/quanlydanhmuc"} className="btn btn-success">
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
                <label className="form-label">Id</label>
                <Input
                  type="text"
                  className="form-control"
                  value = {this.state.category.Id}
                  disabled
                  validations={[validateEmpty]}
                />
                </div>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <Input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeType}
                  validations={[validateEmpty]}
                  value={this.state.category.Type}
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
    categories: state.categories,
  };
};
export default connect(mapStateToProps, {
  retrieveCategory,
  updateCategory
})(Update);
