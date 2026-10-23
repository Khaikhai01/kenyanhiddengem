import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Hidden Kenya Stays home">
        <span className="brand-mark">⌂</span>
        <span>
          <strong>Hidden Kenya</strong>
          <em>Stays</em>
        </span>
      </a>

      <button 
        className="mobile-menu" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#explore">Explore</a>
        <a href="#list">List Your Property</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </nav>

      <Link to="/auth" className="login-button">
        Login / Sign Up
      </Link>
    </header>
  );
}
