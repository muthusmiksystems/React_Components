import React from "react";
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from "./image/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import about from "./image/about.svg";

//Note:react routing from one to anoyher by href
const App = () => {
  return (
    <>
      <Nav />
      <Home id="home"/>
      <Help />
      <Footer id="footer"/>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} className="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About&nbsp;Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
              </li>
              <li className="nav-item login">
                <a className="nav-link" href="#">
                  <div><FaUserCircle className="icon" />&nbsp;Login</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="homeimg border border-bottom-0">
        <h4>AMBITION IS THE FIRST STEP TOWARDS</h4>
        <h1>SUCCESS</h1>
        <p>Now Available for Online Coaching</p>
      </div>
      <div>
        <About id="about"/>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="row container-fluid ">
        <div className="col bg-white about">
          <hr className="mt-5 hr" />
          <h1 className="mt-2">ABOUT<br />US</h1>
          <p className="mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
          <p className="mt-4">This is a great space to write long text about your company and your services.I'm a paragraph. Click here to add your own text and edit me. It’s easy.  You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
          <div className="btn bg-dark text-light mt-4 Submitbtn">Submit</div>
        </div>
        <div className="col container">
          <img src={about} className="aboutimg" />
        </div>
      </div>
    </>
  );
};

const Help = () => {
  return (
    <>
      <div className="help border-top border-white container-fluid p-0 m-0">
        <div className="helptext">
          <hr className="hr" />
          <h1>How I Can<br /> Help You</h1>
        </div>
        <div className="row m-0 p-0">
          <div className="col helpbox">
            <h2 className="mt-4">ONLINE<br />COACHING</h2>
            <p className="my-4">Use this area to describe one of<br />your services.</p>
            <hr className="helpboxhr mb-4" />
            <p>1 hr</p>
            <p>&#x20b9; 70</p>
            <div className="btn bg-black text-light px-5 btn1">Book It</div>
          </div>
          <div className="col helpbox1">
            <h2 className="mt-4">COUPLE'S<br />GUIDANCE</h2>
            <p className="my-4">Use this area to describe one of<br />your services.</p>
            <hr className="helpboxhr mb-4" />
            <p>1 hr 30 min</p>
            <p>&#x20b9; 120</p>
            <div className="btn bg-black text-light px-5 btn1">Book It</div>
          </div>
          <div className="col helpbox ">
            <h2 className="mt-4">SELF-<br />IMPROVEMENT<br />WORKSHOP</h2>
            <p className="my-4">Use this area to describe one of<br />your services.</p>
            <hr className="helpboxhr mb-4" />
            <p>Mon, Tue, Wed, Thu, Fri</p>
            <p>1 hr</p>
            <p>&#x20b9; 90</p>
            <div className="btn bg-black text-light px-5">Book It</div>
          </div>
        </div>
        <div className="btn services">More services</div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footerbg container-fluid">
        <div className="row container p-0 m-0">
          <div className="col">
            <form className="mt-5">
              <label>Enter Your Name</label>
              <input type="text" className="form-control" />
              <label>Enter Your Email *</label>
              <input type="text" className="form-control" />
              <label>Enter Your Subject</label>
              <input type="text" className="form-control" />
              <label>Message</label>
              <textarea rows="6" cols="30" className="form-control"></textarea>
              <button className="btn bg-black text-white my-5 subbtn">Submit</button>
            </form>
          </div>
          <div className="col footercoltwo">
            <hr className="hr" />
            <h2>CONTACT</h2>
            <p className="mt-4">500 Terry Francine Street,<br />San Francisco, CA 94158</p>
            <p className="mt-4 mb-0">Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
            <p className="mt-4">info@mysite.com</p>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col footericon"><FaFacebookF /></div>
                  <div className="col footericon"><FaTelegramPlane /></div>
                  <div className="col footericon"><FaTwitter /></div>
                  <div className="col footericon"><FaWhatsapp /></div>
                </div>
              </div>
              <div className="col"></div>
            </div>
            <p className="mb-5">© 2035 by Personal Life Coach. <br />Powered and secured by Wix</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
