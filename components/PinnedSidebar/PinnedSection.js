import { promises as fs } from 'fs';
import PinnedItem from './PinnedItem';

import classes from './PinnedSection.module.css';

const PinnedSection = async () => {
  const leaguesFile = await fs.readFile(process.cwd() + '/lib/data/leagues.json', 'utf8');
  const leaguesReq = JSON.parse(leaguesFile);
  const leagues = leaguesReq.leagues;

  const teamsFile = await fs.readFile(process.cwd() + '/lib/data/teams.json', 'utf8');
  const teamsReq = JSON.parse(teamsFile);
  const teams = teamsReq.teams;

  return (
    <aside className={classes.aside}>
      <>
        <div className={classes['pinned-section']}>
          <h2>Popular Leagues</h2>
          {leagues.map(league => (
            <PinnedItem
              key={league.id}
              id={league.id}
              name={league.name}
              emblem={league.emblem}
              type='league'
              link={`/league/${league.id}`}
            />
          ))}
        </div>
        <div className={classes['pinned-section']}>
          <h2>Popular Teams</h2>
          {teams.map(team => (
            <PinnedItem
              key={team.id}
              id={team.id}
              name={team.name}
              emblem={team.crest}
              type='team'
              link={`/team/${team.id}`}
            />
          ))}
        </div>
      </>
    </aside>
  );
};

export default PinnedSection;
