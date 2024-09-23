'use client';

import { useState } from 'react';
import classes from './Header.module.css';
import Link from 'next/link';
import NavLinks from './NavLinks/NavLinks';
import Input from './SearchInput/Input';

const Header = ({ data }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleToggleSearch = () => {
    setShowSearchInput(prev => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Link href='/'>ScoreSphere</Link>
      </div>
      {showSearchInput && <Input data={data} />}
      <NavLinks onToggleSearch={handleToggleSearch} showSearchInput={showSearchInput} />
    </header>
  );
};

export default Header;
