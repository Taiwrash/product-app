import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <nav>
          <Link className="logo">Pro App</Link>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
