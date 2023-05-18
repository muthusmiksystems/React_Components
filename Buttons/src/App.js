import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className='row border'>
      <div className='col'><App1/></div>
      <div className='col'><App2/></div>
      <div className='col'><App3/></div>
      <div className='col'><App4/></div>
    </div>
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
      <div><FaBeer /></div>
    </>
  );
};

export default App;

