import React, { useState } from 'react';
import styles from './Folder.module.scss';
import Link from 'next/link';
import CustomImage from './CustomImage';
function Folder({ folder }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={folder.link} key={folder.link}>
      <div
        className={styles.folder}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CustomImage src={folder.image} triggerHover={hovered} />
        <div className={styles.linkText}>
          <a>{folder.linkText}</a>
        </div>
      </div>
    </Link>
  );
}

export default Folder;
