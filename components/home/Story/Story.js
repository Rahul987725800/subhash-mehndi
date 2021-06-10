import { CSSTransition } from 'react-transition-group';
import styles from './Story.module.scss';
import { useState, useEffect } from 'react';
const numStories = 3;
function Story() {
  const [visibleStory, setVisibleStory] = useState(
    Array(numStories).fill(false)
  );
  useEffect(() => {
    setVisibleStory((prev) => {
      const updated = [...prev];
      updated[0] = true;
      return updated;
    });
  }, []);
  return (
    <div className={styles.story}>
      <div className={styles.buttons}>
        <div
          className={styles.button}
          onClick={() => {
            const activeIndex = visibleStory.findIndex((v) => v);
            setVisibleStory(Array(numStories).fill(false));
            let prevIndex = activeIndex - 1;
            if (prevIndex < 0) {
              prevIndex = numStories - 1;
            }
            setTimeout(() => {
              setVisibleStory((prev) => {
                const updated = [...prev];
                updated[prevIndex] = true;
                return updated;
              });
            }, 1000);
          }}
        >
          <i className="fa fa-angle-left"></i>
        </div>
        <div
          className={styles.button}
          onClick={() => {
            const activeIndex = visibleStory.findIndex((v) => v);
            setVisibleStory(Array(numStories).fill(false));
            let nextIndex = activeIndex + 1;
            if (nextIndex >= numStories) {
              nextIndex = 0;
            }
            setTimeout(() => {
              setVisibleStory((prev) => {
                const updated = [...prev];
                updated[nextIndex] = true;
                return updated;
              });
            }, 1000);
          }}
        >
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
      <div className={styles.firstStory}>
        <CSSTransition
          classNames={`home-welcome`}
          timeout={1000}
          in={visibleStory[0]}
        >
          <p className="visibility-hidden">Welcome</p>
        </CSSTransition>

        <CSSTransition
          classNames={`home-to`}
          timeout={2000}
          in={visibleStory[0]}
        >
          <p className="visibility-hidden">to</p>
        </CSSTransition>
        <CSSTransition
          classNames={`home-subhash`}
          timeout={3000}
          in={visibleStory[0]}
        >
          <p className="visibility-hidden">Subhash Mehndi</p>
        </CSSTransition>
      </div>
      <div className={styles.secondStory}>
        <CSSTransition
          classNames={`home-welcome`}
          timeout={1000}
          in={visibleStory[1]}
        >
          <p className="visibility-hidden">Chal be</p>
        </CSSTransition>

        <CSSTransition
          classNames={`home-to`}
          timeout={2000}
          in={visibleStory[1]}
        >
          <p className="visibility-hidden">to</p>
        </CSSTransition>
        <CSSTransition
          classNames={`home-subhash`}
          timeout={3000}
          in={visibleStory[1]}
        >
          <p className="visibility-hidden">Subhash Mehndi</p>
        </CSSTransition>
      </div>
      <div className={styles.thirdStory}>
        <CSSTransition
          classNames={`home-welcome`}
          timeout={1000}
          in={visibleStory[2]}
        >
          <p className="visibility-hidden">Jai ram ji ki</p>
        </CSSTransition>

        <CSSTransition
          classNames={`home-to`}
          timeout={2000}
          in={visibleStory[2]}
        >
          <p className="visibility-hidden">to</p>
        </CSSTransition>
        <CSSTransition
          classNames={`home-subhash`}
          timeout={3000}
          in={visibleStory[2]}
        >
          <p className="visibility-hidden">Subhash Mehndi</p>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Story;
