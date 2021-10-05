import React, { useState } from "react";

export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt="" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            onClick={() => setActiveIndex(index)}
            src={image}
            alt=""
            key={image}
          />
        ))}
      </div>
    </div>
  );
}
