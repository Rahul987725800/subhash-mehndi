import styles from './MobileImageView.module.scss';
import { useSwipeable } from 'react-swipeable';
import { useContext, useState, useEffect } from 'react';
import { mod } from '../../../utils';
import { GlobalStateContext } from '../../../state/GlobalStateProvider';
import { CSSTransition } from 'react-transition-group';
import CustomImage from '../../../components/CustomImage';
function MobileImageView({ images, selectedImageIndex, closeImageView }) {
  const { swipeUsed, setSwipeUsed } = useContext(GlobalStateContext);
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
      // to prevent tab change

      nextBlock();
    },
    onSwipedRight: (e) => {
      prevBlock();
    },
    onSwiped: (e) => {
      setSwipeUsed(true);
    },
  });
  return (
    <div className={styles.mobileImageView}>
      <div className={styles.back} onClick={closeImageView}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <div className={styles.images} {...handlers}>
        {images.map((imgCode, i) => (
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
              <CustomImage
                imgCode={imgCode}
                height="80vh"
                width="95vw"
                imageFit="contain"
                noHover
              />
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
