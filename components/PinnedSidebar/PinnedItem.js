import classes from './PinnedItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PinnedItem = ({ name, emblem, link }) => {
  return (
    <div className={classes['pinned-item']}>
      <Link href={link} className={classes['link-part']}>
        <Image
          src={emblem}
          alt={`${name} flag`}
          width={20}
          height={20}
        />
        <div className={classes['name']}>{name}</div>
      </Link>
    </div>
  );
};

export default PinnedItem;
