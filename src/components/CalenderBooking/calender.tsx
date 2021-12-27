import React, { useState } from 'react';
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// import { SCREENS } from '../responsive';
// const CardContainer = styled.div`
//   min-height: 4.3em;
//   box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
//   ${tw`
//     flex
//     justify-center
//     items-center
//     rounded-md
//     bg-white
//     pt-1
//     pb-1
//     pr-2
//     pl-2
//     md:pt-2
//     md:pb-2
//     md:pl-9
//     md:pr-9
//   `};
// `;

// const ItemContainer = styled.div`
//   ${tw`flex relative`};
// `;

// const Icon = styled.span`
//   ${tw`
//     text-red-500
//       fill-current
//       text-xs
//       md:text-base
//       mr-1
//       md:mr-3
//   `};
// `;

// const SmallIcon = styled.span`
//   ${tw`
//     text-gray-500
//     fill-current
//     text-xs
//     md:text-base
//     ml-1
//   `};
// `;

// const Name = styled.span`
//   ${tw`
//     text-gray-600
//     text-xs
//     md:text-sm
//     cursor-pointer
//     select-none
//   `};
// `;

// const LineSeperator = styled.span`
//   width: 2px;
//   height: 45%;
//   ${tw`
//     bg-gray-300
//     mr-2
//     ml-2
//     md:mr-5
//     md:ml-5
//   `};
// `;

// const DateCalendar = styled(Calendar)`
//   position: absolute;
//   max-width: none;
//   user-select: none;
//   top: 2em;
//   left: 0;
//   ${({ offset }: any) =>
//     offset &&
//     css`
//       left: -6em;
//     `};
//   @media (min-width: ${SCREENS.md}) {
//     top: 3.5em;
//     left: -2em;
//   }
// ` as any;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <div className='CardContainer'>
      <div className='ItemContainer'>
        <span className='Icon'>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </span>
        <span className='Name' onClick={toggleStartDateCalendar}>
          Pick Up Date
        </span>
        <span className='SmallIcon'>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </span>
        {isStartCalendarOpen && (
          <Calendar
            className='DateCalendar'
            value={startDate}
            onChange={setStartDate as any}
          />
        )}
      </div>
      <span className='LineSeperator' />
      <div className='ItemContainer'>
        <span className='Icon'>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </span>
        <span className='Name' onClick={toggleReturnDateCalendar}>
          Return Date
        </span>
        <span className='SmallIcon'>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </span>
        {isReturnCalendarOpen && (
          <Calendar
            className='DateCalendar'
            // offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </div>
      {/* <Marginer direction='horizontal' margin='2em' /> */}
      <Button text='Book Your Ride' />
    </div>
  );
};
export default BookCard;
