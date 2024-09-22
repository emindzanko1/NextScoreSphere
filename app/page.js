import SportLinks from '@/components/SportLinks/SportLinks';
import PinnedSection from '@/components/PinnedSidebar/PinnedSection';
import FilterButton from '@/components/TablesFilterButtons/FilterButtons';
import classes from './page.module.css';
import ResultTables from '@/components/ResultTables/ResultTables';
import FeaturedMatch from '@/components/RightSidebar/FeaturedMatch';
import ScrollToTopButton from '@/components/RightSidebar/ScrollToTop';

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
        <FeaturedMatch />
        <div className={classes.scroll}>
          <ScrollToTopButton />
        </div>
      </main>
    </>
  );
}
