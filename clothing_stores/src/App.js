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

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={['/',"/shop","/about","/contact","/cart","/checkout","/shop/:id"]} component={Header}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/shop/:id" component={Item_Products} />
        <Route exact path="/login" component={Login} />
        <Route exact path={['/',"/shop","/about","/contact","/cart","/checkout","/shop/:id"]} component={Footer}/>

      </Router>
    );
  }
}
export default App;
