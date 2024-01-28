import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  return (
    <>
      <nav className="container mx-auto  flex justify-between items-center py-4 gap-6">
        <Link to="/">
          <img src="/images/logo.png" alt="" style={{ height: 45 }} />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Product</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span className="text-white">10</span>
                <img className="ml-2" src="/images/cart.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
