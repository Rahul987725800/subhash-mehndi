import styles from './FirstStory.module.scss';
import { CSSTransition } from 'react-transition-group';
function FirstStory({ show }) {
  return (
    <div className={['first-story', styles.firstStory].join(' ')}>
      <CSSTransition classNames={`welcome`} timeout={1000} in={show}>
        <p className="visibility-hidden">Welcome</p>
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
