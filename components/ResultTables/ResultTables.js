'use client';
import { useState } from 'react';
import classes from './ResultTables.module.css';
import TableHeader from './ResultTablesHeader';
import TableBody from './ResultTablesBody';

const ResultTables = ({ matches }) => {
  const [allStarsActive, setAllStarsActive] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMainStarClick = () => {
    setAllStarsActive(!allStarsActive);
    if (allStarsActive) {
      setFavourites([]);
    } else {
      const allIndices = Array.from({ length: 10 }, (_, i) => i);
      setFavourites(allIndices);
    }
  };

  const handleFavorite = index => {
    if (favourites.includes(index)) {
      setFavourites(favourites.filter(favIndex => favIndex !== index));
    } else {
      setFavourites([...favourites, index]);
    }
  };

  const handleRowClick = matchData => {
    setSelectedMatch(matchData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleChevron = () => {
    setIsExpanded(!isExpanded);
  };

  const placeholderData = {
    leagueName: 'Premier League',
    leagueEmblem: 'https://crests.football-data.org/PL.png',
    areaName: 'England',
    leagueMatches: [
      {
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
        },
        awayTeam: {
          id: 63,
          name: 'Brighton & Hove Albion FC',
          shortName: 'Brighton Hove',
          tla: 'BHA',
          crest: 'https://crests.football-data.org/397.png',
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
      },
    ],
  };

  return (
    <div className={classes['table-container']}>
      <div key='placeholder' className={classes['league-section']}>
        <TableHeader
          leagueName='Premier League'
          leagueEmblem='https://crests.football-data.org/PL.png'
          areaName='England'
          allStarsActive={allStarsActive}
          handleMainStarClick={handleMainStarClick}
          isExpanded={isExpanded}
          toggleChevron={toggleChevron}
        />
        {isExpanded && (
          <TableBody
            matches={placeholderData.leagueMatches}
            favourites={favourites}
            handleFavorite={handleFavorite}
            handleRowClick={handleRowClick}
          />
        )}
      </div>
    </div>
  );
};

export default ResultTables;
