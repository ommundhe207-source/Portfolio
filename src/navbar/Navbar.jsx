import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ theme, setTheme, count }) => {
  return (
    <div className="Container-fliude">
      <header className="navbar">

        {/* Logo */}
        <div className="logo">Om's</div>

        {/* Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Project</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* 🔔 BGMI STYLE NOTIFICATION BELL */}
        <div className="bell-container">
          🔔
          {count > 0 && (
            <span className="badge">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </div>

       
        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>

       
        <Link to="/contact">
          <button className="book-btn">Message</button>
        </Link>

      </header>
    </div>
  );
};

export default Navbar;