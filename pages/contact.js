import Button from '@components/common/Button/Button';
import CustomForm from '@components/contact/CustomForm/CustomForm';
import styles from './contact.module.scss';

function contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src="/profile.jpg" alt="Subhash Gupta" aria-hidden="true" />
        </div>
        <h1 className={styles.header}>Subhash Gupta</h1>
        <p className={styles.phones}>Mob. 7508621822, 9417591297</p>
        <p>H.no. 3504, Sector 15 D Chandigarh</p>
        <div className={styles.buttons}>
          <Button revert>
            <a href="tel: 7508621822">
              Call Now &nbsp; <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
          </Button>
          <Button revert>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+917508621822"
            >
              Whatsapp &nbsp;
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </Button>
        </div>
      </div>
      <div className={styles.descriptionMap}>
        <div className={styles.description}>
          <h2 className={styles.header}>About</h2>
          <p className={styles.text}>
            Subhash gupta has more than 20 years of experience in Mehandi Arts,
            he has been the star in field of mehandi arts, and is proficient in
            variety of Mehandi Designs. We have been greeted with highly
            positive feedback regarding mehandi design and mehandi color. We
            leave no stones unturned in satisfying our customers and to make
            their auspicisious occasions happy and memorable. <br /> <br />
            The strength of Subhash Gupta Mehandi has been its team of highly
            trained professional mehandi artists and Subhash Gupta actively
            leads the same. Looking forward to serve you.
          </p>
        </div>
        <div className={styles.map}>
          {/* <iframe
            className={styles.mapFrame}
            title="location virender gupta mehandi art chandigarh"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3429.2812005408427!2d76.77293089682006!3d30.738601796005398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf90f5111622daeb3!2sVIRENDER%20GUPTA%20Mehandi%20ART!5e0!3m2!1sen!2sin!4v1610166586857!5m2!1sen!2sin"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe> */}
          <p>H.no. 3504, Sector 15 D, Chandigarh</p>
        </div>
      </div>
      <div className={styles.getInTouch}>
        <h2 className={styles.header}>Want a Quotation?</h2>
        <p className={styles.text}>
          Enter your details below, we will get back to you shortly.
        </p>
        <CustomForm />
      </div>
    </div>
  );
}

export default contact;
// dguirphl1
