import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import SportLinks from '@/components/SportLinks';

export default function Home() {
  return (
    <>
      <SportLinks />
      <main>
        <h1>Emin's App</h1>
        <p>
          <Link href='/auth'></Link>
        </p>
      </main>
    </>
  );
}
