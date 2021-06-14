import FeedCard from './FeedCard/FeedCard';
import styles from './FeedCards.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useScrollControl } from '../useScrollControl';
import { useSwipeable } from 'react-swipeable';
const feeds = [
  {
    src: '/images/clients/client1.jpg',
    name: 'Neha Chaudhary',
    location: 'Mohali',
    feedback: `I loved my mehandi infact everyone at my wedding loved it..
    Their team work is amazing, each and every mehandi artist were best at their work.`,
  },
  {
    src: '/images/clients/client2.jpg',
    name: 'Ritika Sharma',
    location: 'Chandigarh',
    feedback: `Subhash Gupta is punctual and polite and provides really awesome service at reasonable price. very nice color and nice team efforts. I always recommends to my friends and colleague .`,
  },
  {
    src: '/images/clients/client3.jpg',
    name: 'Dimple Kaur',
    location: 'Chandigarh',
    feedback: `We booked Subhash Gupta mehandi artist for bridal  mehandi in  my sister marriage! His henna designs were beautiful and all of our guests enjoyed taking part in this feminine and lovely tradition. The cost was very reasonable and his artistry made for a really enjoyable day.`,
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
  const handlers = useSwipeable({
    onSwipedLeft: nextItem,
    onSwipedRight: prevItem,
    trackMouse: true,
  });

  return (
    <div className={styles.feedCards} {...handlers}>
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
        Prev <i className="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div
        className={[styles.button, styles.next].join(' ')}
        onClick={() => {
          manualControl();
          nextItem();
        }}
      >
        Next <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default FeedCards;
