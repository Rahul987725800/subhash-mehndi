import styles from './DesktopImageView.module.scss';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import CustomImage from '@components/common/CustomImage/CustomImage';
import MagnifyPlusIcon from '@public/icons/magnify-plus.svg';
import MagnifyMinusIcon from '@public/icons/magnify-minus.svg';
function DesktopImageView({
  images,
  alt = 'mehndi design',
  activeImageIndex,
  setActiveImageIndex,
  closeImageView,
  blockSmoothScroll,
  setBlockSmoothScroll,
}) {
  const imagesRef = useRef();
  const [scrollPosition, setScrollPosition] = useState();
  const [cursorType, setCursorType] = useState('grab');
  const [scrollStartTime, setScrollStartTime] = useState();
  const [imageScale, setImageScale] = useState(1);
  const [imageLoadingSpeeds, setImageLoadingSpeeds] = useState(() => {
    const arr = Array(images.length).fill('lazy');
    arr[0] = 'eager';
    return arr;
  });

  const prevImageIndex = () => {
    if (activeImageIndex === 0) {
      return images.length - 1;
    }
    return activeImageIndex - 1;
  };
  const nextImageIndex = () => {
    if (activeImageIndex === images.length - 1) {
      return 0;
    }
    return activeImageIndex + 1;
  };
  const swiping = useCallback(
    (e) => {
      // console.log(e);

      imagesRef.current.scrollLeft = scrollPosition - e.deltaX;
    },
    [scrollPosition]
  );
  const boxPositionFromMiddleLine = (boxIndex) => {
    const imageArray = imagesRef.current.querySelectorAll(
      '.desktopViewCustomImageContainer'
    );
    // console.log(imageArray);
    const boxBounds = imageArray[boxIndex].getBoundingClientRect();
    // console.log(window.innerWidth);
    // console.log(boxBounds);
    if (boxBounds.x < window.innerWidth / 2) {
      return 'left';
    } else {
      return 'right';
    }
  };
  const handlers = useSwipeable({
    onSwipeStart: (e) => {
      if (imageScale !== 1) return;
      // console.log('swipe started');
      setCursorType('grabbing');
      setScrollPosition(imagesRef.current.scrollLeft);
      setScrollStartTime(new Date());
    },

    onSwiping: (e) => {
      if (imageScale !== 1) return;
      swiping(e);
    },
    onSwiped: (e) => {
      if (imageScale !== 1) return;
      const timeElapsedSinceSwipeStart = new Date() - scrollStartTime;
      const mandatorySwipe = timeElapsedSinceSwipeStart < 100;
      // console.log(timeElapsedSinceSwipeStart);
      setCursorType('grab');
      // console.log(e);

      // console.log(imagesRef.current.style.scrollBehavior);

      if (e.dir === 'Left') {
        if (activeImageIndex === images.length - 1) {
          setBlockSmoothScroll(true);
        }
        const nextImageIdx = nextImageIndex();
        if (mandatorySwipe) {
          setActiveImageIndex(nextImageIdx);
        } else {
          const position = boxPositionFromMiddleLine(nextImageIdx);
          // console.log(position);
          if (position === 'left') {
            setActiveImageIndex(nextImageIdx);
          } else {
            slideImage();
          }
        }
      } else if (e.dir === 'Right') {
        if (activeImageIndex === 0) {
          setBlockSmoothScroll(true);
        }
        const prevImageIdx = prevImageIndex();
        // console.log(prevImageIdx);
        if (mandatorySwipe) {
          setActiveImageIndex(prevImageIdx);
        } else {
          const position = boxPositionFromMiddleLine(activeImageIndex);
          // console.log(position);
          if (position === 'right' || activeImageIndex === 0) {
            setActiveImageIndex(prevImageIdx);
          } else {
            slideImage();
          }
        }
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    setImageLoadingSpeeds((speeds) => {
      const updatedSpeeds = [...speeds];
      updatedSpeeds[activeImageIndex] = 'eager';
      if (activeImageIndex + 1 < speeds.length)
        updatedSpeeds[activeImageIndex + 1] = 'eager';
      if (activeImageIndex - 1 >= 0)
        updatedSpeeds[activeImageIndex - 1] = 'eager';

      // console.log(updatedSpeeds);
      return updatedSpeeds;
    });
    setImageScale(1);
    slideImage();
  }, [activeImageIndex]);

  const slideImage = () => {
    if (!blockSmoothScroll) {
      imagesRef.current.style.scrollBehavior = 'smooth';
    } else {
      setBlockSmoothScroll(false);
    }
    let scrollTo = activeImageIndex * ((window.innerWidth * 70) / 100);

    imagesRef.current.scrollLeft = scrollTo;
    setScrollPosition(scrollTo);

    imagesRef.current.style.scrollBehavior = '';
    // we can't do imagesRef.current.scrollLeft since the setter is not completed yet
  };

  return (
    <div
      className={styles.imageView}
      style={{
        cursor: cursorType,
      }}
      {...handlers}
    >
      <div
        onClick={closeImageView}
        className={[styles.button, styles.close].join(' ')}
      >
        &#10006;
      </div>
      <div className={[styles.button, styles.zoom].join(' ')}>
        <div
          className={styles.in}
          onClick={() => {
            setImageScale(imageScale + 0.2);
          }}
        >
          <MagnifyPlusIcon />
        </div>
        <div
          className={styles.out}
          onClick={() => {
            if (imageScale > 1) {
              setImageScale(imageScale - 0.2);
            }
          }}
        >
          <MagnifyMinusIcon />
        </div>
      </div>
      <div className={styles.imageGrid}>
        <div
          className={styles.arrow}
          onClick={() => {
            if (activeImageIndex === 0) {
              setBlockSmoothScroll(true);
            }
            setActiveImageIndex(prevImageIndex());
          }}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>

        <div className={styles.images} ref={imagesRef}>
          {images.map((src, i) => {
            return (
              <div className="desktopViewCustomImageContainer" key={i}>
                {/* <img src={src} alt="mehandi image" draggable={false} /> */}
                <CustomImage
                  src={src}
                  alt={alt}
                  height="80vh"
                  width="70vw"
                  imageFit="contain"
                  cursor="inherit"
                  imageQuality={100}
                  loading={imageLoadingSpeeds[i]}
                  addZoomEffect={i === activeImageIndex && imageScale !== 1}
                  scale={imageScale}
                />
              </div>
            );
          })}
        </div>

        <div
          className={styles.arrow}
          onClick={() => {
            if (activeImageIndex === images.length - 1) {
              setBlockSmoothScroll(true);
            }
            setActiveImageIndex(nextImageIndex());
          }}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default DesktopImageView;
