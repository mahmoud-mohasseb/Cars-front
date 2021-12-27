import React from 'react';
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Booksteps = () => {
  return (
    <div className='Container'>
      <h2>Our Working Steps</h2>
      <div className='StepsContainer'>
        <div className='StepContainer'>
          <div className='Step'>
            <span className='StepIcon'>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </span>
          </div>
          <h4 className='StepTitle'>Choose Location</h4>
          <p className='StepDescription'>
            Find the nearest Yourcar point and book your car.
          </p>
        </div>

        {/* step two  */}
        <div className='StepContainer'>
          <div className='Step'>
            <span className='StepIcon'>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
          </div>
          <h4 className='StepTitle'>Pick-Up Date</h4>
          <p className='StepDescription'>
            Pickup the Best Date to rent a car for you.
          </p>
        </div>

        {/* step three */}
        <div className='StepContainer'>
          <div className='Step'>
            <span className='StepIcon'>
              <FontAwesomeIcon icon={faCarSide} />
            </span>
          </div>
          <h4 className='StepTitle'>Book Your Car</h4>
          <p className='StepDescription'>
            Book your nice car with ease in one single click
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booksteps;
