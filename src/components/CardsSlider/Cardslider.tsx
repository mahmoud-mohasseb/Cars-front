import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CARS } from '../../../services/queries';
// import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Car from '../car/Car';

interface ICar {
  thumbnailSrc: string;
  name: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Cardslider = () => {
  const TestCar = [
    {
      name: 'Audi S3 Car',
      mileage: '10k',
      thumbnailSrc: '/jeep.png',
      dailyPrice: 70,
      monthlyPrice: 1600,
      gearType: 'Auto',
      gas: 'Petrol',
    },
    {
      name: 'HONDA cITY 5 Seater Car',
      mileage: '20k',
      thumbnailSrc: '/mclaren-orange.png',
      dailyPrice: 50,
      monthlyPrice: 1500,
      gearType: 'Auto',
      gas: 'Petrol',
    },
  ];

  // const { loading, error, data } = useQuery(GET_CARS);
  // if (loading) return null;
  // if (error) return `Error! ${error}`;
  return (
    <div>
      <Carousel responsive={responsive} swipeable={true} draggable={false}>
        {TestCar.map((car: any, index: any) => (
          <Car
            key={index}
            name={car.name}
            thumbnailSrc={car.thumbnailSrc}
            dailyPrice={car.dailyPrice}
            monthlyPrice={car.monthlyPrice}
            mileage={car.mileage}
            gearType={car.gearType}
            gas={car.gas}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Cardslider;
