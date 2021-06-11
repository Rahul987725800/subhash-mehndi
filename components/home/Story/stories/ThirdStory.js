import styles from './ThirdStory.module.scss';
import { CSSTransition } from 'react-transition-group';
function ThirdStory({ show }) {
  return (
    <div className={styles.thirdStory}>
      <CSSTransition
        classNames={`first-story-welcome`}
        timeout={1000}
        in={show}
      >
        <p className="visibility-hidden">Welcome</p>
      </CSSTransition>

      <CSSTransition classNames={`first-story-to`} timeout={2000} in={show}>
        <p className="visibility-hidden">to</p>
      </CSSTransition>
      <CSSTransition
        classNames={`first-story-subhash`}
        timeout={3000}
        in={show}
      >
        <p className="visibility-hidden">Subhash Mehndi</p>
      </CSSTransition>
    </div>
  );
}

export default ThirdStory;
