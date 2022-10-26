import { RETRIEVE_CATEGORY } from "../actions/type";

const initialState = [];

function categoryReducer(categories = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_CATEGORY:
      return payload;
    default:
      return categories;
  }
}

export default categoryReducer