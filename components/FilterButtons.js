// FilterButtons.js
'use client';
import classes from './FilterButtons.module.css';

const FilterButtons = ({ filter, handleFilterChange }) => {
  return (
    <div className={classes['filter-buttons']}>
      <button onClick={() => handleFilterChange('all')} className={classes[filter === 'all' ? 'active' : '']}>
        All
      </button>
      <button onClick={() => handleFilterChange('league')} className={classes[filter === 'league' ? 'active' : '']}>
        League
      </button>
      <button onClick={() => handleFilterChange('team')} className={classes[filter === 'team' ? 'active' : '']}>
        Team
      </button>
    </div>
  );
};

export default FilterButtons;
