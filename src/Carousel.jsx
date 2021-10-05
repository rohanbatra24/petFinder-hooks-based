import React, { useState } from "react";

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (e) => {
    setActiveIndex(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt="" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            onClick={handleImageClick}
            data-index={index}
            src={image}
            alt=""
            key={image}
            className={index === activeIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}
