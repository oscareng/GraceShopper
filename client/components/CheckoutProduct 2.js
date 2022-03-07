import React from 'react';
import { useStateValue } from './StateProvider';
import { useDispatch } from 'react-redux';
import {
  fetchIncreaseItemQuantity,
  fetchGetBasketItem,
} from '../store/cartReducer';
import { useParams } from 'react-router';

function CheckoutProduct(props) {
  const { name, imageUrl, saleprice, quantity, item } = props;
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleIncreaseButton() {
    dispatch(fetchIncreaseItemQuantity(id));
  }
  console.log('checkoutProduct item:', item);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{name}</p>
        <p className="checkoutProduct__name">
          Quantity: {quantity}
          <button
            className="checkoutProduct__name"
            onClick={() => handleIncreaseButton()}
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
