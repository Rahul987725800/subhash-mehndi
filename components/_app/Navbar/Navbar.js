import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();
  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundImage: 'url(/navbg.jpg)',
      }}
    >
      <div className={styles.content}>
        <Link href="/home">
          <div className={styles.logo}>
            <img
              src="/ganesha/ganesha-colored.svg"
              alt="subhash mehndi ganesha logo"
              aria-hidden="true"
            />
            <p className={styles.text}>Subhash Gupta Mehndi Artist</p>
          </div>
        </Link>

        <div className={styles.links}>
          <Link href="/home">
            <a className={router.pathname == '/home' ? styles.active : ''}>
              Home
            </a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname == '/gallery' ? styles.active : ''}>
              Gallery
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? styles.active : ''}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
