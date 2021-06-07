import styles from './index.module.scss';
import Folder from '../../components/Folder';

import { range } from '../../utils';
import CustomImage from '../../components/CustomImage';
import { useState } from 'react';
import DesktopImageView from '../../components/DesktopImageView';
const images = range(1, 14).map((v) => `/images/mehandi-latest/${v}.jpg`);
function gallery() {
  const [showImageView, setShowImageView] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  let folders = [
    {
      image: '/images/mehandi/2.jpg',
      link: '/gallery/mehandi',
      linkText: 'Mehandi Designs',
    },
    {
      image: '/images/mehandi-latest/2.jpg',
      link: '/gallery/mehandi-latest',
      linkText: 'Mehandi Latest Designs',
    },
    {
      image: '/images/bangles-simple/2.jpg',
      link: '/gallery/bangles-simple',
      linkText: 'Bangles Kade Stall',
    },
    {
      image: '/images/bangles-premium/2.jpg',
      link: '/gallery/bangles-premium',
      linkText: 'Gehne Jutti Prandi Stall',
    },
  ];

  return (
    <main className={styles.gallery}>
      <h1 className={styles.header}>Gallery</h1>

      <div className={styles.folders}>
        {folders.map((folder, i) => {
          return <Folder key={i} folder={folder} />;
        })}
      </div>
      <div className={styles.imageView}>
        <h1 className={styles.header}>Miscellaneous</h1>
        <div className={styles.container}>
          <div className={styles.images}>
            {images.map((src, i) => {
              return (
                <div
                  className={styles.image}
                  onClick={() => {
                    setShowImageView(true);
                    setSelectedImageIndex(i);
                  }}
                  key={i}
                >
                  <CustomImage src={src} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showImageView && (
        <DesktopImageView
          images={images}
          selectedImageIndex={selectedImageIndex}
          closeImageView={() => setShowImageView(false)}
        />
      )}
    </main>
  );
}

export default gallery;
