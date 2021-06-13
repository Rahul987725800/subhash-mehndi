import styles from './home.module.scss';
import FeedCards from '@components/home/FeedCards/FeedCards';
import Story from '@components/home/Story/Story';

import HomeGallery from '@components/home/HomeGallery/HomeGallery';
import MehndiCards from '@components/home/MehndiCards/MehndiCards';
export default function home() {
  return (
    <main className={styles.home}>
      <Story />
      <div className={styles.textFeed}>
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
          <FeedCards />
        </div>
      </div>
      <div className={styles.services}>
        <h1 className={styles.header} style={{ textAlign: 'center' }}>
          Services
        </h1>
        <MehndiCards />
      </div>
      <h1
        className={styles.header}
        style={{
          textAlign: 'center',
        }}
      >
        Gallery
      </h1>
      <HomeGallery />
    </main>
  );
}
