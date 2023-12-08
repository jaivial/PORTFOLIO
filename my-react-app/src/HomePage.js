import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: 'path/to/your/space-image.jpg',
            amount: 0.3,
          },
        ]}
      >
        <h1>Welcome to Jaime Villanueva's Portfolio</h1>
      </ParallaxBanner>
    </div>
  );
};

export default HomePage;
