'use client';
import { useState } from 'react';
import classes from './ResultTables.module.css';
import TableHeader from './ResultTablesHeader';

const ResultTables = ({ matches }) => {
  const [allStarsActive, setAllStarsActive] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
 
  return (
    <div className={classes.tableContainer}>
      <TableHeader
        leagueName='Premier League'
        leagueEmblem='https://crests.football-data.org/PL.png'
        areaName='England'
        allStarsActive={allStarsActive}
        handleMainStarClick={handleMainStarClick}
      />
     
    </div>
  );
};

export default ResultTables;
