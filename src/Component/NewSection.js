
import React, { useState } from "react";

function NewSection() {
  const images = [
    "https://m.media-amazon.com/images/I/21rFQtNSQSL.jpg",
    "https://m.media-amazon.com/images/I/21lKyo7hiEL.jpg",
    "https://m.media-amazon.com/images/I/117ocg3LwJL.jpg",
    "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sliding Background */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          width: `${images.length * 20}%`,
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.8s ease-in-out", // Smooth transition
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              flexShrink: 0,
            }}
          ></div>
        ))}
      </div>

      {/* Section Title */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          position: "absolute",
          top: "20px",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* <h1>Hello Hero Section</h1> */}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ❯
      </button>
    </div>
  );
}

export default NewSection;
