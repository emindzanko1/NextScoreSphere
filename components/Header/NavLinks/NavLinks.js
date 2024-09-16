import { MdSearch, MdOutlineSearchOff, MdLogout } from 'react-icons/md';
import { FaRegUser, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import classes from './NavLinks.module.css';
import ThemeSwitch from './ThemeSwitch';
import { usePathname } from 'next/navigation';

const NavLinks = ({ onToggleSearch, showSearchInput }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === '/auth';

  return (
    <nav className={classes['nav-links']}>
      <button onClick={onToggleSearch} className={classes['search-button']}>
        {showSearchInput ? <MdOutlineSearchOff /> : <MdSearch />}
      </button>
      <Link href='/auth'>{isAuthPage ? <FaUser /> : <FaRegUser />}</Link>
      <div className={classes['theme-switch-wrapper']}>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavLinks;
