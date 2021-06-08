import { isMobile } from 'react-device-detect';
import FeedCard from '../components/FeedCard';
import MehndiCard from '../components/MehndiCard';
import styles from './index.module.scss';
import StoriesBlock from './StoriesBlock/StoriesBlock';
export default function home() {
  return (
    <main className={styles.home}>
      {!isMobile && <StoriesBlock />}

      <div className={styles.textfeed}>
        <div className={styles.textSection}>
          <h1 className={styles.header}>Welcome to Subhash Mehndi Art</h1>
          <p className={styles.para}>
            Mehandi has been a classic adornment for ladies. Mehandi in Indian
            tradition is typically applied during Hindu weddings, Namboodiri
            weddings and Hindu festivals like Karva Chauth, Vat Purnima, Diwali,
            Bhai Dooj, Navraathri, Durga Pooja and Teej. There are many
            variations and designs. Women usually apply mehandi designs to their
            hands and feet.
          </p>
          <br />
          <p>
            Gupta Mehandi feels proud in meeting tons of diverse desires by
            bringing a great range of Mehandi designs for ladies. The classic
            beauty of each of these mehandi and awesome color that sets well
            truly makes the occasion pleasant and memorable for ladies. And
            knowing this fact, Gupta Mehandi comes up with creative, unique,
            latest and special designs that meet the desire of every woman.
          </p>
        </div>
        <div className={styles.feedSection}>
          <h3 className={styles.header}>Testimonials</h3>
          <FeedCard />
        </div>
      </div>
      <div className={styles.services}>
        <h1 className={styles.header} style={{ textAlign: 'center' }}>
          Services
        </h1>
        <div className={styles.cards}>
          <MehndiCard />
          <MehndiCard />
          <MehndiCard />
        </div>
      </div>
    </main>
  );
}
