import { MdPushPin } from 'react-icons/md';
import classes from './PinnedItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PinnedItem = ({ id, name, emblem, type, onUnpin, link }) => {
  const myLoader = ({ src }) => {
    return emblem;
  };

  return (
    <div className={classes['pinned-item']}>
      <Link href={link} className={classes['link-part']}>
        <Image
          loader={myLoader}
          src={emblem}
          alt={`${name} flag`}
          width={20} 
          height={20}
        />
        <div className={classes['name']}>{name}</div>
      </Link>
      <div className={classes['unpin-tooltip']}>
        <span className={classes.tooltiptext}>
          Remove this {type} from your Pinned {type === 'league' ? 'Leagues' : 'Teams'}!
        </span>
        <MdPushPin
          className={classes['unpin-icon']}
          onClick={e => {
            e.stopPropagation();
            onUnpin(e, id, type);
          }}
        />
      </div>
    </div>
  );
};

export default PinnedItem;
