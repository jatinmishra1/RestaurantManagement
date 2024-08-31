import React from "react";
import "./Header.css"; // Assuming you will write the CSS in a separate file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/0294da9d-a89c-4ece-b82c-92af81b39f09/logo-search-grid-1x?logoTemplateVersion=1&v=638580097769170000&text=BuzzMind"
          alt="Bewakoof Logo"
        />
      </div>
      <nav className="nav-links">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
        <a href="#">MOBILE COVERS</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search by products" />
        <button className="search-icon">🔍</button>
      </div>
      <div className="header-icons">
        <a href="#">LOGIN</a>
        <a href="#">
          <span role="img" aria-label="wishlist">
            ❤️
          </span>
        </a>
        <a href="#">
          <span role="img" aria-label="cart">
            🛒
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
