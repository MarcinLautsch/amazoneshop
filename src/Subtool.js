import React from 'react';
import './Subtool.css';
import CurrencyFormat from 'react-currency-format';

export default function Subtool() {
  return (
    <div className="subtool">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input className="order" type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button className="przyciskCheckout">Proceed to Checkout</button>
    </div>
  );
}
