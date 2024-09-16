import SportLinks from '@/components/SportLinks';
import PinnedSection from '@/components/PinnedSidebar/PinnedSection';
import FilterButton from '@/components/TablesFilterButtons/FilterButtons';
import classes from './page.module.css';
import ResultTables from '@/components/ResultTables/ResultTables';

export default function Home() {
  return (
    <>
      <SportLinks />
      <main>
        <PinnedSection />
        <div className={classes.wrapper}>
          <div className={classes['main-content']}>
            <FilterButton />
            <ResultTables />
          </div>
        </div>
      </main>
    </>
  );
}
