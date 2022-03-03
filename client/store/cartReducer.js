export const initialState = {
  basket: [
    {
      id: 1,
      name: "Shirt1",
      price: 20,
      imageUrl:
        "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      id: 2,
      name: "Shirt2",
      price: 20,
      imageUrl:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
  ],
  user: null,
};
export const removeFromBasket = () => {
  //remove item from basket
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id: id,
  });
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
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
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
