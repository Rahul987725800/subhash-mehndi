import styles from './Story.module.scss';
import { useState, useEffect, useRef } from 'react';
import FirstStory from './stories/FirstStory';
import SecondStory from './stories/SecondStory';
import ThirdStory from './stories/ThirdStory';
import { CSSTransition } from 'react-transition-group';
import LeftRightButtons from '@components/common/LeftRightButtons/LeftRightButtons';
import { useSwipeable } from 'react-swipeable';
const numStories = 3;
const autoScrollDelay = 5000;
function Story() {
  const [visibleStory, setVisibleStory] = useState(
    Array(numStories).fill(false)
  );
  const [navigationTimeout, setNavigationTimeout] = useState();
  const [autoScrollInterval, setAutoScrollInterval] = useState();
  const [scrollResumeTimeout, setScrollResumeTimeout] = useState();
  const componentMountedRef = useRef(true);
  const [flipFlop, setFlipFlop] = useState(true);
  // let componentMounted = true;
  useEffect(() => {
    const i = setInterval(() => {
      console.log('componentMountedRef.current');
      console.log(componentMountedRef.current);
      // console.log('componentMounted');
      // console.log(componentMounted);
      if (componentMountedRef.current) nextStory();
    }, autoScrollDelay);
    setAutoScrollInterval(i);
    return () => {
      clearInterval(i);
    };
  }, [flipFlop]);
  const startAutomaticScroll = () => {
    setFlipFlop(!flipFlop);
  };
  useEffect(() => {
    setVisibleStory((prev) => {
      const updated = [...prev];
      updated[0] = true;
      return updated;
    });
    startAutomaticScroll();
    return () => {
      componentMountedRef.current = false;
      // componentMounted = false;
      console.log(autoScrollInterval);
    };
  }, []);

  const nextStory = () => {
    clearTimeout(navigationTimeout);
    setVisibleStory((prevVisibleStory) => {
      const activeIndex = prevVisibleStory.findIndex((v) => v);
      let nextIndex = activeIndex + 1;
      if (nextIndex >= numStories) {
        nextIndex = 0;
      }
      const t = setTimeout(() => {
        console.log(componentMountedRef.current);

        if (componentMountedRef.current)
          setVisibleStory((prev) => {
            const updated = [...prev];
            updated[nextIndex] = true;
            return updated;
          });
      }, 1300);
      setNavigationTimeout(t);
      return Array(numStories).fill(false);
    });
  };
  const prevStory = () => {
    clearTimeout(navigationTimeout);
    setVisibleStory((prevVisibleStory) => {
      const activeIndex = prevVisibleStory.findIndex((v) => v);
      let prevIndex = activeIndex - 1;
      if (prevIndex < 0) {
        prevIndex = numStories - 1;
      }
      const t = setTimeout(() => {
        console.log(componentMountedRef.current);
        if (componentMountedRef.current)
          setVisibleStory((prev) => {
            const updated = [...prev];
            updated[prevIndex] = true;
            return updated;
          });
      }, 1300);
      setNavigationTimeout(t);
      return Array(numStories).fill(false);
    });
  };

  const manualControl = () => {
    clearInterval(autoScrollInterval);
    clearTimeout(scrollResumeTimeout);
    const t = setTimeout(() => {
      // console.log('componentMountedRef.current');
      // console.log(componentMountedRef.current);
      // console.log('componentMounted');
      // console.log(componentMounted);
      if (componentMountedRef.current) startAutomaticScroll();
      // because of nesting we had to use this
    }, autoScrollDelay);
    setScrollResumeTimeout(t);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      manualControl();
      nextStory();
    },
    onSwipedRight: () => {
      manualControl();
      prevStory();
    },
    trackMouse: true,
  });

  return (
    <div className={styles.story} {...handlers}>
      <LeftRightButtons
        leftClick={() => {
          manualControl();
          prevStory();
        }}
        rightClick={() => {
          manualControl();
          nextStory();
        }}
        textColor="white"
        borderColor="white"
      />

      {[FirstStory, SecondStory, ThirdStory].map((StoryChild, i) => {
        return (
          <CSSTransition
            classNames={`story`}
            timeout={1300}
            in={visibleStory[i]}
            key={i}
          >
            <div className={[styles.storyChild, 'visibility-hidden'].join(' ')}>
              <StoryChild show={visibleStory[i]} />
            </div>
          </CSSTransition>
        );
      })}
    </div>
  );
}

export default Story;
