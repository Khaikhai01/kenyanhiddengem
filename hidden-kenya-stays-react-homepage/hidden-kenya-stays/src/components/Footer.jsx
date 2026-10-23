import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-mark">⌂</div>
          <div>
            <strong>Hidden Kenya</strong>
            <em>Stays</em>
          </div>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#list">List Property</a>
        </div>
        <p className="copyright">© 2026 Hidden Kenya Stays. All rights reserved.</p>
        <p className="tagline">Affordable places. Authentic Kenya. Hidden gems.</p>
      </div>
    </footer>
  );
}
