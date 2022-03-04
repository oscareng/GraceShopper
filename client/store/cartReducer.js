import axios from 'axios';

export const initialState = [];

//Action Types
const GET_BASKET_ITEMS = 'GET_BASKET_ITEMS';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const GET_BASKET_TOTAL = 'GET_BASKET_TOTAL';
const SET_USER = 'SET_USER';

//Action Creators
const getBasketItems = (items) => ({
  type: GET_BASKET_ITEMS,
  items,
});
const addToBasket = (item) => ({
  type: ADD_TO_BASKET,
  item,
});

const removeFromBasket = (id) => ({
  type: REMOVE_FROM_BASKET,
  id,
});

const getBasketTotal = (basket) => ({
  type: GET_BASKET_TOTAL,
  basket,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});

//Thunks
export const fetchGetBasketItems = () => {
  return async (dispatch) => {
    try {
      const { data: basketItems } = await axios.get(`/api/lineItem/`);
      dispatch(getBasketItems(basketItems));
    } catch (error) {
      console.log('fetchAddToBasket thunk error', error);
    }
  };
};
export const fetchAddToBasket = (item) => {
  return async (dispatch) => {
    try {
      const { data: lineItem } = await axios.post(`/api/lineItem/`, item);
      dispatch(addToBasket(lineItem));
    } catch (error) {
      console.log('fetchAddToBasket thunk error', error);
    }
  };
};

export const fetchRemoveFromBasket = (id) => {
  return async (dispatch) => {
    try {
      const { data: deleted } = await axios.delete(`/api/lineItem/${id}`);
      dispatch(removeFromBasket(deleted));
    } catch (error) {
      console.log('fetchRemoveFromBasket thunk error', error);
    }
  };
};

export const fetchGetBasketTotal = (basket) => {
  return async (dispatch) => {
    try {
      const { data: basket } = await axios.get(`/api/lineItem/`);
      dispatch(getBasketTotal(basket));
    } catch (error) {
      console.log('fetchGetBasketTotal thunk error', error);
    }
  };
};

export const fetchSetUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: myUser } = await axios.get(`/api/products/`);
      dispatch(setUser(myUser));
    } catch (error) {
      console.log('fetchSetUser thunk error', error);
    }
  };
};


export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case GET_BASKET_ITEMS:
      return action.items;
    case ADD_TO_BASKET:
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      //Logic for removing item from basket

      //we clone the basket
      let newBasket = [...state.basket];

      //we check if the product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
