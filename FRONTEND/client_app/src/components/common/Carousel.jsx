
import { useState } from "react";

const Carousel = () => {

  const images = [
    'https://c8.alamy.com/comp/2K2EY85/inspiration-showing-sign-register-now-internet-concept-name-in-an-official-list-enlist-to-be-a-member-sign-up-creating-new-online-cookbook-typing-and-sharing-cooking-recipes-2K2EY85.jpg',
    'https://png.pngtree.com/background/20250212/original/pngtree-stack-of-different-books-on-dark-background-knowledge-concept-picture-image_15568922.jpg',
    'https://www.imd.org/ibyimd/wp-content/uploads/2023/10/pexels-ricky-esquivel-1926988-scaled-e1696493912226-1440x1011.jpg',
    'https://adda.io/blog/wp-content/uploads/2024/03/Water-Crisis-1.jpg',
    'https://images.squarespace-cdn.com/content/v1/64584bc76837b03c7276da1e/1684209823129-OUL2LJ713QR63JFP2N8K/image-asset.jpeg'
  ];

  // Set the initial image index to 0 (first image)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <>
    <div className="relative  w-8xl  mx-auto overflow-hidden">
      {/* Carousel Image */}
      <div className="w-8xl h-64 sm:h-80 md:h-96 bg-gray-200">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        &#10095;
      </button>

      {/* Optional: Display image index (e.g., 1 of 4) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
    </>
  )
}

export default Carousel
