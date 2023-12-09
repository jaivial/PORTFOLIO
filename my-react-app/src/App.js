// Import necessary libraries
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from './components/HomePage';

// App component
function App() {
  return (
    <ParallaxProvider>
      <HomePage />
    </ParallaxProvider>
  );
}

export default App;
