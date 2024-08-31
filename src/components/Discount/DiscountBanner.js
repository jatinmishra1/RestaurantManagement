import React from "react";
import "./DiscountBanner.css"; // Assuming you will write the CSS in a separate file

function DiscountBanner() {
  return (
    <div className="discount-banner">
      <div className="discount-details">
        <div className="left-text">
          <span className="bold-text">GET 5% OFF</span>
        </div>
        <div className="right-text">
          <span className="regular-text">
            Instant discount on order above 1299
          </span>
        </div>
      </div>
      <div className="coupon-code">
        <span className="bold-text">500PP</span>
      </div>
    </div>
  );
}

export default DiscountBanner;
