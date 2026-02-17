import React, { useState, useEffect } from 'react'

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/Image/blogpic1.jpeg',
    '/Image/blogpic2.jpg',
    '/Image/blogpic3.jpg',
    '/Image/IMG-20260124-WA0002.jpg',
    '/Image/IMG-20260124-WA0003.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-8 bg-white">
      <div className="w-full px-4">
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] max-h-[800px] overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 font-bold py-3 px-4 rounded-full transition-all z-10"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 font-bold py-3 px-4 rounded-full transition-all z-10"
          >
            ›
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-white bg-opacity-60 hover:bg-opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
