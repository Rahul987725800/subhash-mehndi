import styles from './Footer.module.scss';
import FacebookIcon from '@public/logos/facebook.svg';
import InstagramIcon from '@public/logos/instagram.svg';
import GoogleIcon from '@public/logos/google.svg';
import Button from '@components/common/Button/Button';
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
            <a
              href="https://www.facebook.com/profile.php?id=100029136844529"
              target="_blank"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/subhashgupta_mehandiartist/"
              target="_blank"
            >
              <InstagramIcon />
            </a>

            <GoogleIcon />
          </div>
        </div>
        <div className={styles.contactUs}>
          <h3 className={styles.head}>Contact Us</h3>
          <div className={styles.info}>
            <div className={styles.buttons}>
              <a href="tel: 7508621822">
                Call Now &nbsp;{' '}
                <i className="fa fa-phone" aria-hidden="true"></i>
              </a>

              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+917508621822"
              >
                Whatsapp Us &nbsp;
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
            <p>Subhash Gupta</p>
            <p>House No. 3504</p>
            <p>Sector : 15 - D</p>
            <p>Chandigarh, 160015.</p>
            <p>
              Mobile: <a href="tel: 7508621822">7508621822</a>
            </p>
            <p>
              &emsp; &emsp; &emsp;&nbsp;
              <a href="tel: 9417591297">9417591297</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomPart}></div>
    </footer>
  );
}

export default Footer;
