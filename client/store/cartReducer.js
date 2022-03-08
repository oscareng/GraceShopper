import axios from 'axios';

export const initialState = [];

//Action Types
const GET_BASKET_ITEMS = 'GET_BASKET_ITEMS';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const GET_BASKET_TOTAL = 'GET_BASKET_TOTAL';
const SET_USER = 'SET_USER';
const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY';

//Action Creators
export const getBasketItems = (items) => ({
  type: GET_BASKET_ITEMS,
  items,
});

export const addToBasket = (item) => ({
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

const increaseItemQuantity = (item) => ({
  type: INCREASE_ITEM_QUANTITY,
  item,
});

//Thunks
export const fetchGetBasketItems = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data: basketItems } = await axios.get(`/api/lineItem/`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getBasketItems(basketItems));
    } catch (error) {
      console.log('fetchGetBasketItems thunk error', error);
    }
  };
};
export const fetchAddToBasket = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      // const { data: alreadyInBasket } = await axios.get(
      //   `/api/lineItem/${item.id}`,
      //   {
      //     headers: {
      //       authorization: token,
      //     },
      //   }
      // );
      // if (alreadyInBasket.id === item.id) {
      //   alreadyInBasket[id];
      //   const update = await axios.put(
      //     `/api/lineitem/`,
      //     {
      //       quantity: item.quantity + 1,
      //     },
      //     {
      //       headers: {
      //         authorization: token,
      //       },
      //     }
      //   );
      // } else {
      const { data: lineItem } = await axios.post(`/api/lineItem/`, item, {
        headers: {
          authorization: token,
        },
      });
      dispatch(addToBasket(lineItem));
    } catch (error) {
      console.log("fetchAddToBasket thunk error", error);
    }
  };
};

export const fetchRemoveFromBasket = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data: deleted } = await axios.delete(`/api/lineItem/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(removeFromBasket(deleted));
    } catch (error) {
      console.log("fetchRemoveFromBasket thunk error", error);
    }
  };
};

export const fetchIncreaseItemQuantity = (item) => {
  return async (dispatch) => {
    try {
      const { data: basketItem } = await axios.put(
        `/api/lineItem/increase`,
        item
      );
      dispatch(increaseItemQuantity(basketItem));
    } catch (error) {
      console.log('fetchIncreaseItemQuantity thunk error', error);
    }
  };
};

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case GET_BASKET_ITEMS:
      return action.items;
    case ADD_TO_BASKET:
      return [...state, action.item];
    case REMOVE_FROM_BASKET:
      const removedItem = state.filter((item) => item.id !== action.id.id);
      return removedItem;
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case INCREASE_ITEM_QUANTITY: {
      let newState = [...state];
      //const item = newState.find((element) => element.id === action.id);
      let index = newState.findIndex(
        (product) => product.id === action.item.id
      );
      newState[index] = action.item;

      return newState;
    }
    default:
      return state;
  }
}
