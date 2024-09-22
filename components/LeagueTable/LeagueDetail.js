'use client'; 
import { useState } from 'react';
import LeagueTable from '@/components/LeagueTable/LeagueTable';
import classes from './LeagueDetail.module.css';
import MatchesList from './MatchesList';

const LeagueDetailClient = ({ standings, results, schedule }) => {
  const [selectedTab, setSelectedTab] = useState('table');

  const renderContent = () => {
    switch (selectedTab) {
      case 'table':
        return <LeagueTable standings={standings} />;
      case 'schedule':
        return (
          <div className={classes['league-schedule']}>
            <h3>Schedule</h3>
            <MatchesList matches={schedule} type='schedule' />
          </div>
        );
      case 'results':
        return (
          <div className={classes['league-results']}>
            <h3>Results</h3>
            <MatchesList matches={results} type='results' />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav className={classes['league-nav']}>
        <button
          className={selectedTab === 'table' ? classes.active : ''}
          onClick={() => setSelectedTab('table')}
        >
          Table
        </button>
        <button
          className={selectedTab === 'schedule' ? classes.active : ''}
          onClick={() => setSelectedTab('schedule')}
        >
          Schedule
        </button>
        <button
          className={selectedTab === 'results' ? classes.active : ''}
          onClick={() => setSelectedTab('results')}
        >
          Results
        </button>
      </nav>

      <section className={classes['league-content']}>
        {renderContent()}
      </section>
    </>
  );
};

export default LeagueDetailClient;
