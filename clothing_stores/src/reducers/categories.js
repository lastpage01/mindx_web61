import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  RETRIEVE_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/type";

const initialState = [];

function categoryReducer(categories = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CATEGORY:
      return payload;
    case CREATE_CATEGORY:
      return [...categories, payload];
    case DELETE_CATEGORY:
      categories = categories.filter(
        (category) => category._id !== payload._id
      );
      return categories;
    case UPDATE_CATEGORY:
      return categories.map((category) => {
        if (category._id === payload._id) {
          return {
            ...category,
            ...payload,
          };
        } else {
          return category;
        }
      });
    default:
      return categories;
  }
}

export default categoryReducer;
