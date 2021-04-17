import PropTypes from 'prop-types';
import styles from './MoviesDetails.module.css';

const MoviesDetails = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const scope = vote_average * 10;
  const date = release_date.slice(0, 4);
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const imgURL = baseURL + poster_path;

  return (
    <div className={styles.movieInformation}>
      <div className={styles.movieInformationCard}>
        <img src={imgURL} alt={title} />
      </div>

      <div className={styles.movieInformationCard}>
        <h2>
          {title} ({date})
        </h2>
        <h3>User Score: {scope}%</h3>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={styles.movieGenres}>
          {genres.map(({ name }) => (
            <li key={name} className={styles.movieGenresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MoviesDetails.protoTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default MoviesDetails;
