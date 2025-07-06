import React from "react";
import PropTypes from "prop-types";

function ProductCart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="product-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name} - ${item.price.toFixed(2)}</h3>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
        <div className="cart-total">
            <h3>
            Total: $
            {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
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