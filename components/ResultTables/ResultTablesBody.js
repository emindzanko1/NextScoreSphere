import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import classes from './ResultTablesBody.module.css';
import { formatScore, formatTime, timestampToTime } from '../../util/helpers';

const TableBody = ({ image, favourites, handleFavorite, handleRowClick, matches }) => {
  const rows = matches.map((match, index) => {
    const { homeTeam, awayTeam, homeScore, awayScore } = match;
    const date = timestampToTime(match.startTimestamp);
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
        <td>{date}</td>
        <td>
        {/* <img src={image} alt={`${homeTeam.name} Badge`} className={classes.badge} /> */}
          <img src={homeTeam.crest} alt={`${homeTeam.name} Badge`} className={classes.badge} />
        </td>
        <td>{homeTeam.name}</td>
        {/* <td className={classes.result}>{formatScore(score)}</td> */}
        <td className={classes.result}>
          {/* {homeScore.current} : {awayScore.current} */}
          0 : 0
        </td>
        <td>{awayTeam.name}</td>
        <td>
        <img src={awayTeam.crest} alt={`${awayTeam.name} Badge`} className={classes.badge} />
          {/* <img src={image} alt={`${awayTeam.name} Badge`} className={classes.badge} /> */}
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
