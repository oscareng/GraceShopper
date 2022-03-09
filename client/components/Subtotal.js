import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
function Subtotal() {
  const { cartItems } = useCart();
  console.log(cartItems);
  const total = cartItems.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      currentValue = array[currentIndex].price * array[currentIndex].quantity;
      return previousValue + currentValue;
    },
    //  previousValue.price + currentValue.price,
    0
  );
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItems.length} items): <strong>${total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        //value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Link to={'/form'}>
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
