
import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, name, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
