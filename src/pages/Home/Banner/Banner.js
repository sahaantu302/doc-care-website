import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
   return (
      <>
         <Carousel >
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100 mt-5"
                  src={banner1}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>We Have Best Medical Facilities For You</h3>
                  <p>A health system, also sometimes referred to as a health care system, is the organization of people, institutions, and resources that deliver health care services to meet the health needs of target populations.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <img
                  className="d-block w-100 mt-5"
                  src={banner2}
                  alt="Second slide"
               />
               <Carousel.Caption>
                  <h3>We Have Best Medical Facilities For You</h3>
                  <p>A health system, also sometimes referred to as a health care system, is the organization of people, institutions, and resources that deliver health care services to meet the health needs of target populations.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 mt-5"
                  src={banner3}
                  alt="Third slide"
               />
               <Carousel.Caption>
                  <h3>We Have Best Medical Facilities For You</h3>
                  <p>A health system, also sometimes referred to as a health care system, is the organization of people, institutions, and resources that deliver health care services to meet the health needs of target populations.</p>
               </Carousel.Caption>
            </Carousel.Item>
            </Carousel>   
      </>
   );
};

export default Banner;