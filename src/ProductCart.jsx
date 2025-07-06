import React from "react";
import PropTypes from "prop-types";
import "./ProductCart.css";

function ProductCart({ cartItems, onRemoveFromCart, onDecreaseQuantity }) {
  return (
    <div className="product-cart">
      <h2 className="shopping-cart-header">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</h3>
              {item.quantity > 1 && (
                <button onClick={() => onDecreaseQuantity(item.id)}>-1</button>
              )}
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
        <div className="cart-total">
            <h3>
            Total: $
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h3>
        </div>
    </div>
  );
}

ProductCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default ProductCart;