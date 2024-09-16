'use client';
import { CiStar } from 'react-icons/ci';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import classes from './ResultTablesHeader.module.css';

const TableHeader = ({
  leagueName,
  leagueEmblem,
  areaName,
  allStarsActive,
  handleMainStarClick,
  isExpanded,
  toggleChevron,
}) => {
  return (
    <div className={classes['league-info']}>
      <button onClick={handleMainStarClick} className={classes['star-btn']}>
        {allStarsActive ? <FaStar /> : <CiStar />}
      </button>
      <img src={leagueEmblem} alt={`${leagueName} Badge`} className={classes['league_badge']} />
      <div className={classes['club-text']}>
        <span className={classes.title}>{leagueName}</span>
        <span className={classes.subTitle}>{areaName}</span>
      </div>
      <div className={classes['chevron-icons']} onClick={toggleChevron}>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        <span className={classes['tooltip']}>
          {isExpanded ? 'Hide all matches of this competition!' : 'Show all matches of this competition!'}
        </span>
      </div>
    </div>
  );
};

export default TableHeader;
