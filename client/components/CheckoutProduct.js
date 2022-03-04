import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ name, imageUrl, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log('My props:', basket);
  console.log('My name:', name);
  console.log('My image:', imageUrl);
  console.log('My price:', price);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} alt="" />

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
