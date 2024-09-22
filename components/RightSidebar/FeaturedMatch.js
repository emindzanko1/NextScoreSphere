import Image from 'next/image';
import classes from './FeaturedMatch.module.css';

const FeaturedMatch = ({ match }) => {
  const myMatch = {
    area: {
      id: 2072,
      name: 'England',
      code: 'ENG',
      flag: 'https://crests.football-data.org/770.svg',
    },
    competition: {
      id: 2021,
      name: 'Premier League',
      code: 'PL',
      type: 'LEAGUE',
      emblem: 'https://crests.football-data.org/PL.png',
    },
    season: {
      id: 2287,
      startDate: '2024-08-16',
      endDate: '2025-05-25',
      currentMatchday: 4,
      winner: null,
    },
    id: 497410,
    utcDate: '2024-08-16T19:00:00Z',
    status: 'FINISHED',
    matchday: 1,
    stage: 'REGULAR_SEASON',
    group: null,
    lastUpdated: '2024-09-12T00:20:51Z',
    homeTeam: {
      id: 66,
      name: 'Manchester City FC',
      shortName: 'Man City',
      tla: 'MCFC',
      crest: 'https://crests.football-data.org/65.png',
      teamColors: {
        primary: '#89CFF0',
        secondary: '#89CFF0',
        text: '#ffffff',
      },
    },
    awayTeam: {
      id: 63,
      name: 'Brighton & Hove Albion FC',
      shortName: 'Brighton Hove',
      tla: 'BHA',
      crest: 'https://crests.football-data.org/397.png',
      teamColors: {
        primary: '#374df5',
        secondary: '#374df5',
        text: '#ffffff',
      },
    },
    score: {
      winner: 'HOME_TEAM',
      duration: 'REGULAR',
      fullTime: {
        home: 1,
        away: 0,
      },
      halfTime: {
        home: 0,
        away: 0,
      },
    },
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    referees: [
      {
        id: 11446,
        name: 'Robert Jones',
        type: 'REFEREE',
        nationality: 'England',
      },
    ],
  };

  const { homeTeam, awayTeam, matchTime, odds } = myMatch;

  const matchStyle = {
    '--home-team-color': homeTeam.teamColors.primary,
    '--away-team-color': awayTeam.teamColors.primary,
  };

  return (
    <div className={classes['featured-match']} style={matchStyle}>
      <div className={classes['header']}>
        <span className={classes.title}>Featured Match</span>
      </div>
      <a href={`/football/match/${homeTeam.name}-${awayTeam.name}`} className={classes['match-link']}>
        <div className={classes['match-info']}>
          <div className={classes['team home-team']}>
            <Image src={homeTeam.crest} alt={homeTeam.name} className={classes['team-logo']} width={20} height={20} />
            <div className={classes['team-name']}>{homeTeam.name}</div>
          </div>
          <div className={classes['match-details']}>
            <span className={classes['match-time']}>{myMatch.matchTime}</span>
            <span className={classes['match-status']}>Today</span>
          </div>
          <div className={classes['team away-team']}>
            <Image src={awayTeam.crest} alt={awayTeam.name} className={classes['team-logo']} width={20} height={20} />
            <div className={classes['team-name']}>{awayTeam.name}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedMatch;
