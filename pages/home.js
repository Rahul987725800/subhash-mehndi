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
          <h1 className={styles.header}>
            Welcome to <br /> Subhash Gupta Mehndi Art
          </h1>
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
            Subhash Gupta Mehandi feels proud in meeting tons of diverse desires
            by bringing a great range of Mehandi designs for ladies. The classic
            beauty of each of these mehandi and awesome color that sets well
            truly makes the occasion pleasant and memorable for ladies. And
            knowing this fact, Subhash Gupta Mehandi comes up with creative,
            unique, latest and special designs that meet the desire of every
            woman.
          </p>
        </div>
        <div className={styles.feedSection}>
          <h3 className={styles.header}>Testimonials</h3>
          <FeedCards />
        </div>
      </div>
      <div>
        <div className={styles.servicePara}>
          <h1 className={styles.header}>Services</h1>
          <p className={styles.para}>
            We provide Bridal Mehndi, Designer Mehndi and Churi Stalls, at
            weddings and functions.
            <br />
            <b>Bridal Mehndi</b> involves application of mehndi across hands and
            legs in general but is customisable based on specific needs of
            customer. We also make various figures like Ganesha, Elephant,
            Krishna and Radha, Dulha Dulhan, Shehnai etc. <br />
            <b>Designer mehndi</b> includes other types like Arabic, Indo Arabic
            mehndi, Western mehndi. it is less heavy and we create more spaced
            designs.
            <br />
            Subhash Gupta is very talented and above that we also have a team
            very talented artists, who are really{' '}
            <b>flexible and customize designs </b>
            according to your spe cific need.
            <br />
            Beside mehndi, we also provide{' '}
            <b>
              Churi, Bangles, Kade, Jutti, Hathful stall, which can be booked
              separately.
            </b>
            <br />
            We provide services in <b>Chandigarh</b> and its outskirts. We have
            clients from <b>Amritsar, Zirakpur, Mohali, Ambala </b>. We also
            provide outstation services.
          </p>
        </div>

        <div className={styles.services}>
          <MehndiCards />
        </div>
      </div>
      <div>
        <h1
          className={styles.header}
          style={{
            textAlign: 'center',
          }}
        >
          Gallery
        </h1>
        <HomeGallery />
      </div>
    </main>
  );
}
