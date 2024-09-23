'use-client';
import { useEffect, useRef, useState } from 'react';
import classes from './Input.module.css';
import SearchOverlay from './Dropdown/SearchOverlay';

const Input = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(data);
  
  const searchWrapperRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearch = event => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);

    const filteredBySearch = data.filter(item => item.name.toLowerCase().includes(text));

    const results = filteredBySearch.filter(item => {
      if (filter === 'all') return true;
      if (filter === 'league') return item.area !== undefined; 
      if (filter === 'team') return item.area === undefined; 
      return true;
    });

    setFilteredItems(results);
  };

  const handleClear = () => {
    setSearchText('');
    setFilteredItems(data);
    searchInputRef.current.focus();
  };

  const handleClickOutside = event => {
    if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
      setSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterChange = newFilter => {
    setFilter(newFilter);

    const filteredBySearch = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

    const results = filteredBySearch.filter(item => {
      if (newFilter === 'all') return true;
      if (newFilter === 'league') return item.area !== undefined; 
      if (newFilter === 'team') return item.area === undefined;
      return true;
    });

    setFilteredItems(results);
  };

  return (
    <div className={classes['search-wrapper']} ref={searchWrapperRef}>
      <input
        type='text'
        className={classes['search-input']}
        placeholder='Search leagues or teams...'
        onFocus={() => setSearch(true)}
        value={searchText}
        onChange={handleSearch}
        ref={searchInputRef}
      />
      {searchText && (
        <button type='button' className={classes['clear-button']} onClick={handleClear}>
          &times;
        </button>
      )}
      {search && (
        <SearchOverlay filter={filter} filteredItems={filteredItems} handleFilterChange={handleFilterChange} />
      )}
    </div>
  );
};

export default Input;
