import styles from './LeftRightButtons.module.scss';
function LeftRightButtons({ leftClick, rightClick, textColor, borderColor }) {
  return (
    <div
      className={styles.buttons}
      style={{
        color: textColor,
      }}
    >
      <div
        className={styles.button}
        onClick={leftClick}
        style={{
          borderColor,
        }}
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div
        className={styles.button}
        onClick={rightClick}
        style={{
          borderColor,
        }}
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default LeftRightButtons;
