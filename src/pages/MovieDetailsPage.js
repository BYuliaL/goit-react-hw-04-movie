import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Axios from 'axios';

import Cast from '../component/Cast';
import Reviews from '../component/Reviews';
import MoviesDetails from '../component/MovieDetails';

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
    // console.log(response.data);
    // console.log(response.data.poster_path);

    this.setState({ ...response.data });
    this.setState({ release_date: this.state.release_date.slice(0, 4) });
    // console.log(this.state.poster_path);

    // console.log(this.state.movie);
  }

  render() {
    return (
      <>
        <MoviesDetails {...this.state} />

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
