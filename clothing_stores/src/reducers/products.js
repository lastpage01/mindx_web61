import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  RETRIEVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/type";

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_PRODUCT:
      return payload;
    case UPDATE_PRODUCT:
      return products.map((product) => {
        if (product._id === payload._id) {
          return {
            ...product,
            ...payload,
          };
        } else {
          return product;
        }
      });
    case DELETE_PRODUCT:
      products = products.filter((product) => product._id !== payload._id);
      return products;
    case CREATE_PRODUCT:
      return [...products,payload]
    default:
      return products;
  }
}
export default productReducer;
