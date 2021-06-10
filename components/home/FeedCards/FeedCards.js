import FeedCard from './FeedCard/FeedCard';
import styles from './FeedCards.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
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
    feedback: 'He is really great, go for him.',
  },
];
function FeedCards() {
  const [activeFeedIndex, setActiveFeedIndex] = useState(0);
  const [loadedFirstTime, setLoadedFirstTime] = useState(true);
  const [scrollInterval, setScrollInterval] = useState();
  const [scrollTimeout, setScrollTimeout] = useState();
  const startAutomaticScroll = () => {
    const i = setInterval(() => {
      // console.log('auto next feed');
      nextFeed();
    }, 5000);
    setScrollInterval(i);
  };
  useEffect(() => {
    // console.log('start auto scroll');
    startAutomaticScroll();
  }, []);
  const nextFeed = () => {
    setActiveFeedIndex((prevActiveFeedIndex) => {
      if (prevActiveFeedIndex === feeds.length - 1) {
        return 0;
      } else {
        return prevActiveFeedIndex + 1;
      }
    });
  };
  const prevFeed = () => {
    setActiveFeedIndex((prevActiveFeedIndex) => {
      if (prevActiveFeedIndex === 0) {
        return feeds.length - 1;
      } else {
        return prevActiveFeedIndex - 1;
      }
    });
  };
  const manualControl = () => {
    setLoadedFirstTime(false);
    clearInterval(scrollInterval);
    clearTimeout(scrollTimeout);
    const t = setTimeout(() => {
      // console.log('resumed auto scroll');
      startAutomaticScroll();
    }, 5000);
    setScrollTimeout(t);
  };
  return (
    <div className={styles.feedCards}>
      {feeds.map((feed, i) => (
        <CSSTransition
          classNames={`feed`}
          timeout={300}
          in={i === activeFeedIndex}
          key={i}
        >
          <div
            className={[
              styles.feedCard,
              loadedFirstTime && i === activeFeedIndex
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
          prevFeed();
        }}
      >
        Prev <i className="fa fa-angle-left"></i>
      </div>
      <div
        className={[styles.button, styles.next].join(' ')}
        onClick={() => {
          manualControl();
          nextFeed();
        }}
      >
        Next <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
}

export default FeedCards;
