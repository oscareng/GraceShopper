import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddToBasket,
  fetchGetBasketItems,
  fetchGetLocalBasket,
  fetchAddToLocalBasket,
  fetchIncreaseItemQuantity,
  fetchIncreaseLocalItemQuantity,
} from "../store/cartReducer";
import useAuth from "./useAuth.js";

export default function useCart() {
  const { isLoggedIn } = useAuth();
  const cartItems = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchGetBasketItems());
    } else {
      dispatch(fetchGetLocalBasket());
    }
  }, [isLoggedIn]);

  function addToCart(product) {
    if (isLoggedIn) {
      dispatch(fetchAddToBasket(product));
    } else {
      dispatch(fetchAddToLocalBasket(product));
    }
  }
  function increaseItemQuantity(item) {
    if (isLoggedIn) {
      dispatch(fetchIncreaseItemQuantity(item));
    } else {
      dispatch(fetchIncreaseLocalItemQuantity(item));
    }
  }
  return {
    cartItems,
    addToCart,
    increaseItemQuantity,
  };
}
