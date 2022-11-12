import categoryServices from "../services/category.services";
import { CREATE_CATEGORY, DELETE_CATEGORY, RETRIEVE_CATEGORY, UPDATE_CATEGORY } from "./type";

export const retrieveCategory = () => async (dispatch) => {
    try {
      const res = await categoryServices.getAll();
      dispatch({
        type: RETRIEVE_CATEGORY,
        payload: res.data.categories,
      });
      return Promise.resolve(res.data.categories)
    } catch (err) {
      console.log(err);
    }
  };

  export const retrieveCategoryById = (id) => async (dispatch) => {
    try {
      const res = await categoryServices.findById(id);
      dispatch({
        type: RETRIEVE_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const retrieveCategoryByType = (type) => async (dispatch) => {
    try {
      const res = await categoryServices.findByType(type);
      dispatch({
        type: RETRIEVE_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const createCategory = (data) => async (dispatch) => {
    console.log(data);
    try {
      const res = await categoryServices.create(data);
      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const updateCategory = (id, data) => async (dispatch) => {
    try {
      const res = await categoryServices.update(id, data);
      dispatch({
        type: UPDATE_CATEGORY,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteCategory = (id) => async (dispatch) => {
    try {
      const res = await categoryServices.delete(id);
      dispatch({
        type: DELETE_CATEGORY,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };