import productServices from "../services/product.services";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  RETRIEVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./type";

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

export const findProductsByName = (name) => async (dispatch) => {
  try {
    const res = await productServices.findByName(name);

    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};
export const findById = (id) => async (dispatch) => {
  try {
    const res = await productServices.get(id);
    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findProductsByIdCategory = (Id_Category) => async (dispatch) => {
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

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await productServices.delete(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const createProduct = (data) => async (dispatch) => {
  try {
    const res = await productServices.create(data);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
