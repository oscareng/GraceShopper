import React from 'react';
import { useStateValue } from './StateProvider';
import { useDispatch } from 'react-redux';
import useCart from '../hooks/useCart';
import {
  fetchIncreaseItemQuantity,
  fetchGetBasketItem,
  fetchRemoveFromBasket,
} from '../store/cartReducer';

function CheckoutProduct(props) {
  const { name, imageUrl, saleprice, quantity, item } = props;
  const { removeFromCart, increaseItemQuantity } = useCart();

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
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{saleprice}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
