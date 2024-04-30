import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <button onClick={goToPrevSlide}>Previous</button>
            <img width={'200px'} height={'200px'} src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
