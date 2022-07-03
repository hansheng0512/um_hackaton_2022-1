import React, {useState} from "react";
import { Link } from "react-router-dom";


import './css/bootstrap.css';
import './css/responsive.css';
import './css/style.css';

import f1 from './images/f1.png';
import f2 from './images/f2.png';
import f3 from './images/f3.png'
import f4 from './images/f4.png';
import fb from './images/fb.png';
import form from './images/form-img.jpg';
import hero from './images/hero.jpg';
import insta from './images/instagram1.png';
import left from './images/left-black-arrow.png';
import linkedin from './images/linkedin1.png';
import next from './images/next.png';
import pcbanner from './images/pc-banner.png';
import pc from './images/pc.jpg';
import port1 from './images/portfolio-img-1.png';
import port2 from './images/portfolio-img-2.jpg';
import port3 from './images/portfolio-img-3.png';
import port4 from './images/portfolio-img-4.png';
import prev from './images/prev.png';
import right from './images/right-black-arrow.png';
import search from './images/search-icon.png';
import twitter from './images/twitter.png';
import work1 from './images/work1.png';
import work2 from './images/work2.png';
import work3 from './images/work3.png';
import five from './images/apple2.png';
import shit from './images/shit.gif';




function Homeupt() {
   
return (
<div>
<html>
  <head>


    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    


    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
    />


    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />


    <link
      href="https://fonts.googleapis.com/css?family=Poppins|Raleway:400,600|Righteous&display=swap"
      rel="stylesheet"
    />
  
    <link href="css/style.css" rel="stylesheet" />

    <link href="css/responsive.css" rel="stylesheet" />
  </head>

  <body>
    <div class="hero_area">

      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span>
                5 Jamz
              </span>
            </a>

            <div class="navbar-collapse" id="">
              <div
                class="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center mt-3"
              >
               
                <ul class="navbar-nav  mr-5">
                  <li class="nav-item mr-5">
                    <div class="nav-link">
                    <Link to="/mainpage">
                        
                      <span>Login</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

            
            </div>
          </nav>
        </div>
      </header>

      <section class=" slider_section position-relative">
        <div class="container">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="slider_item-box">
                  <div class="slider_item-container">
                    <div class="slider_item-detail">
                      <h1>
                        An Intelligent Way to Predict Your Stocks
                      </h1>
                      <p>
                      Bottoms in the investment world don't end with four-year lows, they end with 10- or 15-year lows.” – By Jim Rogers.
                      </p>
                      <div>
                      <Link to="/chatbot">Chat with our Chatbot !</Link>
                      </div>
                    </div>
                    <div class="slider_item-imgbox">
                      <img src={five} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="slider_item-box">
                  
                </div>
              </div>
            
            </div>
          </div>
        </div>
       
      </section>

    </div>



    <section class="about_section layout_padding">
      <div class="container">
        <h2 class="text-uppercase">
          How it works
        </h2>
      </div>

      <div class="container">
        <div class="about_card-container layout_padding2-top">
          <div class="about_card">
            <div class="about-detail">
              <div class="about_img-container">
                <div class="about_img-box">
                  <img src={work1} alt="" />
                </div>
              </div>
              <div class="card_detail-ox">
                <h4>
                  A
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>
          <div class="about_card">
            <div class="about-detail">
              <div class="about_img-container">
                <div class="about_img-box">
                  <img src={work2} alt="" />
                </div>
              </div>
              <div class="card_detail-ox">
                <h4>
                  B
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>
          <div class="about_card">
            <div class="about-detail">
              <div class="about_img-container">
                <div class="about_img-box">
                  <img src={work3} alt="" />
                </div>
              </div>
              <div class="card_detail-ox">
                <h4>
                 C
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="who_section">
      <div class="container who_container">
        <div class="who_img-box">
          <img src={shit} alt="" />
        </div>
        <div class="who_deail-box">
          <h2>
            What is this platform about ?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodonisi ut aliquip ex ea commodo
          </p>
          <div>
          <Link to="/trading">View Live Market !</Link>
          </div>
        </div>
      </div>
    </section>

    <section class="feature_section layout_padding">
      <div class="container">
        <h2 class="text-uppercase">
          Our Features
        </h2>
      </div>
      <div class="">
        <div class="feature_card-container layout_padding2">
          <div class="feature_card">
            <div class="feature_img-container">
              <div class="feature_img-box">
                <img src={f1} alt="" />
              </div>
            </div>
            <div class="feature_detail-box">
              <h4>
                A
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          <div class="feature_card">
            <div class="feature_img-container">
              <div class="feature_img-box">
                <img src={f2}alt="" />
              </div>
            </div>
            <div class="feature_detail-box">
              <h4>
                B
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          <div class="feature_card">
            <div class="feature_img-container">
              <div class="feature_img-box">
                <img src={f3} alt="" />
              </div>
            </div>
            <div class="feature_detail-box">
              <h4>
                C
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
          <div class="feature_card">
            <div class="feature_img-container">
              <div class="feature_img-box">
                <img src={f4} alt="" />
              </div>
            </div>
            <div class="feature_detail-box">
              <h4>
                D
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  
    <section class="info_section layout_padding">
      <div class="container info_content">
        <div>
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  New software
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Loram ipusm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  The Services
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum dolor
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sit amet, consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing elit,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      sed do eiusmod
                    </a>
                  </li>
                  <li>
                    <a href="">
                      tempor incididunt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  Contact Us
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a href="">
                      dolor sit amet,
                    </a>
                  </li>
                  <li>
                    <a href="">
                      consectetur
                    </a>
                  </li>
                  <li>
                    <a href="">
                      adipiscing
                    </a>
                  </li>
                  <li>
                    <a href="">
                      elit, sed do eiusmod
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline"
        >
          <div class="social-box">
            <a href="">
              <img src={fb} alt="" />
            </a>

            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
          </div>
          <div class="form_container mt-5">
            <form action="">
              <label for="subscribeMail">
                Newsletter
              </label>
              <input
                type="email"
                placeholder="Enter Your email"
                id="subscribeMail"
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  
    <section class="container-fluid footer_section">
      <p>
        &copy; 2019 All Rights Reserved. Design by
        <a href="https://ww.google.com"> Team 5Jamz</a>
      </p>
    </section>
   

   
  </body>
</html>
    </div>

    
    
    
);
};

export default Homeupt;

