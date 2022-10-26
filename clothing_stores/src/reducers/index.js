import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import carts from "./carts";
import users from "./users";
import message from "./message";

export default combineReducers({
  products,
  categories,
  carts,
  users,
  message,
});
