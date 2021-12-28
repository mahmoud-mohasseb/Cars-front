import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
//   import { ICar } from "../../../typings/car";
import Button from '../Button/Button';

// extends ICar
interface ICarProps {
  name: string;
  thumbnailSrc: string;
  dailyPrice: number;
  monthlyPrice: number;
  mileage: number;
  gearType: number;
  gas: string;
}

const Car = (props: ICarProps) => {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <div className='CarContainer'>
      <div className='CarThumbnail'>
        <img src={thumbnailSrc} alt='rent car' />
      </div>
      <h3 className='CarName'>{name}</h3>
      <div className='PricesContainer'>
        <h5 className='DailyPrice'>
          ${dailyPrice}
          <p className='SmallText'>/Day</p>
        </h5>
        <h5 className='MonthlyPrice'>
          ${monthlyPrice}
          <p>/Month</p>
        </h5>
      </div>
      <div className='Seperator' />
      <div className='CarDetailsContainer'>
        <span className='CarDetail'>
          <span className='SmallIcon'>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </span>
          <h6 className='CarInfo'>{mileage}</h6>
        </span>
        <span className='CarDetail'>
          <span className='SmallIcon'>
            <FontAwesomeIcon icon={faEllipsisH} />
          </span>
          <h6 className='CarInfo'>{gearType}</h6>
        </span>
        <span className='CarDetail'>
          <span className='SmallIcon'>
            <FontAwesomeIcon icon={faFillDrip} />
          </span>
          <h6 className='CarInfo'>{gas}</h6>
        </span>
      </div>
      <Button className='RentButton' text='Rent Now' />
    </div>
  );
};
export default Car;
