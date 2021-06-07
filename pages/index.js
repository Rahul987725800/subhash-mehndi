import FeedCard from '../components/FeedCard';
import MehndiCard from '../components/MehndiCard';
import styles from './index.module.scss';
import StoriesBlock from './StoriesBlock/StoriesBlock';
export default function home() {
  return (
    <main className={styles.home}>
      <div className={styles.stories}>
        <StoriesBlock />
      </div>
      <div
        style={{
          backgroundImage: 'url(/sitebg.svg)',
        }}
        className={styles.services}
      >
        <div className={styles.cards}>
          <MehndiCard />
          <MehndiCard />
          <MehndiCard />
        </div>
      </div>
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
            <br />
            <br />
            Gupta Mehandi understands the major role of Mehandi which is applied
            as per the occasion; therefore we have an experienced team of
            Mehandi artists. The experts are enough capable of applying mehandi
            on many hands in a day and easily handle the rush of the occasion by
            meeting different demands of mehandi designs. Gupta Mehandi provides
            service in Chandigarh, Mohali, Zirakpur, Jalandar and nearby cities.
            Outstation services are also provided. The experienced mehandi
            artists will visit your door to make your event even more happening
            by bringing you classic adornment via the latest mehandi designs. We
            at Gupta Mehandi are pleased to make your occasion special by
            bringing amazing mehandi that grab each and everyone's attention.
          </p>
        </div>
        <div className={styles.feedSection}>
          <h3 className={styles.header}>Testimonials</h3>
          <FeedCard />
        </div>
      </div>
    </main>
  );
}
