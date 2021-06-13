import styles from './HomeGallery.module.scss';
import CustomImage from '@components/common/CustomImage/CustomImage';

import Button from '@components/common/Button/Button';
import Link from 'next/link';
import LeftRightButtons from '@components/common/LeftRightButtons/LeftRightButtons';
import { useState, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import { Debounce } from '@base/utils';
import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
const images = [
  '/161.jpg',
  '/bridal-home.jpg',
  '/face.png',
  '/profile.jpg',
  '/images/mehandi/1.jpg',
  '/images/mehandi/2.jpg',
];
const categoryLinks = ['/gallery', '/contact', 'gallery'];
const imageDimension = {
  width: 250,
  height: 250,
};

function HomeGallery() {
  const router = useRouter();
  const [imageBlocks, setImageBlocks] = useState([]);
  const [swipeType, setSwipeType] = useState('');
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const windowResizeHandler = useRef(
    new Debounce(() => {
      // console.log('computation actually ran');
      updateImageBlocks();
    }, 500)
  );
  const updateImageBlocks = () => {
    // console.log('imageBlocks updated');
    setImageBlocks(() => {
      const smallScreen = window.innerWidth < 900;
      if (smallScreen) {
        return generateNumImagesPerBlock(1);
      } else {
        return generateNumImagesPerBlock(2);
      }
    });
    setActiveBlockIndex(0);
  };
  useEffect(() => {
    updateImageBlocks();
    window.addEventListener('resize', () => {
      // console.log('resize');
      windowResizeHandler.current.call();
    });
  }, []);
  const nextBlock = () => {
    setSwipeType('right');
    setActiveBlockIndex((idx) => {
      if (idx === imageBlocks.length - 1) return 0;
      return idx + 1;
    });
  };
  const prevBlock = () => {
    // console.log('prev clicked');
    setSwipeType('left');
    setActiveBlockIndex((idx) => {
      if (idx === 0) {
        return imageBlocks.length - 1;
      }
      return idx - 1;
    });
  };
  const handlers = useSwipeable({
    onSwipedLeft: nextBlock,
    onSwipedRight: prevBlock,
    trackMouse: true,
  });
  return (
    <div className={styles.gallery} {...handlers}>
      <div
        className={[styles.images, 'swipe-home-gallery'].join(' ')}
        style={{
          height: `${imageDimension.height}px`,
        }}
      >
        <div className={styles.buttons}>
          <LeftRightButtons
            leftClick={prevBlock}
            rightClick={nextBlock}
            textColor="black"
            borderColor="var(--color-bluegray)"
          />
        </div>

        {imageBlocks.map((block, i) => (
          <div className={styles.block} key={i}>
            {block.map((imageSrc, i) => (
              <CSSTransition
                classNames={`image-${swipeType}`}
                timeout={600}
                in={imageBlocks[activeBlockIndex] === block}
                key={i}
              >
                <div
                  className={[
                    styles.image,
                    swipeType === '' && imageBlocks[activeBlockIndex] === block
                      ? 'display-block'
                      : 'display-none',
                  ].join(' ')}
                  style={{
                    transitionDelay:
                      block.length > 1 && swipeType === 'left'
                        ? i === 0
                          ? '100ms'
                          : '0ms'
                        : i === 1
                        ? '100ms'
                        : '0ms',
                  }}
                  onClick={() => {
                    router.push(categoryLinks[activeBlockIndex]);
                  }}
                >
                  <CustomImage
                    src={imageSrc}
                    width={`${imageDimension.width}px`}
                    height={`${imageDimension.height}px`}
                    addHoverEffect
                    imageQuality={100}
                  />
                </div>
              </CSSTransition>
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

export default HomeGallery;
