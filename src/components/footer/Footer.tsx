import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='InnerContainer'>
        <div className='AboutContainer'>
          <Logo color='white' bgColor='dark' />
          <p>
            AYO is a Car renting and selling company located in many countries
            across the world which has high quality cars and top rated service.
          </p>
        </div>
        <div className='SectionContainer'>
          <h3>Our Links</h3>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Models</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='SectionContainer'>
          <h3>Other Links</h3>
          <ul>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className='SectionContainer'>
          <h3>Call Now</h3>
          <div className='HorizontalContainer'>
            <span className='RedIcon'>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <h6>+91 555-234-8469</h6>
          </div>
        </div>
        <div className='SectionContainer'>
          <h3>Mail</h3>
          <div className='HorizontalContainer'>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h6>info@AYO.com</h6>
          </div>
        </div>
      </div>
      <div className='BottomContainer'>
        <span>
          Copyright &copy; {new Date().getFullYear()} AYO. All rights reserved.
        </span>
      </div>
    </div>
  );
};
export default Footer;
