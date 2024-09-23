import Image from 'next/image';
import classes from './LeagueTableBody.module.css';

const TableBody = ({ standings }) => {
  return (
    <tbody>
      {standings.map(team => (
        <tr key={team.position}>
          <td>{team.position}</td>
          <td className={classes['team-info']}>
            <Image
              src={team.team.crest}
              alt={`${team.team.name} crest`}
              className={classes['team-crest']}
              width={20}
              height={20}
            />
            {team.team.name}
          </td>
          <td>{team.playedGames}</td>
          <td>{team.won}</td>
          <td>{team.draw}</td>
          <td>{team.lost}</td>
          <td>{team.goalsFor}</td>
          <td>{team.goalsAgainst}</td>
          <td>{team.goalDifference}</td>
          <td>{team.points}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
