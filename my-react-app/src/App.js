import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Introduction from './Introduction';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={Introduction} />
        {/* Add more routes for portfolio, etc. */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
