/*import React from 'react';
//import '../App.css';
//import { Button } from './Button';
import '../../css/home/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>HELLO AGAIN SRI LANKA</h1>
      <h2>Join with us & find your unique Sri Lankan Travel Experience</h2>
    </div>
  );
}

export default HeroSection;*/

import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import '../../css/home/HeroSection.css';

function HeroSection(){
  return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="CarouselImages/ca12.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>HELLO AGAIN SRI LANKA</h1>
      <p>Join with us & find your unique Sri Lankan Travel Experience</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="CarouselImages/ca9.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>HELLO AGAIN SRI LANKA</h1>
      <p>If you are guide,hotel owner or transport owner,then join with us to develop your business</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="CarouselImages/ca4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>HELLO AGAIN SRI LANKA</h1>
      <p>Join with us,We provide our best service to you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default HeroSection;