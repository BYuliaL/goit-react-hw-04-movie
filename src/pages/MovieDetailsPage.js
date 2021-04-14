import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Axios from 'axios';

import Cast from '../component/Cast';
import Reviews from '../component/Reviews';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
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
    console.log(response.data);

    this.setState({ ...response.data });
    this.setState({ release_date: this.state.release_date.slice(0, 4) });
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
        <img src={imgURL} alt={title} />

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
