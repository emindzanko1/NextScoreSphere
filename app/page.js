import SportLinks from '@/components/SportLinks';
import PinnedSection from '@/components/PinnedSidebar/PinnedSection';
import Drale from '@/components/Drale';

export default function Home() {
  return (
    <>
      <SportLinks />
      <main>
        <PinnedSection />
      </main>
    </>
  );
}
