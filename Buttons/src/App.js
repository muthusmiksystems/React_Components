import React, { useState } from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";


function App() {
  return (
    <>
      <div className='row border'>
        <div className='col'><App1 /></div>
        <div className='col'><App2 /></div>
        <div className='col'><App3 /></div>
        <div className='col'><App4 /></div>
        <div className='col'><App5 /></div>
      </div>
      <div className='row border'>
        <div className='col m-3'><App6 /></div>
        <div className='col m-3'><App7 /></div>
        <div className='col m-3'><App8 /></div>
        <div className='col m-3'></div>
        <div className='col m-3'></div>
      </div>
     
    </>
  );
};

function App1() {
  return (
    <div className='container'>
      <div className='but but1'>Hover me</div>
      <div className='but but2'>Hover me</div>
      <div className='but but3'>Hover me</div>
      <div className='but but4'>Hover me</div>
    </div>
  );
};

function App2() {
  return (
    <div>
      <div className="rounded" id="div18"></div>
      <h5 className="px-5 py-3 bg-danger div14 text-white rounded">MAMBER</h5>
    </div>
  );
};

function App3() {
  return (
    <>
      <div className="zoom text-white py-4 text-center">Zoom In</div>
      <div className="zoom1 text-white py-4 text-center">Zoom Out</div>
    </>
  );
};

function App4() {
  return (
    <>
      <div className='row middle'>
        <div className='col btn5 btn6'><h3><FaTelegramPlane /></h3></div>
        <div className='col btn5'><h3><FaFacebookF /></h3></div>
        <div className='col btn5 btn7'><h3><FaTwitter /></h3></div>
        <div className='col btn5 btn8'><h3><FaWhatsapp /></h3></div>
        <div className='col btn5 btn9'><h3><FaYoutube /></h3></div>
      </div>

    </>

  );
};

function App5() {
  return (
    <>
      <div className='container mx-5'>
        <a href='#'>
          <span>Button</span>
        </a>
      </div>

    </>
  );
};


const App6 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className='background p-5'>
        <div className='button'>swipe next<span><BsArrowRight /></span></div>
        <div
          className='button mt-2'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}

        >{isHovered ? 'swipe previous' : 'swipe next'}<span className='span'><BsArrowRight /></span></div>
      </div>
    </>
  );
};



function App7() {
  return (
    <>
      <div className='background p-5 glow'>
        <span>Button<i></i></span>
      </div>
    </>
  );
};


function App8() {
  return (
    <div className='mainbox'>
      <div className='box'>
        <h4>Submit</h4>
      </div>
      <div className='box box2 mt-3'>
        <h4>Submit</h4>
      </div>
    </div>
  );
};



export default App;

