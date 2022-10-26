/* eslint-disable array-callback-return */
import { CREATE_CART, DELETE_CART, UPDATE_CART } from "../actions/type";

const initialState = [];
function cartReducer(carts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CART:
      return carts.map((cart) => {
        if (cart.product._id === payload.product._id)
          return { ...cart, ...payload };
        else return cart;
      });
    case CREATE_CART:
      return [...carts, payload];
    case DELETE_CART:
      carts = carts.filter((cart) => cart.product._id !== payload._id);
      return carts;
    default:
      return carts;
  }
}

export default cartReducer;
