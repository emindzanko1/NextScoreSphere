'use client';
import { useEffect, useState } from 'react';
import classes from './ScrollToTop.module.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className={classes['scroll-to-top']} onClick={scrollToTop}>
        <span>&uarr;</span>
      </button>
    )
  );
};

export default ScrollToTopButton;
