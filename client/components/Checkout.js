import React from "react";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.gw-world.com/fileadmin/_processed_/4/4/csm_fashion_Header_1920x400_2f48325f56.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.username}</h3>
            <h2 className="checkout__name">Your Shopping Basket</h2>
            {basket.map((item) => {
              console.log(item);
              <CheckoutProduct
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              />;
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
