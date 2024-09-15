import { MdSearch, MdOutlineSearchOff, MdLogout } from 'react-icons/md';
import { FaRegUser, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import classes from './NavLinks.module.css';

const NavLinks = ({ onToggleSearch, showSearchInput }) => {
  return (
    <nav className={classes['nav-links']}>
      <button onClick={onToggleSearch} className={classes['search-button']}>
        {showSearchInput ? <MdOutlineSearchOff /> : <MdSearch />}
      </button>
      <Link href='/auth'>
        <FaUser />
      </Link>
    </nav>
  );
};

export default NavLinks;

{
  /* <Link href='/auth'>{({ isActive }) => (isActive ? <FaUser /> : <FaRegUser />)}</Link> */
}

{
  /* {!token && <NavLink to='/auth'>{({ isActive }) => (isActive ? <FaUser /> : <FaRegUser />)}</NavLink>} */
}

{
  /* {token && (
        <Form action='/logout' method='post'>
          <button>
            <MdLogout />
          </button>
        </Form>
      )} */
}

{
  /* <div className='theme-switch-wrapper'>
        <ThemeSwitch />
      </div> */
}
