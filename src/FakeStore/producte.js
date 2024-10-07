import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  const handleBuyNow = () => {
    addToCart(product, 1); // Add 1 item to cart
    // Optionally navigate to the cart or checkout page
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="button-container">
        {/* <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          min="1"
          className="quantity-input"
        /> */}
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
