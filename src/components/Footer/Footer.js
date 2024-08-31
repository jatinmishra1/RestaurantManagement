import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <h1>BrandLogo</h1>
          <p>Discover your style with us.</p>
        </div>
        <div className="footer-section footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/returns">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-support">
          <h2>Customer Support</h2>
          <ul>
            <li>
              <a href="/shipping">Shipping Info</a>
            </li>
            <li>
              <a href="/track-order">Track Order</a>
            </li>
            <li>
              <a href="/size-guide">Size Guide</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-social">
          <h2>Follow Us</h2>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="footer-section footer-newsletter">
          <h2>Newsletter Signup</h2>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section footer-contact">
          <h2>Contact Us</h2>
          <p>Email: support@brandname.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
