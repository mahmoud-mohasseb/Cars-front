import React from 'react';
import Image from 'next/image';
import CarLogoImg from '../../../public/car-logo.png';
import CarLogoDarkImg from '../../../public/car-logo-dark.png';

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props;

  return (
    <div className='LogoContainer'>
      <div className='Image'>
        <Image src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg} />
      </div>
      <div className={color === 'dark' ? 'LogoTextwhite' : 'LogoTextdark'}>
        AYO
      </div>
    </div>
  );
};
export default Logo;
