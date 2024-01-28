import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/navigation";
import Products from "./pages/products";
import Cart from "./pages/cart";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
