import { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US`,
    );
    // console.log(response.data);

    this.setState({ ...response.data });
    console.log(this.state.movie);
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;

    const scope = vote_average * 10;
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
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
