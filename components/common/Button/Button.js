import styles from './Button.module.scss';
function Button(props) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
