import React, { useState } from "react";
import "../../styles/slideshowStyle.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />

      <div className="arrows">
        <FaArrowLeft onClick={prevSlide} className="arrow-left" />
        <FaArrowRight onClick={nextSlide} className="arrow-right" />
      </div>
    </div>
  );
};

export default Slideshow;
