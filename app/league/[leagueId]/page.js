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
  const matchesFile = await fs.readFile(process.cwd() + '/lib/data/matches.json', 'utf8');
  const matchesReq = JSON.parse(matchesFile);
  const allMatches = matchesReq.matches;
  const matchesForLeague = allMatches.filter(match => match.competition.id == leagueId);
  const today = new Date();

  const pastMatches = [];

  for (const matchObject of matchesForLeague) {
    const matchesForPast = matchObject.matches.filter(match => {
      const matchDate = new Date(match.utcDate);
      return matchDate < today;
    });

    pastMatches.push(...matchesForPast);
  }

  pastMatches.sort((a, b) => b.matchday - a.matchday);

  const futureMatches = [];

  for (const matchObject of matchesForLeague) {
    const matchesForFuture = matchObject.matches.filter(match => {
      const matchDate = new Date(match.utcDate);
      return matchDate >= today;
    });

    futureMatches.push(...matchesForFuture);
  }

  if (!league) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes['league-details']}>
      <LeagueHeader league={league} />
      <LeagueDetailClient standings={standing} results={pastMatches} schedule={futureMatches}/>
    </div>
  );
};

export default LeagueDetail;
