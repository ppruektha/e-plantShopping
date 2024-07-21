
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import CartItem from "./CartItem";

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
 
  const toggleProductList = () => {
    setShowProductList(!showProductList);
  };

  return (
    <div className="App">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Green Oasis</h1>
          <div className="divider"></div>
          <p>Make your home to be Oasis!!</p>
         
          <button className="get-started-button" onClick={toggleProductList}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList/>
      </div>

    </div>
  );
}

export default App;



