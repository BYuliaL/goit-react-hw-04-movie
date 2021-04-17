import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spiner = () => {
  return (
    <div className={styles.Loader}>
      <Loader
        type="Circles"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={5000}
      />
    </div>
  );
};

export default Spiner;
