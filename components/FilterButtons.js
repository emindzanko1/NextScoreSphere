'use client';
import { useState } from 'react';
import classes from './FilterButtons.module.css';
import CalendarDatePicker from './CalendarDatePicker';

const FilterButton = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttons = ['All', 'Live', 'Done', 'Schedule'];

  const handleButtonClick = index => {
    setActiveButton(index);
  };

  return (
    <div className={classes['main-controls']}>
      {buttons.map((label, index) => (
        <button
          key={index}
          className={activeButton === index ? classes['active-button'] : classes['button']}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
      {activeButton !== 1 && (
        <CalendarDatePicker
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </div>
  );
};

export default FilterButton;
