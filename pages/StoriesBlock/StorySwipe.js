import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CSSTransition } from 'react-transition-group';
import styles from './StorySwipe.module.scss';
import { mod } from '../../utils';
function StorySwipe({ items }) {
  const [active, setActive] = useState(0);
  const [swipeType, setSwipeType] = useState('left');
  const automaticSwipeRef = useRef();
  const [modFunction, setModFunction] = useState({
    mod: mod(0),
  });
  useEffect(() => {
    // automaticSwipeRef.current = setInterval(() => {
    //   setSwipeType('left');
    //   nextBlock();
    // }, 4000);
    () => {
      clearInterval(automaticSwipeRef.current);
    };
  }, []);

  const prevBlock = () => {
    setSwipeType('right');
    setActive((prevActive) => {
      setModFunction({
        mod: mod(prevActive),
      });
      if (prevActive === 0) {
        return items.length - 1;
      }
      return prevActive - 1;
    });
  };
  const nextBlock = () => {
    setSwipeType('left');
    setActive((prevActive) => {
      setModFunction({
        mod: mod(prevActive),
      });
      if (prevActive === items.length - 1) {
        return 0;
      }
      return prevActive + 1;
    });
  };
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      // console.log('Swiped Left');
      // console.log(e);
      nextBlock();
    },
    onSwipedRight: (e) => {
      // console.log('Swiped Right');
      // console.log(e);
      prevBlock();
    },
    onSwiped: (e) => {
      // console.log('Swiped');
      // console.log(e);
      // this is called before swiped left or swiped right
      clearInterval(automaticSwipeRef.current);
    },
    trackMouse: true,
  });
  return (
    <div {...handlers} className={styles.container}>
      {items.map((comp, i) => {
        return (
          <CSSTransition
            classNames={`swipe-story-${swipeType}`}
            timeout={300}
            in={i === active}
            unmountOnExit
            key={i}
          >
            <div
              className={styles.story}
              style={{
                zIndex: modFunction.mod(i),
              }}
            >
              {comp}
            </div>
          </CSSTransition>
        );
      })}
      <div className={styles.arrows}>
        <div className={styles.arrow} onClick={prevBlock}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className={styles.arrow} onClick={nextBlock}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

export default StorySwipe;
