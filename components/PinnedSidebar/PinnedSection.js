'use client';
import PinnedItem from './PinnedItem';

import classes from './PinnedSection.module.css';
import { useState } from 'react';

const PinnedSection = () => {
  const [leagues, setLeagues] = useState([
    {
      id: 2021,
      name: 'Premier League',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png',
    },
    {
      id: 2014,
      name: 'La Liga',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg/360px-LaLiga_EA_Sports_2023_Vertical_Logo.svg.png',
    },
    {
      id: 2022,
      name: 'Premier League',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png',
    },
    {
      id: 2023,
      name: 'La Liga',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg/360px-LaLiga_EA_Sports_2023_Vertical_Logo.svg.png',
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: 65,
      name: 'Manchester City',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
    },
    { id: 81, name: 'Barcelona', flag: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
  ]);

  const handlePinClick = (e, id, type) => {
    e.stopPropagation();
    if (type === 'league') {
      setLeagues(leagues.filter(league => league.id !== id));
    } else if (type === 'team') {
      setTeams(teams.filter(team => team.id !== id));
    }
  };

  return (
    <aside className={classes.aside}>
      <>
        <div className={classes['pinned-section']}>
          <h2>Pinned Leagues</h2>
          {leagues.map(league => (
            <PinnedItem
              key={league.id}
              id={league.id}
              name={league.name}
              emblem={league.flag}
              type='league'
              onUnpin={handlePinClick}
              link={`/league/${league.id}`}
            />
          ))}
        </div>
        <div className={classes['pinned-section']}>
          <h2>Pinned Teams</h2>
          {teams.map(team => (
            <PinnedItem
              key={team.id}
              id={team.id}
              name={team.name}
              emblem={team.flag}
              type='team'
              onUnpin={handlePinClick}
              link={`/team/${team.id}`}
            />
          ))}
        </div>
      </>
    </aside>
  );
};

export default PinnedSection;
