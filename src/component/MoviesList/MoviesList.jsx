import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id} className={styles.movieItem}>
          <Link
            className={styles.movieItemLink}
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            <div className={styles.movieCardImg}>
              {' '}
              {poster_path && (
                <img
                  className={styles.movieImg}
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
              )}
            </div>

            <h2 className={styles.movieCardTitle}>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(MoviesList);
