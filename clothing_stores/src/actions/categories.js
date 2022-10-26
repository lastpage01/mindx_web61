import categoryServices from "../services/category.services";
import { RETRIEVE_CATEGORY } from "./type";

export const retrieveCategory = () => async (dispatch) => {
    try {
      const res = await categoryServices.getAll();
      dispatch({
        type: RETRIEVE_CATEGORY,
        payload: res.data.categories,
      });
    } catch (err) {
      console.log(err);
    }
  };