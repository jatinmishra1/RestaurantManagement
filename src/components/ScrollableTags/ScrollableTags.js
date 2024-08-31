import React from "react";
import Tag from "../Tag/Tag"; // Import the Tag component
import "./ScrollableTags.css"; // Assuming you will write the CSS in a separate file

function ScrollableTags() {
  const tags = [
    "Men",
    "Women",
    "Accessories",
    "Sneakers",
    "Savings Zone",
    "Bwkf x Google",
    "Bewakoof Air",
    "Heavy Duty",
    "Customization",
    "Official Merch",
    "Plus Size",
  ];

  return (
    <div className="scrollable-tags">
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
}

export default ScrollableTags;
