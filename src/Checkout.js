import React from 'react';
import './Checkout.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Subtool from './Subtool';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}></CheckoutProduct>
          ))}
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

export default Checkout;
