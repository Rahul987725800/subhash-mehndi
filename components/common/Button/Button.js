import styles from './Button.module.scss';
function Button({ children }) {
  return <span className={styles.button}>{children}</span>;
}

export default Button;
