'use client';

import { useState } from 'react';
import classes from './Header.module.css';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Input from './Input';

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleToggleSearch = () => {
    setShowSearchInput(prev => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Link href='/'>ScoreSphere</Link>
      </div>
      {showSearchInput && <Input />}
      <NavLinks onToggleSearch={handleToggleSearch} showSearchInput={showSearchInput} />
    </header>
  );
};

export default Header;
