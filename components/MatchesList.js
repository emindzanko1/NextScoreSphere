import { formatMatchDate } from '../util/helpers';
import classes from './LeagueTable/LeagueTableBody.module.css';

const MatchesList = ({ matches, type }) => {
  let lastMatchday = null;

  return (
    <ul>
      {matches.map((match, index) => {
        const isNewMatchday = match.matchday !== lastMatchday;
        lastMatchday = match.matchday;

        return (
          <div key={index}>
            {isNewMatchday && (
              <li className={classes['matchday-header']}>
                <h4>Matchday {match.matchday}</h4>
              </li>
            )}
            {type === 'schedule' ? (
              <li>
                {formatMatchDate(match.utcDate)} {match.homeTeam.name} - : - {match.awayTeam.name}
              </li>
            ) : (
              <li>
                {formatMatchDate(match.utcDate)} {match.homeTeam.name} {match.score.fullTime.home} -{' '}
                {match.score.fullTime.away} {match.awayTeam.name}
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default MatchesList;
