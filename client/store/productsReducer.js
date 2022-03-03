import axios from "axios";

const initialState = [];

//Action Types
const GOT_PRODUCTS = "GOT_PRODUCTS";

//Action Creators
export const getProducts = (products) => ({
  type: GOT_PRODUCTS,
  products,
});

//Thunks
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get("/api/products");
      dispatch(getProducts(products));
    } catch (error) {
      console.log("fetchProducts thunk error", error);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function products(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
