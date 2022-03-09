import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStateValue } from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';
import { fetchGetGuestBasketItems } from '../store/cartReducer.js';

function Checkout() {
  const cartItems = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetGuestBasketItems());
  }, []);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={'../images/city-banner-day.png'}
          alt=""
        />
        {cartItems.length === 0 || cartItems === undefined ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h3>Hello loyal customer! :D </h3>
            {/* {console.log("MY ITEM:", cartItems)} */}
            <h2 className="checkout__name">Your Shopping Basket</h2>
            {cartItems.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  name={item.name}
                  saleprice={item.saleprice}
                  imageUrl={item.imageUrl}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* {cartItems.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )} */}
    </div>
  );
}

export default Checkout;
