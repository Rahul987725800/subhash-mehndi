import styles from './SecondStory.module.scss';
import { CSSTransition } from 'react-transition-group';
function SecondStory({ show }) {
  return (
    <div className={['second-story', styles.secondStory].join(' ')}>
      <div className={styles.bigTextGroup}>
        {bigText('Subhash')}
        {bigText('Mehndi')}
        <div className={styles.lineBreaker}></div>
        {bigText('has')}
        {bigText('its')}
        {bigText('own')}
      </div>
      <div className={styles.smallTextGroup}>
        {smallText('significance')}
        {smallText('in')}
        {smallText('Tri-City')}
        <div className={styles.lineBreaker}></div>
        {smallText('Chandigarh,')}
        {smallText('Mohali,')}
        {smallText('Zirakpur')}
      </div>
      <CSSTransition classNames={`subhash-image`} timeout={2000} in={show}>
        <div className={styles.subhashImage}>
          <img src="/storyimg.jpg" />
        </div>
      </CSSTransition>
      <CSSTransition classNames={`image`} timeout={3000} in={show}>
        <div className={styles.image}></div>
      </CSSTransition>
    </div>
  );
  function bigText(text) {
    return (
      <CSSTransition classNames={`bigText`} timeout={1000} in={show}>
        <p className={[styles.big, 'visibility-hidden'].join(' ')}>
          {text}&nbsp;
        </p>
      </CSSTransition>
    );
  }
  function smallText(text) {
    return (
      <CSSTransition classNames={`smallText`} timeout={2000} in={show}>
        <p className={[styles.small, 'visibility-hidden'].join(' ')}>
          {text}&nbsp;
        </p>
      </CSSTransition>
    );
  }
}

export default SecondStory;
