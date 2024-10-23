import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Home.css';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [home1, home2, home3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + images.length - 1) % images.length);
  };

  return (
    <div>
      <a href="#mainContent" className="skip-link">Skip to main content</a>  
      <section className="carousel-container">
        <div className="carousel">
          <Button onClick={prevImage} visual="button" className="button carousel-prev">&lt;</Button>
          <img src={images[currentImageIndex]} alt="Display" className="carousel-image" />
          <Button onClick={nextImage} visual="button" className="button carousel-next">&gt;</Button>
        </div>
      </section>
      <div id="mainContent" className='hometext'>  
        <p>
          Cats, our beloved furry companions, have been cherished by humans for centuries. With their mysterious aura and independent nature, cats have captivated our hearts and homes.
          Our website is dedicated to celebrating the diversity and beauty of these majestic creatures. From the elegant Siamese to the playful tabby, each cat breed brings its own unique charm and personality.
        </p>
        <p>
          Whether you're a seasoned cat lover or considering adding a feline friend to your family, our platform offers a wealth of information about cat breeds, their temperaments, and tips for responsible pet ownership.
          Explore our pages to learn more about different cat breeds, their characteristics, and find your purr-fect match for adoption. Join us in spreading love and appreciation for these enchanting companions!
        </p>
      </div>
    </div>
  );
}

export default Home;
