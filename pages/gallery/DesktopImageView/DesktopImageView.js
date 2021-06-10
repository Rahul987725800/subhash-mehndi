import styles from './DesktopImageView.module.scss';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import CustomImage from '../../../components/CustomImage';
function DesktopImageView({
  images,
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
  const [imageLoadingSpeeds, setImageLoadingSpeeds] = useState(
    Array(images.length).fill('lazy')
  );

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
      // console.log('swipe started');
      setCursorType('grabbing');
      setScrollPosition(imagesRef.current.scrollLeft);
      setScrollStartTime(new Date());
    },

    onSwiping: swiping,
    onSwiped: (e) => {
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
      const updatedSpeeds = speeds.map((v, i) => {
        if (Math.abs(i - activeImageIndex) <= 2) {
          return 'eager';
        }
        return v;
      });
      // console.log(updatedSpeeds);
      return updatedSpeeds;
    });
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
    >
      <div
        onClick={closeImageView}
        className={[styles.button, styles.close].join(' ')}
      >
        &#10006;
      </div>
      <div className={[styles.button, styles.zoom].join(' ')}>
        <div className={styles.in}>in</div>
        <div className={styles.out}>out</div>
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
          <i className="fa fa-angle-left"></i>
        </div>

        <div className={styles.images} ref={imagesRef}>
          {images.map((src, i) => {
            return (
              <div className="desktopViewCustomImageContainer" key={i}>
                {/* <img src={src} alt="mehandi image" draggable={false} /> */}
                <CustomImage
                  src={src}
                  height="80vh"
                  width="70vw"
                  imageFit="contain"
                  cursor="inherit"
                  imageQuality={100}
                  loading={imageLoadingSpeeds[i]}
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
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

export default DesktopImageView;
