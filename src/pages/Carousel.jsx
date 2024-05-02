import React, { useState } from 'react';
// import './Carousel.css'; // Import your carousel styles

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % items.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevSlide}>Prev</button>
      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
