import React from 'react';
import './App.css'; 
import './OrderDetails.scss'; 
import { ProceedButton, CancelButton } from './Buttons'; 

function App() {
  return (
    <div className="container">
      <header>
        <img src="./images/illustration-hero.svg" alt="Order Summary" />
      </header>
      <div className="order-details">
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</p>
        <div className="plan-details">
              <img src="./images/icon-music.svg
              " alt="Order Summary" className="plan-icon" />
              <div className="plan-info">
                <h2>Annual Plan</h2>
                <p>$59.99/year</p>
              </div>
              <button className="change-button">Change</button>
              </div>
        <ProceedButton>Proceed to Payment</ProceedButton>
        <CancelButton>Cancel Order</CancelButton>
      </div>
    </div>
  );
}

export default App;

