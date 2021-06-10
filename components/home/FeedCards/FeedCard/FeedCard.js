import CustomImage from '@components/common/CustomImage/CustomImage';
import { trimmedText } from '@base/utils';
import styles from './FeedCard.module.scss';
function FeedCard({ src, name, location, feedback }) {
  return (
    <div className={styles.feedCard}>
      <div className={styles.client}>
        <div className={styles.image}>
          <CustomImage
            src={src}
            alt="client image"
            width="130px"
            height="130px"
            imageQuality={100}
          />
        </div>

        <div className={styles.details}>
          <p
            className={styles.name}
            onClick={() => {
              console.log(name);
            }}
          >
            {name}
          </p>
          <div className={styles.location}>{location}</div>
        </div>
      </div>
      <p className={styles.complement}>
        <img
          src="/icons/left-quotes.svg"
          alt="left quote"
          style={{ marginRight: '1rem' }}
        />
        {trimmedText(feedback, 200)}
        <img
          src="/icons/right-quotes.svg"
          alt="right quote"
          style={{ marginLeft: '1rem' }}
        />
      </p>
    </div>
  );
}

export default FeedCard;
