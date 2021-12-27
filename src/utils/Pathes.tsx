import {
  faHouseUser,
  faServer,
  faAddressBook,
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const navLinks = [
  {
    name: 'Home',
    path: '/',
    Icon: <FontAwesomeIcon icon={faHouseUser} />,
  },
  {
    name: 'Services',
    path: '/services',
    Icon: <FontAwesomeIcon icon={faServer} />,
  },
  {
    name: 'Car',
    path: '/Car',
    Icon: <FontAwesomeIcon icon={faCarSide} />,
  },
  {
    name: 'Contact Us',
    path: '#contact',
    Icon: <FontAwesomeIcon icon={faAddressBook} />,
  },
];
