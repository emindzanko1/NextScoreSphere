// SearchOverlay.js
'use client';
import Link from 'next/link';
import classes from './SearchOverlay.module.css';
import FilterButtons from './FilterButtons';
import Image from 'next/image';

const SearchOverlay = ({ filter, filteredItems, handleFilterChange }) => {
  const myLoader = ({ src }) => {
    return `item.flag`;
  };
  return (
    <div className={classes['search-overlay']}>
      <FilterButtons filter={filter} handleFilterChange={handleFilterChange} />
      <ul className={classes['search-results']}>
        {filteredItems.map(item => (
          <li key={item.id}>
            <Link
              href={item.type === 'league' ? `/league/${item.id}` : `/team/${item.id}`}
              key={item.id}
              className={classes['search-result-item']}
            >
              <Image
                loader={myLoader}
                src={item.flag}
                className={classes['search-result-flag']}
                width={500}
                height={500}
              />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchOverlay;
