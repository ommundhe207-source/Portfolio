import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ theme, setTheme, count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Container-fliude">
      <header className="navbar">

        <div className="logo">Om's PF</div>

        {/* 👇 nav links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Project</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* 🔔 bell */}
        <div className="bell-container">🔔
          {count > 0 && (
            <span className="badge">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </div>

        {/* 🌙 theme */}
        <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "☀"}
        </button>

        {/* 📩 button */}
        <Link to="/contact">
          <button className="book-btn">Message</button>
        </Link>

        {/* 🍔 hamburger */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </header>
    </div>
  );
};

export default Navbar;