import styles from './DesktopImageView.module.scss';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
function DesktopImageView({ images, selectedImageIndex, closeImageView }) {
  const imagesRef = useRef();
  const [scrollPosition, setScrollPosition] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(
    () => selectedImageIndex
  );

  const prevImage = () => {
    setActiveImageIndex((prevActiveImageIndex) => {
      if (prevActiveImageIndex === 0) {
        return images.length - 1;
      }
      return prevActiveImageIndex - 1;
    });
  };
  const nextImage = () => {
    setActiveImageIndex((prevActiveImageIndex) => {
      if (prevActiveImageIndex === images.length - 1) {
        return 0;
      }
      return prevActiveImageIndex + 1;
    });
  };
  const swiping = useCallback(
    (e) => {
      imagesRef.current.scrollLeft = scrollPosition - e.deltaX;
    },
    [scrollPosition]
  );

  const handlers = useSwipeable({
    onSwipeStart: (e) => {
      // console.log('swipe started');
      setScrollPosition(imagesRef.current.scrollLeft);
      setScrolling(true);
    },
    onSwiping: (e) => {
      // console.log('swiping')
      swiping(e);
    },
    onSwiped: (e) => {
      setScrollPosition(imagesRef.current.scrollLeft);
      setScrolling(false);
    },
    trackMouse: true,
  });

  return (
    <div
      className={styles.imageView}
      {...handlers}
      style={{
        cursor: scrolling ? 'grabbing' : 'grab',
      }}
    >
      <div onClick={closeImageView}>cross</div>
      <div className={styles.imageGrid}>
        <div className={styles.arrow} onClick={prevImage}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className={styles.images} ref={imagesRef}>
          {images.map((src, i) => {
            return (
              <img key={i} src={src} alt="mehandi image" draggable={false} />
            );
          })}
        </div>

        <div className={styles.arrow} onClick={nextImage}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

export default DesktopImageView;
