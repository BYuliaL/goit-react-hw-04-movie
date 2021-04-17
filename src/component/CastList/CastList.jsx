import styles from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(({ name, profile_path, character }) => (
        <li key={name} className={styles.castItem}>
          {profile_path && (
            <img
              className={styles.castImg}
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt={name}
            />
          )}
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.protoType = {
  cast: PropTypes.array,
};

export default CastList;
