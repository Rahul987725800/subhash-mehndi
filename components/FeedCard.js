import styles from './FeedCard.module.scss';
function FeedCard() {
  return (
    <div className={styles.feedCard}>
      <div className={styles.client}>
        <img src="/face.png" alt="client image" />

        <div className={styles.details}>
          <p className={styles.name}>Neha Gupta</p>
          <div className={styles.location}>
            <p>New Delhi</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <p className={styles.complement}>
        <img
          src="/icons/left-quotes.svg"
          alt="left quote"
          style={{ marginRight: '1rem' }}
        />
        Amazing designs, go for him blindly.
        <img
          src="/icons/right-quotes.svg"
          alt="right quote"
          style={{ marginLeft: '1rem' }}
        />
      </p>

      <span className={styles.button}>
        Next <i className="fa fa-angle-right"></i>
      </span>
    </div>
  );
}

export default FeedCard;
