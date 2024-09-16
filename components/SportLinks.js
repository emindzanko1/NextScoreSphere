'use client';
import { useState } from 'react';
import Link from 'next/link';
import classes from './SportLinks.module.css';
import { usePathname } from 'next/navigation';

const SportLinks = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  const handleActive = link => {
    setActiveLink(link);
  };

  return (
    <div className={classes['sports-links']}>
      <Link
        href='/favorites'
        className={pathname === '/favorites' ? classes.active : ''}
        onClick={() => handleActive('favorites')}
      >
        Favorites
      </Link>
      <Link
        href='/'
        className={pathname === '/' ? classes.active : ''}
        onClick={() => handleActive('')}
      >
        Football
      </Link>
    </div>
  );
};

export default SportLinks;
