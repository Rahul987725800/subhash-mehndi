import styles from './ThirdStory.module.scss';
import { CSSTransition } from 'react-transition-group';
function ThirdStory({ show }) {
  return (
    <div className={[styles.thirdStory, 'third-story'].join(' ')}>
      <CSSTransition classNames={`bigText`} timeout={1000} in={show}>
        <p className={[styles.big].join(' ')}>Book Now</p>
      </CSSTransition>

      <CSSTransition classNames={`smallText`} timeout={2000} in={show}>
        <p className={[styles.small].join(' ')}>
          Wedding Mehndi, Bridal Mehndi, Arabic Mehndi, Designer Mehndi, Mugali
          Mehndi <br /> <br /> <br /> Churi, Gehne, Prandi, Jutti, Kade stall
        </p>
      </CSSTransition>

      <CSSTransition classNames={'subhash-image'} timeout={3000} in={show}>
        <div className={styles.subhashImage}>
          <img src="/161.jpg" alt="" />
        </div>
      </CSSTransition>

      <CSSTransition classNames={`image`} timeout={3000} in={show}>
        <div className={styles.image}></div>
      </CSSTransition>
    </div>
  );
}

export default ThirdStory;
