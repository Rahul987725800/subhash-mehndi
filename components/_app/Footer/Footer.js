import styles from './Footer.module.scss';
import FacebookIcon from '@public/logos/facebook.svg';
import InstagramIcon from '@public/logos/instagram.svg';
import GoogleIcon from '@public/logos/google.svg';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topPart}>
        <div className={styles.followUs}>
          <h3 className={styles.head}>Follow Us</h3>
          <p className={styles.text}>
            You can help us by showing support on your networks for our
            campaigns and concerns.
          </p>
          <div className={styles.logos}>
            <FacebookIcon />
            <InstagramIcon />
            <GoogleIcon />
          </div>
        </div>
        <div className={styles.contactUs}>
          <h3 className={styles.head}>Contact Us</h3>
          <div className={styles.info}>
            <p>Subhash Gupta</p>
            <p>House No. : 3504</p>
            <p>Sector : 15 D</p>
            <p>Chandigarh, 160015.</p>
            <p>Mobile: 7508621822</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomPart}></div>
    </footer>
  );
}

export default Footer;
