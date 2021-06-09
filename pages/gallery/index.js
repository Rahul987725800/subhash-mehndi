import styles from './index.module.scss';
import Folder from './Folder/Folder';

import { range } from '../../utils';
import CustomImage from '../../components/CustomImage';
import { useState, useEffect } from 'react';
import DesktopImageView from './DesktopImageView/DesktopImageView';
import { isMobile } from 'react-device-detect';
import MobileImageView from './MobileImageView/MobileImageView';
const images = range(1, 14).map((v) => `/images/mehandi/${v}.jpg`);
function gallery() {
  const [showImageView, setShowImageView] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState();
  const [blockSmoothScroll, setBlockSmoothScroll] = useState(true);

  let folders = [
    {
      image: '/images/mehandi/1.jpg',
      link: '/gallery/mehandi',
      linkText: 'Mehandi Designs',
    },
    {
      image: '/images/mehandi/2.jpg',
      link: '/gallery/mehandi-latest',
      linkText: 'Mehandi Latest Designs',
    },
    {
      image: '/images/mehandi/3.jpg',
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
            {images.map((src, i) => {
              return (
                <div
                  className={styles.image}
                  onClick={() => {
                    setBlockSmoothScroll(true);
                    setActiveImageIndex(i);
                    setShowImageView(true);
                  }}
                  key={i}
                >
                  <CustomImage src={src} addHoverEffect />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          display: showImageView ? 'block' : 'none',
        }}
      >
        {/* {window.innerWidth < 900 ? ( */}
        {/* <MobileImageView
          images={images}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          closeImageView={() => setShowImageView(false)}
        /> */}
        {/* ) : ( */}
        <DesktopImageView
          images={images}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          closeImageView={() => setShowImageView(false)}
          blockSmoothScroll={blockSmoothScroll}
          setBlockSmoothScroll={setBlockSmoothScroll}
        />
        {/* )} */}
      </div>
    </main>
  );
}

export default gallery;
