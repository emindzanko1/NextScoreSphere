import SportLinks from '@/components/SportLinks/SportLinks';
import PinnedSection from '@/components/PinnedSidebar/PinnedSection';
import classes from './page.module.css';
import FeaturedMatch from '@/components/RightSidebar/FeaturedMatch';
import ScrollToTopButton from '@/components/RightSidebar/ScrollToTop';
import MainTables from '@/components/TablesFilterButtons/MainTables';

export default function Home() {

  return (
    <>
      <SportLinks />
      <main>
        <PinnedSection />
        <div className={classes.wrapper}>
          <div className={classes['main-content']}>
            <MainTables />
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
