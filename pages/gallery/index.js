import styles from './index.module.scss';
import Folder from './Folder/Folder';

import { range } from '../../utils';
import CustomImage from '../../components/CustomImage';
import { useState } from 'react';
import DesktopImageView from './DesktopImageView/DesktopImageView';
import { isMobile } from 'react-device-detect';
import MobileImageView from './MobileImageView/MobileImageView';
const images = range(1, 14).map((v) => '147_uroyvt');
function gallery() {
  const [showImageView, setShowImageView] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState();
  let folders = [
    {
      image: '147_uroyvt',
      link: '/gallery/mehandi',
      linkText: 'Mehandi Designs',
    },
    {
      image: '161_dz9rdy',
      link: '/gallery/mehandi-latest',
      linkText: 'Mehandi Latest Designs',
    },
    {
      image: '150_kb5iec',
      link: '/gallery/bangles-simple',
      linkText: 'Bangles Kade Stall',
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
            {images.map((imgCode, i) => {
              return (
                <div
                  className={styles.image}
                  onClick={() => {
                    setShowImageView(true);
                    setSelectedImageIndex(i);
                  }}
                  key={i}
                >
                  <CustomImage imgCode={imgCode} finalImageQuality={20} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showImageView &&
        (isMobile ? (
          <MobileImageView
            images={images}
            selectedImageIndex={selectedImageIndex}
            closeImageView={() => setShowImageView(false)}
          />
        ) : (
          <DesktopImageView
            images={images}
            selectedImageIndex={selectedImageIndex}
            closeImageView={() => setShowImageView(false)}
          />
        ))}
    </main>
  );
}

export default gallery;
