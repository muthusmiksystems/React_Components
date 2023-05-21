import React, { useState } from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <div className='row border'>
        <div className='col'><App1 /></div>
      
      </div>
    </>
  );
};

function App1() {
  return (
    <>
      <div className='threedbox'>
        <ul>
          <li className="--i:5;"><h5>Home</h5></li>
          <li className="--i:4;"><h5>About</h5></li>
          <li className="--i:3;"><h5>Services</h5></li>
          <li className="--i:2;"><h5>Portfolio</h5></li>
          <li className="--i:1;"><h5>Contact</h5></li>
        </ul>
      </div>
    </>
  );
};

export default App;