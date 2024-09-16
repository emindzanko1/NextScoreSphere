import SportLinks from '@/components/SportLinks';
import PinnedSection from '@/components/PinnedSidebar/PinnedSection';
import FilterButton from '@/components/FilterButtons';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <SportLinks />
      <main>
        <PinnedSection />
        <div className={classes.wrapper}>
          <div className={classes['main-content']}>
            <FilterButton />
          </div>
        </div>
      </main>
    </>
  );
}
