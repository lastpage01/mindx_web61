/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";
import { validatePhone } from "./validateForm";
import billServices from "../../services/bill.services";
import billDetailsServices from "../../services/bill.details.services";

class CheckOut_Section extends Component {
  constructor(props) {
    super(props);
    this.handleBuyProduct = this.handleBuyProduct.bind(this);
    this.onchangeFirstName = this.onchangeFirstName.bind(this);
    this.onchangeLastName = this.onchangeLastName.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangeProvince = this.onchangeProvince.bind(this);
    this.onchangeDistrict = this.onchangeDistrict.bind(this);
    this.onchangeWard = this.onchangeWard.bind(this);
    this.onchangeDetailedAddress = this.onchangeDetailedAddress.bind(this);

    this.state = {
      Id: null,
      FirstName: "",
      LastName: "",
      Phone: null,
      Email: "",
      Province: "",
      District: "",
      Ward: "",
      DetailedAddress: "",
      Total: null,
      User: "",
      Dated: new Date(),
    };
  }

  componentDidMount() {
    billServices.getAll().then((response) => {
      const arrBill = response.data.bills;
      const count = response.data.count;
      this.setState({
        Id: Number(arrBill[count - 1].Id) + 1,
        Total: Number(localStorage.getItem("total")),
        User: localStorage.getItem("username"),
      });
    });
  }

  handleBuyProduct = (e) => {
    e.preventDefault();
    this.form.validateAll();
    console.log(this.state);
    if (this.checkBtn.context._errors.length === 0) {
      billServices.create(this.state).then(() => {
        const carts = this.props.cartProducts;
        carts.map((cart) => {
          const newTotal =
            (cart.product.Price -
              (cart.product.Price * cart.product.Promotion) / 100) *
            cart.count;
          const newBillDetail = {
            IdBill: Number(this.state.Id),
            IdProduct: cart.product._id,
            Price: cart.product.Price,
            Promotion: cart.product.Promotion,
            Quantity: cart.count,
            Total: newTotal,
          };
          billDetailsServices.create(newBillDetail).then(() => {
            alert("successfully purchase...!");
            window.location = "/shop";
          });
        });
      });
    }
  };

  onchangeFirstName = (e) => {
    this.setState({
      FirstName: e.target.value,
    });
    console.log(this.state.Dated.toUTCString());
  };
  onchangeLastName = (e) => {
    this.setState({
      LastName: e.target.value,
    });
  };
  onchangePhone = (e) => {
    this.setState({
      Phone: Number(e.target.value),
    });
  };
  onchangeEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  onchangeProvince = (e) => {
    this.setState({
      Province: e.target.value,
    });
  };
  onchangeDistrict = (e) => {
    this.setState({
      District: e.target.value,
    });
  };
  onchangeWard = (e) => {
    this.setState({
      Ward: e.target.value,
    });
  };
  onchangeDetailedAddress = (e) => {
    this.setState({
      DetailedAddress: e.target.value,
    });
  };
  render() {
    return (
      <>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 ">
                <Form
                  className="billing-form"
                  onSubmit={this.handleBuyProduct}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="mb-4 billing-heading">Billing Details</h3>
                    <Link
                      to={"/cart"}
                      type="submit"
                      className="btn btn-danger"
                      style={{
                        height: " 40px",
                        width: " 100px",
                        borderRadius: "35px",
                      }}
                    >
                      Back
                    </Link>
                  </div>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="firstname">Họ :</label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeFirstName}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="lastname">Tên :</label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeLastName}
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="phone">Số Điện Thoại : </label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangePhone}
                          validations={[validatePhone]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="emailaddress">Email :</label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeEmail}
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="streetaddress">
                          Tỉnh / Thành Phố :
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeProvince}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="streetaddress">Quận / Huyện :</label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeDistrict}
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="streetaddress">Phường / Xã :</label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeWard}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ height: "100px" }}>
                        <label htmlFor="streetaddress">
                          Địa chỉ chi tiết :
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={this.onchangeDetailedAddress}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "50px",
                      }}
                    >
                      <button
                        type="submit"
                        className="btn btn-success"
                        style={{
                          height: " 60px",
                          width: " 200px",
                          borderRadius: "35px",
                        }}
                      >
                        Place an order
                      </button>
                    </div>
                  </div>
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
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.carts,
  };
};
export default connect(mapStateToProps)(CheckOut_Section);
