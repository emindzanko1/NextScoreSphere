import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import classes from './ResultTablesBody.module.css';
import { formatScore, formatTime } from '../../util/helpers';

const TableBody = ({ favourites, handleFavorite, handleRowClick, matches }) => {
  const rows = matches.map((match, index) => {
    const { utcDate, homeTeam, awayTeam, score } = match;

    return (
      <tr key={index} onClick={() => handleRowClick(match)}>
        <td>
          <button
            onClick={e => {
              e.stopPropagation();
              handleFavorite(index);
            }}
            className={classes['star-btn']}
          >
            {favourites.includes(index) ? <FaStar /> : <CiStar />}
          </button>
        </td>
        <td>{formatTime(utcDate)}</td>
        <td>
          <img src={homeTeam.crest} alt={`${homeTeam.name} Badge`} className={classes.badge} />
        </td>
        <td>{homeTeam.name}</td>
        <td className={classes.result}>{formatScore(score)}</td>
        <td>{awayTeam.name}</td>
        <td>
          <img src={awayTeam.crest} alt={`${awayTeam.name} Badge`} className={classes.badge} />
        </td>
      </tr>
    );
  });

  return (
    <table className={classes['styled-table']}>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TableBody;
