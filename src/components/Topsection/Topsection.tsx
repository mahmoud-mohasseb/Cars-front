import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Topsection = () => {
  return (
    <div className='topcontainer'>
      <div className='LeftContainer'>
        <h1 className='slogan'>Rent The Best Qulity Cars With Us</h1>
        <p className='description'>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </p>

        <div className='ButtonsContainer'>
          <Button className='Basebutton' text='Book Your Ride' />
          <Button className='Basebutton' theme='filled' text='Sell Your Car' />
        </div>
      </div>
      <div className='RightContainer'>
        <div className='BlobContainer'>
          <Image src='/blob.svg' alt='car' layout='fill' />
        </div>
        <div className='Mclaren'>
          <Image src='/porche.png' alt='car' layout='fill' />
        </div>
      </div>
    </div>
  );
};

export default Topsection;
