import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './search';
import Cart from './carte';
import NavBar from './navbar';
import Article from './article';
import Footer from './footer'; 
import "./App.css"

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart(prev => {
        const existingProduct = prev.find(item => item.id === product.id);
        if (existingProduct) {
          return prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        } else {
          return [...prev, { ...product, quantity }];
        }
      });
    }
  };

  return (
    <div className="app">
      <NavBar />
      <Article />
      <h1>Product List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
