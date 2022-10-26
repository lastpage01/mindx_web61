import { CREATE_CART, DELETE_CART, UPDATE_CART } from "./type";

export const createCart = (product, count) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_CART,
      payload: { product, count },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCart = (product, count) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CART,
      payload: { product, count },
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CART,
      payload: product,
    });
  } catch (err) {
    console.log(err);
  }
};
