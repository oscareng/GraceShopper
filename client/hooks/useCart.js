import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddToBasket,
  fetchGetBasketItems,
  fetchGetLocalBasket,
  fetchAddToLocalBasket,
  fetchIncreaseItemQuantity,
  fetchIncreaseLocalItemQuantity,
  fetchRemoveFromBasket,
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
      Toastify({
        text: "Item added to Cart",
        duration: 1500,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "black",
        },
      }).showToast();
    } else {
      dispatch(fetchAddToLocalBasket(product));
      Toastify({
        text: "Item added to Cart",
        duration: 1500,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "black",
        },
      }).showToast();
    }
  }
  function increaseItemQuantity(item) {
    if (isLoggedIn) {
      dispatch(fetchIncreaseItemQuantity(item));
    } else {
      dispatch(fetchIncreaseLocalItemQuantity(item));
    }
  }

  function removeFromCart(id) {
    dispatch(fetchRemoveFromBasket(id));
    Toastify({
      text: "Item removed from Cart",
      duration: 1500,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
      },
    }).showToast();
  }
  return {
    cartItems,
    addToCart,
    removeFromCart,
    increaseItemQuantity,
  };
}
