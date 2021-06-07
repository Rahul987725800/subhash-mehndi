import styles from './MehndiCard.module.scss';
import CustomImage from './CustomImage';
import { useState } from 'react';
function MehndiCard({}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.mehndiCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.image}>
        <CustomImage
          src="/161.jpg"
          width={150}
          height={150}
          triggerHover={hovered}
        />
      </span>

      <h4 className={styles.type}>Bridal Mehndi</h4>
      <p className={styles.description}>
        Apart from the mehendi design and assurance of its rich colour, Kundan
        Mehandi uses high quality henna paste that suits to all kinds of skins
      </p>
    </div>
  );
}

export default MehndiCard;
