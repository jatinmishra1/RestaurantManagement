import React, { useState } from "react";
import "./Slider.css";

function HorizontalImageSlider({ componentWidth, imagesArray }) {
  const images = imagesArray;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-wrapper">
      <button className="slider-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {images.map((image, index) => (
            <>
              <div key={index} className="slider-item">
                <img
                  style={{ height: componentWidth }}
                  src={images[(index + currentIndex) % images.length]} // Ensuring index is within bounds
                  alt={`Outfit ${index + 1}`}
                  className="slider-image"
                />
              </div>
              <div key={index} className="slider-item">
                <img
                  style={{ height: componentWidth }}
                  src={images[(index + currentIndex + 1) % images.length]} // Ensuring index is within bounds
                  alt={`Outfit ${index + 1}`}
                  className="slider-image"
                />
              </div>
              <div key={index} className="slider-item">
                <img
                  style={{ height: componentWidth }}
                  src={images[(index + currentIndex + 2) % images.length]} // Ensuring index is within bounds
                  alt={`Outfit ${index + 1}`}
                  className="slider-image"
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <button className="slider-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default HorizontalImageSlider;
