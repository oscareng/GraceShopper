import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddToBasket,
  fetchGetBasketItems,
  getBasketItems,
  addToBasket,
} from "../store/cartReducer";
import useAuth from "./useAuth.js";

export default function useCart() {
  const { isLoggedIn } = useAuth();
  const cartItems = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    if (isLoggedIn) {
      dispatch(fetchAddToBasket(product));
    } else {
      dispatch(addToBasket(product));
    }
  }
  function getCart() {
    if (isLoggedIn) {
      dispatch(fetchGetBasketItems());
    } else {
      const items = JSON.parse(window.localStorage.getItem("cartItems"));
      dispatch(getBasketItems(items));
    }
  }
  return {
    cartItems,
    addToCart,
    getCart,
  };
}
