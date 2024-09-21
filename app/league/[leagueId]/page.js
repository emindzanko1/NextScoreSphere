import { promises as fs } from 'fs';
import classes from './page.module.css';
import LeagueDetailClient from '@/components/LeagueTable/LeagueDetail';
import LeagueHeader from '@/components/LeagueTable/LeagueHeader';

const LeagueDetail = async ({ params }) => {
  const leagueId = params.leagueId;
  const standingsFile = await fs.readFile(process.cwd() + '/lib/data/standings.json', 'utf8');
  const standingsReq = JSON.parse(standingsFile);
  const standings = standingsReq.standings;
  const standing = standings.find(ev => ev.competition.id == leagueId).standings;
  const leaguesFile = await fs.readFile(process.cwd() + '/lib/data/leagues.json', 'utf8');
  const leaguesReq = JSON.parse(leaguesFile);
  const leagues = leaguesReq.leagues;
  const league = leagues.find(league => league.id == leagueId);

  if (!league) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes['league-details']}>
      <LeagueHeader league={league} />
      <LeagueDetailClient standings={standing} league={league} />
    </div>
  );
};

export default LeagueDetail;
