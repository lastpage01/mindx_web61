/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveCategory,
  deleteCategory,
  retrieveCategoryByType,
} from "../../actions/categories";
import { Link } from "react-router-dom";

class RetrieveCategory extends Component {
  constructor(props) {
    super(props);
    this.onGetNameSearch = this.onGetNameSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.state = {
      search: "",
    };
  }
  componentDidMount() {
    this.props.retrieveCategory();
  }
  handleDeleteCategory(category) {
    if (
      window.confirm(
        `Do you want to delete category with id ${JSON.stringify(
          category.Id
        )} ?`
      ) === true
    ) {
      this.props.deleteCategory(category._id);
    }
  }
  onGetNameSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  handleSearch() {
    this.props.retrieveCategoryByType(this.state.search);
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Quản lý danh mục</h1>
        <p className="mb-4"></p>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Categories Table
            </h6>
            <Link
              type="button"
              className="btn btn-success"
              style={{ paddingTop: "12px" }}
              to={"/admin/quanlydanhmuc?page=create"}
            >
              Add Category
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
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.handleSearch}
                  >
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
                      <th>Id</th>
                      <th>Type</th>
                      <th style={{ width: "150px" }}>delete / update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories &&
                      categories.map((category, index) => {
                        return (
                          <tr key={index}>
                            <td>{category.Id}</td>
                            <td>{category.Type}</td>
                            <td>
                              <Link
                                to={`/admin/quanlydanhmuc?page=update&&Id=${category.Id}`}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="material-icons">&#xe3c9;</i>
                              </Link>
                              <hr />
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.handleDeleteCategory(category);
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
    categories: state.categories,
  };
};
export default connect(mapStateToProps, {
  retrieveCategory,
  deleteCategory,
  retrieveCategoryByType,
})(RetrieveCategory);
