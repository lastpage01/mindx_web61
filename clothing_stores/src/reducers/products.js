import { RETRIEVE_PRODUCT, UPDATE_PRODUCT } from "../actions/type";

const initialState = [];

function productReducer(products = initialState, action){
    const { type, payload } = action;

    switch(type){
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
        default:
            return products;
    }
}
export default productReducer;