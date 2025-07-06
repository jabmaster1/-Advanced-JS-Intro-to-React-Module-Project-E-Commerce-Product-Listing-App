import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Product List:</h2>
      <ul>
        {products.map(product => (
          <ul class="list-buckets" key={product.id}>
            <h3>{product.name} - ${product.price.toFixed(2)}</h3>
            <p>{product.description}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </ul>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;