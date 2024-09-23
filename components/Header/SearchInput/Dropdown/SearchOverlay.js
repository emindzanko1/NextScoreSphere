// SearchOverlay.js
import Link from 'next/link';
import classes from './SearchOverlay.module.css';
import FilterButtons from './FilterButtons';
import Image from 'next/image';

const SearchOverlay = ({ filter, filteredItems, handleFilterChange }) => {
  return (
    <div className={classes['search-overlay']}>
      <FilterButtons filter={filter} handleFilterChange={handleFilterChange} />
      <ul className={classes['search-results']}>
        {filteredItems.map(item => (
          <li key={item.id}>
            <Link
              href={item.area !== undefined ? `/league/${item.id}` : `/team/${item.id}`}
              key={item.id}
              className={classes['search-result-item']}
            >
              <Image
                // src={item.flag}
                src={item.crest}
                className={classes['search-result-flag']}
                width={20}
                height={20}
                alt={`${item.name} logo`}
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
