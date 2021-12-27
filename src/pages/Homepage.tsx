import React from 'react';
import Cardslider from '../components/CardsSlider/Cardslider';

import Navbar from '../components/Navbar/Navbar';
import Topsection from '../components/Topsection/Topsection';
import Booksteps from '../components/Booksteps/Booksteps';

import BookCard from '../components/CalenderBooking/calender';
import AboutUs from '../components/aboutus/Aboutus';
import Footer from '../components/footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className='PageContainer'>
        <Topsection />
        <BookCard />
        <Booksteps />
      </div>
      <AboutUs />
      <Cardslider />
      <Footer />
    </div>
  );
};

export default Homepage;
