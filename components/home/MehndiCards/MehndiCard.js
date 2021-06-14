import styles from './MehndiCard.module.scss';
import CustomImage from '@components/common/CustomImage/CustomImage';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@components/common/Button/Button';
function MehndiCard({ src, type, description, path }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={path}>
      <div
        className={styles.mehndiCard}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className={styles.image}>
          <CustomImage
            src={src}
            width="150px"
            height="150px"
            addHoverEffect
            triggerHover={hovered}
          />
        </span>

        <h4 className={styles.type}>{type}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>
          More <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    </Link>
  );
}

export default MehndiCard;
