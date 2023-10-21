import React, { useState, useEffect } from 'react';
import Discounts from './pages/Discounts'
import Products from './pages/Products';
import Shopping from './pages/Shopping';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/Sample.json");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchDiscounts = async () => {
      try {
        const response = await fetch("/Discount.json");
        const jsonData = await response.json();
        setDiscount(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
    fetchDiscounts();

    const storedCartItems = JSON.parse(window.localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const discountedItem = getDiscounts(item);
  
    // Create a new array of cart items with the new item added
    const updatedCartItems = [
      ...cartItems,
      {
        ...discountedItem,
        id: cartItems.length > 0 ? Math.max(...cartItems.map(item => item.id)) + 1 : 1
      }
    ];
  
    setCartItems(updatedCartItems);
  
    // Update localStorage with the updated cart items
    window.localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  

  const getDiscounts = (product) => {
    const vendorDiscounts = discount.filter(
      (dis) => dis.vendor === product.vendor
    );

    if (vendorDiscounts.length > 0) {
      const firstTag = product.tags[0];
      const discountValue = vendorDiscounts[0][firstTag];

      if (discountValue !== "N/A") {
        product.DiscountPercentage = parseFloat(discountValue);
      } else {
        product.DiscountPercentage = 0;
      }
    }
    let qualprice = (product.price/100) * product.DiscountPercentage;
    let DiscountPrice = product.price - qualprice
    const storedProducts = JSON.parse(window.localStorage.getItem("cartItems")) || [];
    // const newProductId =
    //   storedProducts.length > 0
    //     ? storedProducts[storedProducts.length - 1].id + 1
    //     : 1;

    // product.id = newProductId
    product.DiscountPrice = DiscountPrice;
    storedProducts.push(product);
    window.localStorage.setItem("cartItems", JSON.stringify(storedProducts));

    return product;
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  
  return (
    <div className="App">
      <Discounts />
      <Products
        products={products}
        addToCart={addToCart}
        getDiscounts={getDiscounts}
      />
      <Shopping cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
