import React from "react";
import { useStateValue } from "./StateProvider";
import { useDispatch } from "react-redux";
import {
  fetchIncreaseItemQuantity,
  fetchGetBasketItem,
} from "../store/cartReducer";

function CheckoutProduct(props) {
  const { name, imageUrl, saleprice, quantity, item } = props;
  const dispatch = useDispatch();

  function handleIncreaseButton(item) {
    dispatch(fetchIncreaseItemQuantity(item));
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{name}</p>
        <p className="checkoutProduct__name">
          Quantity: {quantity}
          <button
            className="checkoutProduct__name"
            onClick={() => handleIncreaseButton(item)}
            type="button"
          >
            +
          </button>
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{saleprice}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
