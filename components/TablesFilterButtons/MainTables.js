'use client'
import FilterButton from '@/components/TablesFilterButtons/FilterButtons';
import ResultTables from '@/components/ResultTables/ResultTables';
import { useState } from 'react';

const MainTables = () => {
  const [fetchedData, setFetchedData] = useState(null);

  return (
    <>
     <FilterButton setFetchedData={setFetchedData} /> 
     <ResultTables data={fetchedData} /> 
    </>
  );
};

export default MainTables;
