import React from "react";
import { useStateValue } from "./StateProvider";
import { useDispatch } from "react-redux";
import {
  fetchIncreaseItemQuantity,
  fetchGetBasketItem,
} from "../store/cartReducer";
import useCart from "../hooks/useCart";

function CheckoutProduct(props) {
  const { name, imageUrl, price, quantity, item } = props;
  const { increaseItemQuantity } = useCart();
  useCart();
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{name}</p>
        <p className="checkoutProduct__name">
          Quantity: {quantity}
          <button
            className="checkoutProduct__name"
            onClick={() => increaseItemQuantity(item)}
            type="button"
          >
            +
          </button>
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
