import React from 'react';
import './Checkout.css';
import Subtool from './Subtool';

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="podstronaKoszyk"></img>
        <div>
          <h2 className="checkout__title">
            {/*Basket zawartosc*/}
            Your Shopping Basket
          </h2>

          {/*BasketItems*/}
          {/*BasketItems*/}
          {/*BasketItems*/}
          {/*BasketItems*/}
          {/*BasketItems*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtool />
        {/*Subtool component*/}
        {/* <h2>Subtool will go here</h2> */}
      </div>
    </div>
  );
}
