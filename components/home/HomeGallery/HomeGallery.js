import styles from './HomeGallery.module.scss';
import CustomImage from '@components/common/CustomImage/CustomImage';

import Button from '@components/common/Button/Button';
import Link from 'next/link';
import LeftRightButtons from '@components/common/LeftRightButtons/LeftRightButtons';
import { useState, useEffect } from 'react';
const images = ['/161.jpg', '/bridal-home.jpg'];
const imageDimension = {
  width: 250,
  height: 250,
};
function Gallery() {
  const [imageBlocks, setImageBlocks] = useState([]);
  useEffect(() => {
    setImageBlocks(() => {
      const smallScreen = window.innerWidth < 900;
      if (smallScreen) {
        return generateNumImagesPerBlock(1);
      } else {
        return generateNumImagesPerBlock(2);
      }
    });
  }, []);
  return (
    <div className={styles.gallery}>
      <div
        className={styles.images}
        style={{
          height: `${imageDimension.height}px`,
        }}
      >
        <LeftRightButtons
          leftClick={() => {}}
          rightClick={() => {}}
          textColor="black"
          borderColor="blue"
        />
        {imageBlocks.map((block, i) => (
          <div key={i} className={styles.block}>
            {block.map((imageSrc, i) => (
              <div key={i} className={styles.image}>
                <CustomImage
                  src={imageSrc}
                  width={`${imageDimension.width}px`}
                  height={`${imageDimension.height}px`}
                  addHoverEffect
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Button>
          <Link href="/gallery">
            <a>View Gallery</a>
          </Link>
        </Button>
      </div>
    </div>
  );
  function generateNumImagesPerBlock(num) {
    const result = [];
    let current = [];
    for (let i = 0; i < images.length; i++) {
      if (current.length === num) {
        result.push(current);
        current = [images[i]];
      } else {
        current.push(images[i]);
      }
    }
    if (current.length !== 0) {
      result.push(current);
    }
    return result;
  }
}

export default Gallery;
