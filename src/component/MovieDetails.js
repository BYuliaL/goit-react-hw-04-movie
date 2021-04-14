const MoviesDetails = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const scope = vote_average * 10;
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const imgURL = baseURL + poster_path;

  return (
    <>
      <h1>
        {title}({release_date})
      </h1>
      <p>User Score: {scope}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {poster_path && <img src={imgURL} alt={title} />}
    </>
  );
};

export default MoviesDetails;
