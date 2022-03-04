import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
  const { name, imageUrl, saleprice } = props;
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{saleprice}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
