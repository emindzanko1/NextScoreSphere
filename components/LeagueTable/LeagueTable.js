import TableBody from './LeagueTableBody';
import TableHead from './LeagueTableHead';
import classes from './LeagueTable.module.css';

const LeagueTable = ({ standings }) => {
  return (
    <div className={classes['league-table']}>
      <h3>Standings</h3>
      <table>
        <TableHead />
        <TableBody standings={standings[0].table} />
      </table>
    </div>
  );
};

export default LeagueTable;
