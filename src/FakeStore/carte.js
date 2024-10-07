import React from 'react';

let Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} (x{item.quantity}) - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
