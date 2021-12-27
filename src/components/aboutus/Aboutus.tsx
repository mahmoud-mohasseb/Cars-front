import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='AboutUsContainer'>
      {/* // <div className='flex bg-red-300'> */}
      <div className='CarContainerAboutyou'>
        <Image src='/jeep.png' width={450} height={450} />
      </div>
      <div className='InfoContainer'>
        <h1 className='Title'>
          Feel The Best Experience With Our Rental Deals
        </h1>
        <p className='InfoText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
