import styles from './FirstStory.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useRef, useState, useEffect } from 'react';
const distortionFactor = 30;
// more means less distortion
function FirstStory({ show }) {
  const storyRef = useRef();
  const [animationFinished, setAnimationFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (show) {
      setAnimationFinished(false);
      setTimeout(() => {
        setAnimationFinished(true);
      }, 3000);
    }
  }, [show]);
  return (
    <div
      className={['first-story', styles.firstStory].join(' ')}
      ref={storyRef}
    >
      <div
        className={styles.mouseTracker}
        onMouseMove={(e) => {
          // console.log(e.target);
          // console.log(storyRef.current);
          // console.log(storyRef.current.children);
          if (!animationFinished) return;
          const storyBox = storyRef.current.getBoundingClientRect();
          const midX = storyBox.left + storyBox.width / 2;
          const midY = storyBox.top + storyBox.height / 2;
          // console.log(midX, midY);
          // console.log(e.clientX, e.clientY);
          const distortionX = e.clientX - midX;
          const distortionY = e.clientY - midY;
          // console.log(distortionX);
          // console.log(distortionY);
          const children = storyRef.current.children;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (i === children.length - 1) {
              child.style.transform = `translate(${
                -distortionX / distortionFactor
              }px, ${-distortionY / distortionFactor}px)`;
            } else {
              child.style.transform = `translate(${
                distortionX / distortionFactor
              }px, ${distortionY / distortionFactor}px)`;
            }
          }
        }}
      ></div>
      <CSSTransition classNames={`welcome`} timeout={1000} in={show}>
        <p className="visibility-hidden" draggable={false}>
          Welcome
        </p>
      </CSSTransition>

      <CSSTransition classNames={`to`} timeout={2000} in={show}>
        <p className="visibility-hidden">to</p>
      </CSSTransition>
      <CSSTransition classNames={`subhash`} timeout={3000} in={show}>
        <p className={['visibility-hidden', styles.name].join(' ')}>
          Subhash Mehndi
        </p>
      </CSSTransition>
      <CSSTransition classNames={`image`} timeout={3000} in={show}>
        <div className={styles.image}>
          <img src="/stars-parallax.png" className={styles.parallex} />
          <img src="/bridal-home.jpg" className={styles.main} />
        </div>
      </CSSTransition>
    </div>
  );
}

export default FirstStory;
