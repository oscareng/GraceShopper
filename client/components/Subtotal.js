import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../store/cartReducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Subtotal() {
  // const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            {/* <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small> */}
          </>
        )}
        decimalScale={2}
        //value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Link to={"/confirmation"}>
        <button>Confirm Purchase</button>
      </Link>
    </div>
  );
}

export default Subtotal;
