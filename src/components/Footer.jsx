import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          src="/video/Black Cyan Modern Minimalist Restaurant and Cafe Logo-2.jpg"
          alt="Logo"
        />
      </div>
      <div className="footer-links">
        <div className="footer-link-items">
          <h2>Company</h2>
          <Link to="/">About Us</Link>
          <Link to="/">The Team</Link>
          <Link to="/">Careers</Link>
        </div>
        <div className="footer-link-items">
          <h2>Support</h2>
          <Link to="/">Contact Us</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Shipping</Link>
        </div>
        <div className="footer-link-items">
          <h2>Legal</h2>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
        </div>
        <div className="footer-link-items">
          <h2>Legal</h2>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
