import FeedCard from './FeedCard/FeedCard';
import styles from './FeedCards.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useScrollControl } from '../useScrollControl';
const feeds = [
  {
    src: '/face.png',
    name: 'Neha Chaudhary',
    location: 'New Delhi',
    feedback: 'Amazing designs go for him blindly',
  },
  {
    src: '/images/mehandi/1.jpg',
    name: 'Rahul Sharma',
    location: 'Chandigarh',
    feedback: `He is really great, go for him. Lorem ipsum dolor sit amet consectetur adipisicing elit. SuntLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nem nem`,
  },
];

function FeedCards() {
  const {
    activeItemIndex,
    loadedFirstTime,
    nextItem,
    prevItem,
    manualControl,
  } = useScrollControl(feeds.length, 5000);

  return (
    <div className={styles.feedCards}>
      {feeds.map((feed, i) => (
        <CSSTransition
          classNames={`feed`}
          timeout={300}
          in={i === activeItemIndex}
          key={i}
        >
          <div
            className={[
              styles.feedCard,
              loadedFirstTime && i === activeItemIndex
                ? 'display-block'
                : 'display-none',
            ].join(' ')}
          >
            <FeedCard
              src={feed.src}
              name={feed.name}
              location={feed.location}
              feedback={feed.feedback}
            />
          </div>
        </CSSTransition>
      ))}
      <div
        className={styles.button}
        onClick={() => {
          manualControl();
          prevItem();
        }}
      >
        Prev <i className="fa fa-angle-left"></i>
      </div>
      <div
        className={[styles.button, styles.next].join(' ')}
        onClick={() => {
          manualControl();
          nextItem();
        }}
      >
        Next <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default FeedCards;
