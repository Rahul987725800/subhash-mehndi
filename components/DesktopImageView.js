import styles from './DesktopImageView.module.scss';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
function DesktopImageView({ images, selectedImageIndex, closeImageView }) {
  const imagesRef = useRef();
  const [blockSmoothScroll, setBlockSmoothScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [scrollStartTime, setScrollStartTime] = useState();
  const [activeImageIndex, setActiveImageIndex] = useState(
    () => selectedImageIndex
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
    const imageArray = imagesRef.current.querySelectorAll('div');
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

      setScrollPosition(imagesRef.current.scrollLeft);
      setScrolling(true);
      setScrollStartTime(new Date());
    },

    onSwiping: swiping,
    onSwiped: (e) => {
      const timeElapsedSinceSwipeStart = new Date() - scrollStartTime;
      const mandatorySwipe = timeElapsedSinceSwipeStart < 100;
      // console.log(timeElapsedSinceSwipeStart);

      setScrolling(false);
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
    slideImage();
  }, [activeImageIndex]);
  useEffect(() => {
    setBlockSmoothScroll(false);
  }, []);
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
      {...handlers}
      style={{
        cursor: scrolling ? 'grabbing' : 'grab',
      }}
    >
      <div onClick={closeImageView} className={styles.closeButton}>
        &#10006;
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
              <div className={styles.image} key={i}>
                <img src={src} alt="mehandi image" draggable={false} />
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
