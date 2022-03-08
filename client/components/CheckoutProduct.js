import React from 'react';
import { useStateValue } from './StateProvider';
import { useDispatch } from 'react-redux';
import Toastify from 'toastify-js';
import { Button } from '@material-ui/core';
import {
  fetchIncreaseItemQuantity,
  fetchGetBasketItem,
  fetchRemoveFromBasket,
} from '../store/cartReducer';
import { useParams } from 'react-router';

function CheckoutProduct(props) {
  const { name, imageUrl, saleprice, quantity, item } = props;
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleIncreaseButton() {
    dispatch(fetchIncreaseItemQuantity(id));
  }

  function handleRemoveButton() {
    dispatch(fetchRemoveFromBasket(item.id));
    Toastify({
      text: 'Item removed from Cart',
      duration: 1500,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: 'black',
      },
    }).showToast();
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
            onClick={() => handleIncreaseButton()}
            type="button"
          >
            +
          </button>
        </p>
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: 'grey' }}
          onClick={() => handleRemoveButton()}
        >
          Remove
        </Button>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{saleprice}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
