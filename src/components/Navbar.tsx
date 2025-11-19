import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">View profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
