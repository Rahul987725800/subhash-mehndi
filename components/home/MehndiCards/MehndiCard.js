import styles from './MehndiCard.module.scss';
import CustomImage from '@components/common/CustomImage/CustomImage';
import { useState } from 'react';
function MehndiCard({ src, type, description }) {
  const [hovered, setHovered] = useState(false);
  return (
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
    </div>
  );
}

export default MehndiCard;
