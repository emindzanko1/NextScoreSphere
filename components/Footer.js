import classes from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <small>&copy; {currentYear} Emin. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
