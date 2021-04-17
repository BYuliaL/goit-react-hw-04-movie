import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={styles.buttonGoBack}>
      <button type="button" onClick={onClick} className={styles.button}>
        Go back
      </button>
    </div>
  );
};
export default Button;
