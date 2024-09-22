'use client';
import { useState } from 'react';
import classes from './FilterButtons.module.css';
import CalendarDatePicker from './CalendarDatePicker';

const FilterButton = ({ setFetchedData }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const buttons = ['All', 'Live', 'Done', 'Schedule'];

  const fetchJsonData = async index => {
    try {
      const response = await fetch(`/api?index=${index}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleButtonClick = index => {
    setActiveButton(index);
    fetchJsonData(index);
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
