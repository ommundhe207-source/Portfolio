import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ theme, setTheme, count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Container-fliude">
      <header className="navbar">

        <div className="logo">Om's PF</div>

       
       <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
  <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Project</Link>
  <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
</nav>

        
        <div className="bell-container">🔔
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

        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </header>
    </div>
  );
};

export default Navbar;




{/* git pull origin main --rebase */}