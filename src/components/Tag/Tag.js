import React from "react";
import "./Tag.css"; // Assuming you will write the CSS in a separate file

function Tag({ label }) {
  return <div className="tag">{label}</div>;
}

export default Tag;
