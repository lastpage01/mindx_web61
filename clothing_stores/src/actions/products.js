import productServices from "../services/product.services";
import { RETRIEVE_PRODUCT, UPDATE_PRODUCT } from "./type";

export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await productServices.getAll();
    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findProductsByIdCategory= (Id_Category) => async (dispatch) => {
  try {
    const res = await productServices.findByIdCategory(Id_Category);

    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await productServices.update(id, data);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
