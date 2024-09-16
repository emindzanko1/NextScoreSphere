import { FaRegCalendarAlt } from 'react-icons/fa';
import { formatDate } from '../app/util/helpers';
import classes from './CalendarDatePicker.module.css';
import CalendarDropdown from './CalendarDropdown';

const CalendarDatePicker = ({ currentDate, setCurrentDate, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div className={classes['calendar__datepicker']}>
      <button
        className={classes['calendar__navigation--yesterday']}
        title='The previous day'
        onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)))}
      >
        &lt;
      </button>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={classes['calendar__dropdown']}>
        <FaRegCalendarAlt />
        <span>{formatDate(currentDate)}</span>
        {isDropdownOpen && (
          <CalendarDropdown date={currentDate} setDate={setCurrentDate} setIsDropdownOpen={setIsDropdownOpen} />
        )}
      </button>
      <button
        className={classes['calendar__navigation--tommorow']}
        title='The next day'
        onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))}
      >
        &gt;
      </button>
    </div>
  );
};

export default CalendarDatePicker;
