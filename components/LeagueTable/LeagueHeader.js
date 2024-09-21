import classes from './LeagueHeader.module.css';

const LeagueHeader = ({ league }) => {
  return (
    <header className={classes['league-header']}>
      <img src={league.emblem} alt={`${league.name} logo`} />
      <div>
        <h2>{league.name}</h2>
        <p>Season: 2024/2025</p>
      </div>
    </header>
  );
};

export default LeagueHeader;
