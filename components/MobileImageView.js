import styles from './MobileImageView.module.scss';
import { useSwipeable } from 'react-swipeable';
import { useContext, useState, useEffect } from 'react';
import { mod } from '../utils';
import { GlobalStateContext } from '../state/GlobalStateProvider';
import { CSSTransition } from 'react-transition-group';
function MobileImageView({ images, selectedImageIndex, closeImageView }) {
  const { swipeUsed, setSwipeUsed, setSwipeAllowedByParent } =
    useContext(GlobalStateContext);
  const [showSwipe] = useState(!swipeUsed);
  const [modFunction, setModFunction] = useState({
    mod: mod(0),
  });
  const [swipeType, setSwipeType] = useState('left');
  const [activeImageIndex, setActiveImageIndex] = useState(
    () => selectedImageIndex
  );

  const prevBlock = () => {
    setSwipeType('right');
    setActiveImageIndex((prevActive) => {
      setModFunction({
        mod: mod(prevActive),
      });
      if (prevActive === 0) {
        return images.length - 1;
      }
      return prevActive - 1;
    });
  };
  const nextBlock = () => {
    setSwipeType('left');
    setActiveImageIndex((prevActive) => {
      setModFunction({
        mod: mod(prevActive),
      });
      if (prevActive === images.length - 1) {
        return 0;
      }
      return prevActive + 1;
    });
  };
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      setSwipeAllowedByParent((prev) => {
        return {
          ...prev,
          onSwipedLeft: false,
        };
      });
      // to prevent tab change
      nextBlock();
    },
    onSwipedRight: (e) => {
      setSwipeAllowedByParent((prev) => {
        return {
          ...prev,
          onSwipedRight: false,
        };
      });
      prevBlock();
    },
    onSwiped: (e) => {
      setSwipeAllowedByParent((prev) => {
        return {
          ...prev,
          onSwiped: false,
        };
      });
      setSwipeUsed(true);
    },
  });
  return (
    <div className={styles.mobileImageView}>
      <div className={styles.back} onClick={closeImageView}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <div className={styles.images} {...handlers}>
        {images.map((src, i) => (
          <CSSTransition
            classNames={`swipe-image-${swipeType}`}
            timeout={300}
            in={i === activeImageIndex}
            unmountOnExit
            key={i}
          >
            <div
              className={styles.image}
              style={{
                zIndex: modFunction.mod(i),
              }}
            >
              <img src={src} alt="mehndi image" />
            </div>
          </CSSTransition>
        ))}
      </div>

      {showSwipe && (
        <div
          className={[
            styles.swipeHint,
            !swipeUsed ? styles.swipeAnimationShow : styles.swipeAnimationGone,
          ].join(' ')}
        >
          <i className="fa fa-angle-right"></i>
          <i className="fa fa-angle-right"></i>
          <i className="fa fa-angle-right"></i> swipe
        </div>
      )}
    </div>
  );
}

export default MobileImageView;
