export const initialState = {
  basket: [
    {
      id: 1,
      title: 'Shirt',
      price: 90,
      image:
        'https://www.pexels.com/photo/portrait-of-woman-with-ring-on-her-hand-10129710/',
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
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
