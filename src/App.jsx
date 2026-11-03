
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import About from "./components/About";
import Footer from "./components/Footer";

import products from "./products";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, change) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app" id="home">
      <Navbar />
      <Hero />
      <Benefits />

      <ProductList
        products={products}
        onAddToCart={addToCart}
      />

      <Cart
        cart={cart}
        onUpdateQuantity={updateQuantity}
      />

      <About />
      <Footer />
    </div>
  );
}

export default App;
