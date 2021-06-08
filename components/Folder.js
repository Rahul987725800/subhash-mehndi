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
        <CustomImage
          imgCode={folder.image}
          triggerHover={hovered}
          finalImageQuality={20}
        />
        <div className={styles.linkText}>
          <a>{folder.linkText}</a>
        </div>
      </div>
    </Link>
  );
}

export default Folder;
