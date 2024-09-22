'use client';
import { useEffect, useState } from 'react';
import classes from './ResultTables.module.css';
import TableHeader from './ResultTablesHeader';
import TableBody from './ResultTablesBody';
import { timestampToDate, todayFormattedDate } from '@/util/helpers';

const ResultTables = ({ data }) => {
  const [allStarsActive, setAllStarsActive] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matches, setMatches] = useState([]);
  const [expandedLeagues, setExpandedLeagues] = useState({});

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
  };

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  // const response = await fetch(`https://www.test.com/api/v1/sport/football/scheduled-events/${formattedDate}`, {
  //   cache: 'no-store',
  // });
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }

  // const data = await response.json();
  // const formattedToday = todayFormattedDate();
  // const todayMatches = data.events.filter(match => {
  //   const matchDate = timestampToDate(match.startTimestamp);
  //   return matchDate === formattedToday;
  // });

  // const initialExpandedState = todayMatches.reduce((acc, match) => {
  //   const leagueName = match.tournament.name;
  //   acc[leagueName] = true;
  //   return acc;
  // }, {});

  // setExpandedLeagues(initialExpandedState);

  // setMatches(todayMatches);

  const toggleChevron = leagueName => {
    setExpandedLeagues(prevState => ({
      ...prevState,
      [leagueName]: !prevState[leagueName],
    }));
  };

  // const leagues = Object.values(
  //   matches.reduce((acc, match) => {
  //     const allowedCountries = new Set([
  //       'England',
  //       'Spain',
  //       'Italy',
  //       'Germany',
  //       'France',
  //       'Netherlands',
  //       'Portugal',
  //       'Brazil',
  //     ]);

  //     const countryName = match.tournament.category.name;

  //     if (allowedCountries.has(countryName) && !acc[countryName]) {
  //       const leagueName = match.tournament.name;

  //       acc[countryName] = {
  //         leagueName,
  //         leagueEmblem: match.tournament.emblem,
  //         areaName: countryName,
  //         leagueMatches: [match],
  //       };
  //     } else if (acc[countryName] && acc[countryName].leagueName === match.tournament.name) {
  //       acc[countryName].leagueMatches.push(match);
  //     }

  //     return acc;
  //   }, {})
  // );

  const groupMatchesByLeague = matches => {
    return matches.reduce((acc, match) => {
      const leagueKey = match.competition.name;
      if (!acc[leagueKey]) {
        acc[leagueKey] = {
          leagueName: leagueKey,
          leagueEmblem: match.competition.emblem,
          areaName: match.area.name,
          leagueMatches: [],
        };
      }
      acc[leagueKey].leagueMatches.push(match);
      return acc;
    }, {});
  };

  let leagues;

  if (!data) {
    return <h2>There are no matches today!</h2>;
  }

  leagues = groupMatchesByLeague(data);

  return (
    <div className={classes['table-container']}>
      {Object.keys(leagues).map(leagueName => {
        const league = leagues[leagueName];
        return (
          <div key={leagueName} className={classes['league-section']}>
            <TableHeader
              leagueName={league.leagueName}
              leagueEmblem={league.leagueEmblem}
              areaName={league.areaName}
              allStarsActive={allStarsActive}
              handleMainStarClick={handleMainStarClick}
              isExpanded={!!expandedLeagues[league.leagueName]}
              toggleChevron={() => toggleChevron(league.leagueName)}
            />
            {/* {expandedLeagues[league.leagueName] && ( */}
              <TableBody
                // image={placeholderData.test}
                matches={league.leagueMatches}
                favourites={favourites}
                handleFavorite={handleFavorite}
                handleRowClick={handleRowClick}
              />
            {/* )} */}
          </div>
        );
      })}
      {/* {Object.keys(leagues).map(leagueName => {
        const league = leagues[leagueName];
        return (
          <div key={leagueName} className={classes['league-section']}>
            <TableHeader
              leagueName={league.leagueName}
              leagueEmblem={league.leagueEmblem}
              areaName={league.areaName}
              allStarsActive={allStarsActive}
              handleMainStarClick={handleMainStarClick}
              isExpanded={!!expandedLeagues[league.leagueName]}
              toggleChevron={() => toggleChevron(league.leagueName)}
            />
            {expandedLeagues[league.leagueName] && (
              <TableBody
                image={placeholderData.test}
                matches={league.leagueMatches}
                favourites={favourites}
                handleFavorite={handleFavorite}
                handleRowClick={handleRowClick}
              />
            )}
          </div>
        );
      })} */}
    </div>
  );
};

export default ResultTables;
