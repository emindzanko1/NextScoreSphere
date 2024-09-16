import { areDatesEqual, getLastAndNext7Days } from '../../util/helpers';
import classes from './CalendarDropdown.module.css';

const dates = getLastAndNext7Days(new Date());

const CalendarDropdown = ({ date, setDate, setIsDropdownOpen }) => {
  const handleDateClick = selectedDate => {
    setDate(selectedDate);
    setIsDropdownOpen(false);
  };

  return (
    <ul className={classes['calendar__dropdown-menu']}>
      {dates.map((dateObj, index) => (
        <li
          key={index}
          onClick={() => handleDateClick(dateObj.date)}
          className={areDatesEqual(date, dateObj.label) ? classes['today-item'] : classes.undefined}
        >
          {dateObj.label}
        </li>
      ))}
    </ul>
  );
};

export default CalendarDropdown;
