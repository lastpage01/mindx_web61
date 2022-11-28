import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";

import Header from "./common/header";
import Footer from "./common/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";
import Item_Products from "./pages/shop/item.product";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages_admin/products";
import Admin_HoaDon from "./pages_admin/hoadon";
import Admin_User from "./pages_admin/user";
import Admin_Category from "./pages_admin/categories";
import { connect } from "react-redux";
class App extends Component {
  render() {
    const { isLoggedIn, user } = this.props;
    console.log(user);
    console.log(isLoggedIn);
    return (
      <>
        <Router>
          <Route
            exact
            path={[
              "/",
              "/shop",
              "/about",
              "/contact",
              "/cart",
              "/checkout",
              "/shop/:id",
            ]}
            component={Header}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/shop/:id" component={Item_Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {isLoggedIn === true && user.admin === true ? (
            <>
              <Route
                exact
                path={["/admin", "/admin/quanlysanpham"]}
                component={Admin}
              />
              <Route
                exact
                path="/admin/quanlyhoadon"
                component={Admin_HoaDon}
              />
              <Route
                exact
                path="/admin/quanlytaikhoan"
                component={Admin_User}
              />
              <Route
                exact
                path="/admin/quanlydanhmuc"
                component={Admin_Category}
              />
            </>
          ) : (
            ""
          )}
          <Route
            exact
            path={[
              "/",
              "/shop",
              "/about",
              "/contact",
              "/cart",
              "/checkout",
              "/shop/:id",
            ]}
            component={Footer}
          />
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.users;
  const { user } = state.users;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
    user,
  };
}
export default connect(mapStateToProps)(App);
