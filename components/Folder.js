import React, { useState } from 'react';
import styles from './Folder.module.scss';
import Link from 'next/link';
function Folder({ folder }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={folder.link} key={folder.link}>
      <div
        className={styles.folder}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.image}>
          <img
            src={folder.image}
            alt="mehandi image"
            style={{
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </div>
        <div className={styles.linkText}>
          <a>{folder.linkText}</a>
        </div>
      </div>
    </Link>
  );
}

export default Folder;
