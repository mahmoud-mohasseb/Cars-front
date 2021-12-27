import React, { useState } from 'react';
import { navLinks } from '../../utils/Pathes';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [toogler, settoogler] = useState(false);
  const Toogle = () => settoogler(true);

  return (
    <header>
      <nav
        className='
      flex
      w-full
      max-w-screen-2xl
      flex-row
      items-center
      lg:pl-12
      lg:pr-12
      justify-between
      '>
        <div className='flex items-center flex-shrink-0 text-black mr-6'>
          <Image src='/car-logo.png' alt='car' width='20' height='20' />
          <span className='font-semibold text-xl tracking-tight'>AYO.</span>
        </div>
        {/* menu */}
        {/* tabbar */}
        <div className={styles.tabbar}>
          {navLinks.map((link, index) => {
            return (
              <div key={index} className='text-sm lg:flex cursor-pointer'>
                <ul className='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red-300 mr-4'>
                  <Link href={link.path}>
                    <a>
                      <li className='icon' key={index}>
                        {link.Icon}
                      </li>
                      <li key={index}>{link.name}</li>
                    </a>
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
        {/* navbar */}
        <div className={styles.Navbar}>
          {navLinks.map((link, index) => {
            return (
              <div key={index} className='text-sm lg:flex cursor-pointer'>
                <ul className='block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-red-300 mr-4'>
                  <Link href={link.path}>
                    <a>
                      <li key={index}>{link.name}</li>
                    </a>
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
