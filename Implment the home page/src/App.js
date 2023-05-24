import React, { useState } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer/Footer";
import About from "./components/Header/About";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import CartProvider from "./storage/Cart-Provider";
import Home from "./components/Header/Home";

// const router = createBrowserRouter([
//   { path: "/", element: <p>Welcome</p> },
//   { path: "/store", element: <ProductList /> },
//   { path: "/about", element: <About /> },
// ]);

const App = () => {
  const [showcart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showcart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};
export default App;
