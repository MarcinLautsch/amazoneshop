import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="CheckoutProduct__image" src={image} />

      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price"></p>
        <strong>$ </strong>
        <strong>{price}</strong>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="remove__basket">Remove form Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
