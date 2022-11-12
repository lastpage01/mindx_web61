import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { validateEmpty } from "./validateForm";
import { retrieveCategory ,createCategory} from "../../actions/categories";

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSetId = this.onSetId.bind(this);
    this.state = {
      Id: "",
      Type: "",
    };
  }
  componentDidMount() {
    this.onSetId();
  }

  handleCreate = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      this.props.createCategory(this.state).then(data=>{
        alert("Add Category Success ...!");
        window.location = '/admin/quanlydanhmuc'
      })
    }
  };
  onSetId = () => {
    this.props.retrieveCategory().then((data) => {
      let id =
        Number(
          data.sort((a, b) => {
            if (a.Id < b.Id) return 1;
            if (a.Id > b.Id) return -1;
            return 0;
          })[0].Id
        ) + 1;
      if (id < 10) id = "00" + id;
      else if (id < 100) id = "0" + id;
      else id = id.toString();
      this.setState({
        Id: id,
      });
    });
  };
  onChangeType = (e) => {
    this.setState({
      Type: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Add Category</h1>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <Link
                type="button"
                to={"/admin/quanlydanhmuc"}
                className="btn btn-success"
              >
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
                  <label className="form-label">Id</label>
                  <Input
                    type="text"
                    className="form-control"
                    value={this.state.Id}
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
    categories: state.categories,
  };
};
export default connect(mapStateToProps, { retrieveCategory,createCategory })(Create);
