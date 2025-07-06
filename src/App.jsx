import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductCart from './ProductCart';

function App() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999.99, description: 'A high-performance laptop.' },
    { id: 2, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones.' },
    { id: 3, name: 'Smartphone', price: 799.99, description: 'Latest model smartphone.' },
    { id: 4, name: 'Smartwatch', price: 299.99, description: 'Feature-rich smartwatch.' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the E-commerce App</h1>
        <p>This is a simple e-commerce application built with React.</p>
      </header>
      <main>
        <div className="product-list-container">
          <ProductList products={products} onAddToCart={addToCart} />
        </div>
        <div className="product-cart-container">
          <ProductCart cartItems={cartItems} onRemoveFromCart={removeFromCart} onDecreaseQuantity={decreaseQuantity} />
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 E-commerce App</p>
      </footer>
    </div>
  );
}

export default App;